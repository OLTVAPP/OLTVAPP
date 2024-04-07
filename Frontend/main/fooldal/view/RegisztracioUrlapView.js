import TextInput from "./input/Text.js";
import EmailInput from "./input/Email.js";
import PasswordInput from "./input/Password.js";
import NumberInput from "./input/Number.js";
class UrlapView {

    #szuloElem
    #fElem
    #szElem
    #lElem
    #leiro = {}
    #urlapElemLista = [];
    #osszesElemValidE = true;
    #adatok = {};
    #jelszo
    #list
    #ellenorzes_fel_nev;
    #valid_fel_nev;
    #ellenrozes_email;
    #valid_email
    #ellenorzes_jelszo
    #valid_jelszo
    #ellenorzes_szemelyi
    #valid_szemelyi
    #ellenorzes_tel
    #valid_tel

    constructor(szuloElem, leiro, list) {
        this.#leiro = leiro;
        this.#list = list;
        console.log(this.#list[0])

        this.letrehozz(szuloElem);
        this.adatFeltolt();


    }

    letrehozz(szuloElem) {
        this.#szuloElem = szuloElem;
        this.#szuloElem.append('<div class="container mt-10" id="fAdat">')
        this.#fElem = this.#szuloElem.children("#fAdat");
        this.#fElem.append('<h2>Felhasznalói adatok</h2>')
        this.felhasznalo();
        this.#szuloElem.append('<div class="container mt-10 border border-dark p-4" id="szAdat">')
        this.#szElem = this.#szuloElem.children("#szAdat");
        this.#szElem.append('<h2>Személyes adatok</h2>')
        this.szemelyesAdatok();
        this.#szElem.append('<div class="container mt-10 border border-dark p-4" id="lAdat">')
        this.#lElem = this.#szElem.children("#lAdat");
        this.#lElem.append('<h2>Lakcim</h2>')
        this.lakcim();
        this.#szuloElem.append('<button class="btn btn-success" id="kuld">Regisztráció elküldése</button>')
    }

    felhasznalo() {
        for (const key in this.#leiro.felhasznalo) {
            switch (this.#leiro.felhasznalo[key].tipus) {
                case "text":
                    this.#urlapElemLista.push(new TextInput(key, this.#leiro.felhasznalo[key], this.#fElem))
                    this.#ellenorzes_fel_nev = this.#fElem.children("div:last-child").children(".ellenorzes");
                    this.#valid_fel_nev = this.#fElem.children("div:last-child").children(".valid");
                    break
                case "email":
                    this.#urlapElemLista.push(new EmailInput(key, this.#leiro.felhasznalo[key], this.#fElem))
                    this.#ellenrozes_email = this.#fElem.children("div:last-child").children(".ellenorzes");
                    this.#valid_email = this.#fElem.children("div:last-child").children(".valid");
                    break
                case "password":
                    this.#urlapElemLista.push(new PasswordInput(key, this.#leiro.felhasznalo[key], this.#fElem))
                    this.#leiro.felhasznalo[key].megjelenes = "Jelszó megerősítése:"
                    this.#jelszo = (new PasswordInput(key + "2", this.#leiro.felhasznalo[key], this.#fElem))
                    this.#ellenorzes_jelszo = this.#fElem.children("div:last-child").children(".ellenorzes");
                    this.#valid_jelszo = this.#fElem.children("div:last-child").children(".valid");
                    break
                default:
            }
        }

    }

    lakcim() {
        for (const key in this.#leiro.szulo.lakcim) {
            switch (this.#leiro.szulo.lakcim[key].tipus) {
                case "text":
                    this.#urlapElemLista.push(new TextInput(key, this.#leiro.szulo.lakcim[key], this.#lElem))
                    break
                case "number":
                    this.#urlapElemLista.push(new NumberInput(key, this.#leiro.szulo.lakcim[key], this.#lElem))
                    break
                default:
            }
        }
    }

    szemelyesAdatok() {
        for (const key in this.#leiro.szulo.szemelyes_adatok) {
            switch (this.#leiro.szulo.szemelyes_adatok[key].tipus) {
                case "text":
                    this.#urlapElemLista.push(new TextInput(key, this.#leiro.szulo.szemelyes_adatok[key], this.#szElem))
                    if (key === "szemelyi_igazolvany_szam") {
                        this.#ellenorzes_szemelyi = this.#szElem.children("div:last-child").children(".ellenorzes");
                        this.#valid_szemelyi = this.#szElem.children("div:last-child").children(".valid");
                    }
                    if (key === "telefonszam") {
                        this.#ellenorzes_tel = this.#szElem.children("div:last-child").children(".ellenorzes");
                        this.#valid_tel = this.#szElem.children("div:last-child").children(".valid");
                    }
                    break
                default:
            }
        }

    }

    adatFeltolt() {
        this.submitElem = $("#kuld");
        this.submitElem.on("click", (event) => {
            event.preventDefault();
            this.#osszesElemValidE = true;
            this.#urlapElemLista.forEach(elem => {
                this.#osszesElemValidE = this.#osszesElemValidE && elem.valid;
            })
            if (this.#osszesElemValidE) {
                this.#urlapElemLista.forEach((elem) => {

                    console.log(elem.key)
                    console.log(elem.value)
                    this.#adatok[elem.key] = elem.value;
                })
                if (this.#adatok.jelszo == this.#jelszo.value) {
                    let boolean = true;
                    for (const key in this.#list[0]) {
                        if (this.#adatok.felhasznalo_email === this.#list[0][key].felhasznalo_email) {
                            boolean = true;
                            if (boolean) {
                                this.#ellenrozes_email.removeClass("elrejt");
                                this.#valid_email.addClass("elrejt")
                                boolean = false;
                            }
                        }
                        if (this.#adatok.felhasznalo_nev === this.#list[0][key].felhasznalo_nev) {
                            boolean = true;
                            if (boolean) {
                                this.#ellenorzes_fel_nev.removeClass("elrejt");
                                this.#valid_fel_nev.addClass("elrejt")
                                boolean = false;
                            }
                        }
                    }
                    for (const key in this.#list[1]) {
                        if (this.#adatok.szemelyi_igazolvany_szam === this.#list[1][key].szemelyi_igazolvany_szam) {
                            boolean = true;
                            if (boolean) {
                                this.#ellenorzes_szemelyi.removeClass("elrejt");
                                this.#valid_szemelyi.addClass("elrejt")
                                boolean = false;
                            }
                        }
                        if (this.#adatok.telefonszam === this.#list[1][key].telefonszam) {
                            boolean = true;
                            if (boolean) {
                                this.#ellenorzes_tel.removeClass("elrejt");
                                this.#valid_tel.addClass("elrejt")
                                boolean = false;
                            }
                        }
                    }
                    if (boolean) {
                        this.#esemenyTrigger("regisztracio", this.#adatok);
                        alert("Sikeres regisztráció!")
                        location.replace("bejelentkezes.html");
                    }
                }
                else {
                    this.#ellenorzes_jelszo.removeClass("elrejt");
                    this.#valid_jelszo.addClass("elrejt")
                }
            } else {
                console.log("Nem valid az űrlap");
            }
        });
    }

    #esemenyTrigger(esemenyNev, adat) {
        const E = new CustomEvent(esemenyNev, { detail: adat });
        window.dispatchEvent(E);
    }

}

export default UrlapView;

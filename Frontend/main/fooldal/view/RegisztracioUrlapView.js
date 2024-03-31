import TextInput from "./input/text.js";
import EmailInput from "./input/Email.js";
import PasswordInput from "./input/password.js";
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

    constructor(szuloElem, leiro, list) {
        this.#leiro = leiro;
        this.#list = list;

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
                    break
                case "email":
                    this.#urlapElemLista.push(new EmailInput(key, this.#leiro.felhasznalo[key], this.#fElem))
                    break
                case "password":
                    this.#urlapElemLista.push(new PasswordInput(key, this.#leiro.felhasznalo[key], this.#fElem))
                    this.#leiro.felhasznalo[key].megjelenes = "Jelszó megerősítése:"
                    this.#jelszo = (new PasswordInput(key + "2", this.#leiro.felhasznalo[key], this.#fElem))
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
                    for (const key in this.#list) {
                        if (this.#adatok.felhasznalo_email === this.#list[key].felhasznalo_email || this.#adatok.felhasznalo_nev === this.#list[key].felhasznalo_nev) {
                            if (boolean) {
                                alert("Foglalt a felhasználó név vagy az Email cím!")
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
                    alert("Nem egyforma a jelszó!")
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

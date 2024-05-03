import TextInput from "../input/Text.js";
import EmailInput from "../input/Email.js";
import NumberInput from "../input/Number.js";
import PasswordInput from "../input/Password.js";

class UrlapView {

    #szuloElem;
    #adatElem;
    #orvosElem;
    #jelszoElem
    #leiro;
    #regiAdat = [];
    #ujAdat = {};
    #index = 0;

    #valid_jelszo
    #ellenorzes_jelszo
    #jelszoAdat = {};

    #urlapElemLista = [];
    #jelszoElemLista = [];
    #osszesElemValidE = true;

    constructor(szuloElem, list, leiro) {
        this.#szuloElem = szuloElem;
        for (const key in list[0]) {
            this.#regiAdat.push(list[0][key])
        }
        this.#leiro = leiro;
        this.#letrehozz();
    }

    #letrehozz() {
        this.#szuloElem.append('<div class="container mt-10 border border-dark p-4" id="adatok">');
        this.#adatElem = this.#szuloElem.children("#adatok");
        this.#adatElem.append("<h2>Felhasználói adatok</h2>");
        this.#adatok();
        this.#szuloElem.append("<br>");
        this.#adatElem.append('<div class="container mt-10 border border-dark p-4" id="jelszo">');
        this.#jelszoElem = this.#adatElem.children("#jelszo");
        this.#jelszoElem.append("<h3>jelszó módosítás</h3>");
        this.#jelszo();
        this.#szuloElem.append('<div class="container mt-10 border border-dark p-4" id="orvos_adatok">');
        this.#orvosElem = this.#szuloElem.children("#orvos_adatok");
        this.#orvosElem.append("<h2>Orvos adatok</h2>");
        this.#orvosAdatok();
        this.#szuloElem.append('<button class="btn btn-success" id="kuld">Mentés</button>');
        this.#adatFeltolt();
    }

    #adatok() {
        let i = 0;
        for (const key in this.#leiro.adatok) {
            switch (this.#leiro.adatok[key].tipus) {
                case "text":
                    this.#urlapElemLista.push(new TextInput(key, this.#leiro.adatok[key], this.#adatElem, this.#regiAdat[this.#index]));
                    this.#index++;
                    break;
                case "email":
                    this.#urlapElemLista.push(new EmailInput(key, this.#leiro.adatok[key], this.#adatElem, this.#regiAdat[this.#index]));
                    this.#index++;
                    break;
            }

        }
        this.#adatElem.append("<br>");
    }

    #jelszo() {
        for (const key in this.#leiro.jelszo) {
            this.#jelszoElemLista.push(new PasswordInput(key, this.#leiro.jelszo[key], this.#jelszoElem));
        }
        this.#ellenorzes_jelszo = this.#jelszoElem.children("div:last-child").children(".ellenorzes");
        this.#valid_jelszo = this.#jelszoElem.children("div:last-child").children(".valid");
        this.#jelszoElem.append('<button class="btn btn-success" id="jelszoGomb">Mentés</button>');
    }

    #orvosAdatok() {
        let i = 0;
        for (const key in this.#leiro.orvos_adatok) {
            switch (this.#leiro.orvos_adatok[key].tipus) {
                case "email":
                    this.#urlapElemLista.push(new EmailInput(key, this.#leiro.orvos_adatok[key], this.#orvosElem, this.#regiAdat[this.#index]));
                    this.#index++;
                    break;
                case "text":
                    this.#urlapElemLista.push(new TextInput(key, this.#leiro.orvos_adatok[key], this.#orvosElem, this.#regiAdat[this.#index]));
                    this.#index++;
                    break;
                case "number":
                    this.#urlapElemLista.push(new NumberInput(key, this.#leiro.orvos_adatok[key], this.#orvosElem, this.#regiAdat[this.#index]));
                    this.#index++;
                    break;
            }

        }
        this.#orvosElem.append("<br>");
    }

    #adatFeltolt() {
        this.submitElem = $("#kuld");
        this.submitElem.on("click", (event) => {
            event.preventDefault();
            this.#osszesElemValidE = true;
            let elemValid = true;
            this.#urlapElemLista.forEach(elem => {
                if (elem.value !== '') {
                    if (elem.valid === true && elemValid === true) {
                        this.#osszesElemValidE = true;
                    } else {
                        this.#osszesElemValidE = false;
                        elemValid = false;
                    }
                }
            })
            if (this.#osszesElemValidE) {
                let i = 0;
                this.#urlapElemLista.forEach((elem) => {
                    if (elem.value === "" || elem.value === null) {
                        this.#ujAdat[elem.key] = this.#regiAdat[i]
                    } else {
                        this.#ujAdat[elem.key] = elem.value;
                    }
                    i++;
                })
                this.#esemenyTrigger("orvosModosit", this.#ujAdat);
            } else {
                console.log("Nem valid az űrlap");
            }
        });
        this.#jelszoElem = $("#jelszoGomb");
        this.#jelszoElem.on("click", (event) => {
            event.preventDefault();
            this.#osszesElemValidE = true;
            this.#jelszoElemLista.forEach(elem => {
                this.#osszesElemValidE = this.#osszesElemValidE && elem.valid;
            })
            if (this.#osszesElemValidE) {
                let jelszo = {};
                this.#jelszoElemLista.forEach((elem) => {
                    jelszo[elem.key] = elem.value;
                })
                console.log(jelszo)
                if (jelszo.uj_jelszo == jelszo.uj_jelszo2) {
                    this.#ellenorzes_jelszo.addClass("elrejt");
                    this.#jelszoAdat["regiJelszo"] = jelszo.regi_jelszo;
                    this.#jelszoAdat["ujJelszo"] = jelszo.uj_jelszo;
                    this.#esemenyTrigger("jelszoModosit", this.#jelszoAdat);

                }
                else {
                    this.#ellenorzes_jelszo.removeClass("elrejt");
                    this.#valid_jelszo.addClass("elrejt")
                }
            } else {
                console.log("Nem valid az űrlap!")
            }
        })
    }

    #esemenyTrigger(esemenyNev, adat) {
        const E = new CustomEvent(esemenyNev, { detail: adat });
        window.dispatchEvent(E);
    }
}

export default UrlapView;
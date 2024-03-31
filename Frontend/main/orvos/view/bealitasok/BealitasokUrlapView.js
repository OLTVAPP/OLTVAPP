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

    #urlapElemLista = [];
    #jelszoElemLista = [];
    #osszesElemValidE = true;

    constructor(szuloElem, list, leiro) {
        this.#szuloElem = szuloElem;
        for (const key in list[0]) {
            this.#regiAdat.push(list[0][key])
        }
        console.log(this.#regiAdat)
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
        this.#jelszoElem.append('<button class="btn btn-success" id="jelszo">Mentés</button>');
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
                this.#esemenyTrigger("orvosModosit");
            } else {
                console.log("Nem valid az űrlap");
            }
        });
    }

    #esemenyTrigger(esemenyNev) {
        const E = new CustomEvent(esemenyNev, { detail: this.#ujAdat });
        window.dispatchEvent(E);
    }
}

export default UrlapView;
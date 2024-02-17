import TextInput from "./input/text.js";
import EmailInput from "./input/Email.js";
import NumberInput from "./input/Number.js";
import DateInput from "./input/Date.js";

class UrlapView {

    #szuloElem
    #adatElem;
    #gyerekAdatElem;
    #gyerekLakcimElem;
    #leiro
    #urlapElemLista = [];

    constructor(szuloElem, leiro) {
        this.#szuloElem = szuloElem
        this.#leiro = leiro
        this.#letrehozz();
    }

    #letrehozz() {
        this.#szuloElem.append('<div class="adatok">')
        this.#adatElem = this.#szuloElem.children(".adatok");
        this.#adatElem.append('<h2>Szülő adatok</h2>')
        this.Szulo();
        this.#adatElem.append('<div class="gyerekAdat">')
        this.#gyerekAdatElem = this.#adatElem.children(".gyerekAdat");
        this.#gyerekAdatElem.append('<h2>Gyerek adatok</h2>')
        this.gyerek();
        this.#gyerekAdatElem.append('<div class="gyerekLakcim">')
        this.#gyerekLakcimElem = this.#gyerekAdatElem.children(".gyerekLakcim");
        this.#gyerekLakcimElem.append('<h2>Lakcim adatok</h2>')
        this.gyerekLakcim();
        this.#szuloElem.append('<button class="kuld">Mentés</button>')
    }

    Szulo() {
        for (const key in this.#leiro.szulo) {
            switch (this.#leiro.szulo[key].tipus) {
                case "text":
                    this.#urlapElemLista.push(new TextInput(key, this.#leiro.szulo[key], this.#adatElem))
                    break
                case "email":
                    this.#urlapElemLista.push(new EmailInput(key, this.#leiro.szulo[key], this.#adatElem))
                    break
                default:
            }
        }

    }

    gyerek() {
        for (const key in this.#leiro.gyerek.szemelyes_adatok) {
            switch (this.#leiro.gyerek.szemelyes_adatok[key].tipus) {
                case "text":
                    this.#urlapElemLista.push(new TextInput(key, this.#leiro.gyerek.szemelyes_adatok[key], this.#gyerekAdatElem))
                    break
                case "number":
                    this.#urlapElemLista.push(new NumberInput(key, this.#leiro.gyerek.szemelyes_adatok[key], this.#gyerekAdatElem))
                    break
                case "date":
                    this.#urlapElemLista.push(new DateInput(key, this.#leiro.gyerek.szemelyes_adatok[key], this.#gyerekAdatElem))
                    break
                default:
            }
        }

    }
    gyerekLakcim() {
        for (const key in this.#leiro.gyerek.lakcim) {
            switch (this.#leiro.gyerek.lakcim[key].tipus) {
                case "text":
                    this.#urlapElemLista.push(new TextInput(key, this.#leiro.gyerek.lakcim[key], this.#gyerekLakcimElem))
                    break
                case "number":
                    this.#urlapElemLista.push(new NumberInput(key, this.#leiro.gyerek.lakcim[key], this.#gyerekLakcimElem))
                    break
                default:
            }
        }
    }
}

export default UrlapView;
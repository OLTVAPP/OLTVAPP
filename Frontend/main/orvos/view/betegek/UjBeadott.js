import DateInput from "../input/Date.js";
import TextArea from "../input/TextArea.js";

class UjBeadott {
    #szuloElem
    #list
    #leiro
    #beadando_id
    #mentesGomb;
    #beszerzes_id;
    #beadas_adat = {};
    #oltas_id;
    #keszlet;

    #urlapElemLista = [];
    #osszesElemValidE = true;

    constructor(szuloElem, list, leiro, beadando_id) {
        this.#szuloElem = szuloElem
        this.#list = list;
        this.#leiro = leiro;
        this.#beadando_id = beadando_id;
        this.#select();
        this.#sor();
        this.#kattintas();
    }

    #select() {
        let txt = "<label for='oltas'>Válassz készletett: </label>"
        txt += '<select name="keszlet" id="keszlet">'
        txt += `<option>oltás neve | darab | beszerzés dátuma | lejárati dátuma</option>`
        for (let key in this.#list) {
            txt += `<option data-values=${this.#list[key].oltas_id},${this.#list[key].beszerzes_id}>${this.#list[key].oltoanyag_neve} | ${this.#list[key].darab} | ${this.#list[key].beszerzes_datuma} | ${this.#list[key].lejarati_datuma}</option>`
        }
        txt += "</select>"
        txt += '<div class="valid elrejt">OK</div>'
        txt += '<div class="invalid elrejt">Nincs megadva adat</div>'
        txt += "<br><br>"

        this.#szuloElem.append(txt);

        this.invalidElem = this.#szuloElem.children(".invalid");
        this.validElem = this.#szuloElem.children(".valid");
        $("#keszlet").on("change", () => {
            try {
                let ertekek = $("#keszlet option:selected").data("values").split(",");
                this.validElem.removeClass("elrejt");
                this.invalidElem.addClass("elrejt");
            } catch {
                this.validElem.addClass("elrejt");
                this.invalidElem.removeClass("elrejt");
            }
        });
    }

    #sor() {
        let txt = '<div class="mb-3">';
        for (let key in this.#leiro) {
            switch (this.#leiro[key].tipus) {
                case "date":
                    const today = new Date();
                    const year = today.getFullYear() + 18;
                    const oldyear = today.getFullYear() - 18;
                    const month = String(today.getMonth() + 1).padStart(2, '0');
                    const day = String(today.getDate()).padStart(2, '0');
                    const maxDatum = year + '-' + month + '-' + day;
                    const minDatum = oldyear + '-' + month + '-' + day;
                    this.#urlapElemLista.push(new DateInput(key, this.#leiro[key], this.#szuloElem, maxDatum, minDatum));
                    break;
                default:
                case "textarea":
                    this.#urlapElemLista.push(
                        new TextArea(key, this.#leiro[key], this.#szuloElem, ""));
                    break;
            }
        }
        txt += "</div>"
        txt += "<button class='btn btn-success' id='ment' type='button'>Mentés</button>"
        this.#szuloElem.append(txt);
        this.#mentesGomb = this.#szuloElem.children("#ment");
    }

    #kattintas() {
        this.#mentesGomb.on("click", () => {
            try {
                let ertekek = $("#keszlet option:selected").data("values").split(",");
                this.#oltas_id = ertekek[0];
                this.#beszerzes_id = ertekek[1];
                event.preventDefault();
                this.#osszesElemValidE = true;
                this.#urlapElemLista.forEach(elem => {
                    this.#osszesElemValidE = this.#osszesElemValidE && elem.valid;
                })
                if (this.#osszesElemValidE) {
                    this.#urlapElemLista.forEach((elem) => {
                        this.#beadas_adat[elem.key] = elem.value;
                    })
                    this.#esemenyTrigger("ujBeadas")
                } else {
                    console.log("Nem valid az űrlap");
                }
            } catch {
                this.invalidElem.removeClass("elrejt");
            }
        });
    }

    #esemenyTrigger(esemenyNev) {
        const e = new CustomEvent(esemenyNev, { detail: [this.#oltas_id, this.#beadando_id, this.#beadas_adat, this.#beszerzes_id] });
        window.dispatchEvent(e);
    }

}
export default UjBeadott;
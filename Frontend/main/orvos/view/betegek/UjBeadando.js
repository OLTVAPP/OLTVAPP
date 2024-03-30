import NumberInput from "../input/Number.js"

class UjBeadando {
    #szuloElem
    #list
    #leiro
    #gyerek_taj
    #tipus_id
    #beadando_adat = {}

    #urlapElemLista = [];
    #osszesElemValidE = true;

    constructor(szuloElem, list, leiro, gyerek_taj) {
        this.#szuloElem = szuloElem;
        this.#leiro = leiro;
        this.#list = list;
        this.#gyerek_taj = gyerek_taj;
        this.#select();
        this.#sor();
        this.#kattintas();
    }

    #select() {
        let txt = "<label for='oltas_tipus'>Válassz oltóanyagot: </label>"
        txt += '<select name="oltas" id="oltas">'
        txt += `<option value=0>--- oltóanyag neve ---</option>`
        for (let key in this.#list) {
            txt += `<option value=${this.#list[key].tipus_id}>${this.#list[key].tipus_elnev}</option>`
        }
        txt += "</select>"
        txt += '<div class="valid elrejt">OK</div>'
        txt += '<div class="invalid elrejt">Nincs megadva adat</div>'
        txt += "<br><br>"

        this.#szuloElem.append(txt);

        this.invalidElem = this.#szuloElem.children(".invalid");
        this.validElem = this.#szuloElem.children(".valid");
        $("#oltas").on("change", () => {
            const oltas_id = $("#oltas option:selected").val()
            if (oltas_id != 0) {
                this.validElem.removeClass("elrejt");
                this.invalidElem.addClass("elrejt");
            } else {
                this.validElem.addClass("elrejt");
                this.invalidElem.removeClass("elrejt");
            }
        });
    }

    #sor() {
        let txt = '<div class="mb-3">';
        for (let key in this.#leiro) {
            this.#urlapElemLista.push(
                new NumberInput(key, this.#leiro[key], this.#szuloElem, "")
            );
        }
        txt += "</div>"
        txt += "<button class='btn btn-success' id='ment' type='button'>Mentés</button>"
        this.#szuloElem.append(txt);
    }

    #kattintas() {
        const mentesGomb = this.#szuloElem.children("#ment");
        mentesGomb.on("click", (event) => {
            this.#tipus_id = $("#oltas option:selected").val()
            if (this.#tipus_id == 0) {
                this.invalidElem.removeClass("elrejt");
            } else {
                event.preventDefault();
                this.#osszesElemValidE = true;
                this.#urlapElemLista.forEach(elem => {
                    this.#osszesElemValidE = this.#osszesElemValidE && elem.valid;
                })
                if (this.#osszesElemValidE) {
                    this.#urlapElemLista.forEach((elem) => {
                        this.#beadando_adat[elem.key] = elem.value;
                    })
                    this.#esemenyTrigger("ujBeadando")
                } else {
                    console.log("Nem valid az űrlap");
                }
            }
        });
    }


    #esemenyTrigger(esemenyNev) {
        const e = new CustomEvent(esemenyNev, { detail: [this.#beadando_adat, this.#gyerek_taj, this.#tipus_id] });
        window.dispatchEvent(e);
    }
}
export default UjBeadando;
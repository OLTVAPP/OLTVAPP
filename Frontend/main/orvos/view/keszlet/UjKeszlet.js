import NumberInput from "../input/Number.js";
import DateInput from "../input/Date.js";

class UjKeszlet {
    #szuloElem
    #leiro
    #mentesGomb
    #vakcinaAdat
    #oltas_id
    #keszlet_adat = {};
    #lejarati_datuma;

    #urlapElemLista = [];
    #osszesElemValidE = true;
    constructor(szuloElem, leiro, vakcinaAdat) {
        this.#szuloElem = szuloElem;
        this.#leiro = leiro;
        this.#vakcinaAdat = vakcinaAdat;
        this.#select();
        this.#sor();
        this.#kattintas();
    }

    #select() {
        let txt = "<label for='oltas'>Válassz oltást: </label>"
        txt += '<select name="oltas" id="oltas">'
        txt += `<option value=0>-- oltasok --</option>`
        for (let key in this.#vakcinaAdat) {
            txt += `<option value=${this.#vakcinaAdat[key].oltas_id}>${this.#vakcinaAdat[key].oltoanyag_neve}</option>`
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
            if(oltas_id != 0){
                this.validElem.removeClass("elrejt");
                this.invalidElem.addClass("elrejt");
            }else{
                this.validElem.addClass("elrejt");
                this.invalidElem.removeClass("elrejt");
            }
        });
    }

    #sor() {
        let txt = '<div class="mb-3">';
        for (let key in this.#leiro) {
            switch (this.#leiro[key].tipus) {
                case "number":
                    this.#urlapElemLista.push(
                        new NumberInput(key, this.#leiro[key], this.#szuloElem, "")
                    );
                    break;
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
            }
        }
        txt += "</div>"
        txt += "<button class='btn btn-success' id='ment' type='button'>Mentés</button>"
        this.#szuloElem.append(txt);
        this.#mentesGomb = this.#szuloElem.children("#ment");
    }

    #kattintas() {
        this.#mentesGomb.on("click", (event) => {
            this.#oltas_id = $("#oltas option:selected").val()
            if (this.#oltas_id == 0) {
                this.invalidElem.removeClass("elrejt");
            } else {
                event.preventDefault();
                this.#osszesElemValidE = true;
                this.#urlapElemLista.forEach(elem => {
                    this.#osszesElemValidE = this.#osszesElemValidE && elem.valid;
                })
                if (this.#osszesElemValidE) {
                    this.#urlapElemLista.forEach((elem) => {
                        this.#keszlet_adat[elem.key] = elem.value;
                    })
                    if (this.#keszlet_adat.beszerzes_datuma >= this.#keszlet_adat.lejarati_datuma) {
                        alert("Lejárati dátum nem lehet kisebb a beszerzés dátumnál!")
                    } else {
                        this.#esemenyTrigger("ujKeszlet")
                    }
                } else {
                    console.log("Nem valid az űrlap");
                }
            }
        });
    }

    #esemenyTrigger(esemenyNev) {
        const E = new CustomEvent(esemenyNev, { detail: [this.#keszlet_adat, this.#oltas_id] });
        window.dispatchEvent(E);
    }
}

export default UjKeszlet;
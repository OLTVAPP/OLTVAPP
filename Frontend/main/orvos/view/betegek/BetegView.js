import BetegViewSor from "./BetegViewSor.js";
import Modosit from "./Modosit.js";
class BetegView {

    #szuloElem;
    #list = [];
    #tablaElem = [];
    #leiro = [];
    #index = 0;
    #cim = [];
    #szulo_email;

    constructor(szuloElem, list, leiro) {
        this.#leiro = leiro;
        this.#list = list;
        this.#cim = ["Részletes adatok", "Szülő adatok", "Vakcina adatok"]

        this.#szuloElem = szuloElem;
        for (let i = 0; i < this.#list.length; i++) {
            this.#szuloElem.append(`<h3>${this.#cim[i]}</h3>`);
            this.#szuloElem.append(`<table class="table table-hover" id=table${i}>`);
            this.#tablaElem.push(szuloElem.children(`#table${i}`));
        }

        const adat = this.#list[0];
        const szulo = this.#list[1];
        const vakcina = this.#list[2];
        this.#szulo_email = szulo[0].felhasznalo_email

        this.#sor(this.#leiro.adatok);
        this.#tablazatbaIr(adat);
        this.#sor(this.#leiro.szulo_adatok);
        this.#tablazatbaIr(szulo);
        this.#sor(this.#leiro.vakcina_adatok);
        this.#tablazatbaIr(vakcina);
        this.#szuloElem.append("<button class='btn btn-primary' id='vissza' type='button'>Vissza</button>")
        const gombElem = this.#szuloElem.children("#vissza");
        gombElem.on("click", () => {
            this.#esemenyTrigger("vissza")
        });
    }

    #sor(leiro) {
        let txt = "<thead>";

        txt += "<tr>";
        for (const key in leiro) {
            txt += `<th>${leiro[key].megjelenes}</th>`;
        }
        if (this.#index === 0) {
            txt += `<th>Módosít</th>`;
        }
        txt += "</tr>";
        txt += "</thead>";
        this.#tablaElem[this.#index].append(txt);
    }

    #tablazatbaIr(adat) {
        
        for (const key in adat) {
            console.log(this.#szulo_email)
            new BetegViewSor(adat[key], this.#tablaElem[this.#index], this.#index, this.#szuloElem, this.#leiro.adatok, this.#szulo_email);
        }
        this.#index++;
    }

    #esemenyTrigger(esemenyNev) {
        const e = new CustomEvent(esemenyNev);
        window.dispatchEvent(e);
    }
}

export default BetegView;
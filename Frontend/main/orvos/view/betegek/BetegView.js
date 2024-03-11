import BetegViewSor from "./BetegViewSor.js";

class BetegView {

    #szuloElem;
    #list = [];
    #tablaElem = [];
    #leiro = [];

    #index = 0;
    #cim = [];

    constructor(szuloElem, list, leiro) {
        this.#leiro = leiro;
        this.#list = list;
        this.#cim = ["Részletes adatok", "Szülő adatok", "Vakcina adatok"]

        this.#szuloElem = szuloElem;
        for (let i = 0; i < this.#list.length; i++) {
            this.#szuloElem.append(`<h2>${this.#cim[i]}</h2>`);
            this.#szuloElem.append(`<table class=table${i}>`);
            this.#tablaElem.push(szuloElem.children(`.table${i}`));
        }

        const adat = this.#list[0];
        const szulo = this.#list[1];
        const vakcina = this.#list[2];

 
        this.#sor(this.#leiro.adatok);
        this.#tablazatbaIr(adat);
        this.#sor(this.#leiro.szulo_adatok);
        this.#tablazatbaIr(szulo);
        this.#sor(this.#leiro.vakcina_adatok);
        this.#tablazatbaIr(vakcina);
        this.#szuloElem.append("<button class='vissza' type='button'>Vissza</button>")
        const gombElem = this.#szuloElem.children(".vissza");
        gombElem.on("click", () => {
            this.#esemenyTrigger("vissza")
          });
    }

    #sor(leiro) {
        let txt = "";

        txt += "<tr>";
        for (const key in leiro) {
            txt += `<th>${leiro[key].megjelenes}</th>`;
        }
        txt += "</tr>";
        this.#tablaElem[this.#index].append(txt);
    }

    #tablazatbaIr(adat) {
        let i = 0;
        for (const key in adat) {
            new BetegViewSor(adat[key], this.#tablaElem[this.#index], i);
            i++;
        }
        this.#index++;
    }

    #esemenyTrigger(esemenyNev){
        const e = new CustomEvent(esemenyNev);
        window.dispatchEvent(e);
    }
}

export default BetegView;
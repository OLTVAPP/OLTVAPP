import BetegekViewSor from "./BetegekViewSor.js";

class BetegekView {
  #szuloElem;
  #list = [];
  #tablaElem;
  #leiro = [];

  constructor(szuloElem, list, leiro) {
    this.#leiro = leiro;
    this.#list = list;
    this.#szuloElem = szuloElem;
    this.#szuloElem.append("<table>");
    this.#tablaElem = szuloElem.children("table");
    this.#sor();
    this.#tablazatbaIr();
  }

  #sor() {
    let txt = "";

    txt += "<tr>";
    for (const key in this.#leiro) {
      txt += `<th>${this.#leiro[key].megjelenes}</th>`;
    }
    txt += `<th>Részletek</th>`;
    txt += `<th>Módosít</th>`;
    txt += "</tr>";

    this.#tablaElem.append(txt);
  }

  #tablazatbaIr() {
    let i = 0;
    for (const key in this.#list) {
      new BetegekViewSor(this.#list[key], this.#tablaElem, i);
      i++;
    }
  }
}

export default BetegekView;

import BetegViewSor from "./BetegekViewSor.js";

class BetegView {
  #szuloElem;
  #list = [];
  #tablaElem;
  #leiro = [];

  constructor(list, szuloElem, leiro) {
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
    for (const key in this.#list.gyerekek.gyerek1) {
      txt += `<th>${key}</th>`;
    }
    txt += `<th>Részletek</th>`;
    txt += `<th>Módosít</th>`;
    txt += "</tr>";
    this.#tablaElem.append(txt);
  }

  #tablazatbaIr() {
    let i = 0;
    for (const key in this.#list.gyerekek) {
      new BetegViewSor(this.#list.gyerekek[key], this.#tablaElem, i, this.#leiro);
      i++;
    }
  }
}

export default BetegView;

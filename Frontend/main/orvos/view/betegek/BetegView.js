import BetegViewSor from "./BetegViewSor.js";

class BetegView {
  #szuloElem;
  #tablaElem;
  #leiro = [];
  #list = [];

  constructor(list, szuloElem, leiro) {
    this.#list = list;
    this.#leiro = leiro;
    this.#szuloElem = szuloElem;
    this.#szuloElem.append("<table>");
    this.#tablaElem = this.#szuloElem.children("table");
    this.#sor();
    this.#tablazatbaIr();
  }
  #sor() {
    let txt = "";
    txt += "<tr>";
    for (let key in this.#list.gyerekek.gyerek1) {
      txt += `<th>${key}</th>`;
    }
    txt += "</tr>";
    this.#tablaElem.append(txt);
  }
  #tablazatbaIr() {
    let index = 0;
    for (let key in this.#list.gyerekek) {
      new BetegViewSor(this.#list.gyerekek[key], this.#tablaElem, index);
      index++;
    }
  }
}

export default BetegView;

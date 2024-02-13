import GyerekView from "./GyerekView.js";
import OltasView from "./OltasView.js";
import OrvosView from "./OrvosView.js";

class Kozpont {

  #adatok;
  #divElem;
  #tablak = [];
  #gombok;

  constructor(adatok, gombok, szuloElem, osztaly) {
    this.#adatok = adatok;
    this.#gombok = gombok;
    szuloElem.append("<div>");
    this.#divElem = szuloElem.children("div:last");
    this.#divElem.addClass(osztaly);

  }

  megjelenitGyerek() {
    for (const key in this.#adatok) {
      this.#tablak.push(new GyerekView(key, this.#adatok[key], this.#divElem));
    }
  }

  megjelenitOrvos() {
    for (const key in this.#adatok) {
      this.#tablak.push(new OrvosView(key, this.#adatok[key], this.#divElem));
    }
  }

  megjelenitOltas() {
    for (const key in this.#adatok) {
      this.#tablak.push(new OltasView(key, this.#adatok[key], this.#divElem));
    }
  }
}
export default Kozpont;

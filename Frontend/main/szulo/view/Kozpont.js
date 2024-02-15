import GyerekView from "./adatbazisView/GyerekView.js";
import OltasView from "./adatbazisView/OltasView.js";
import OrvosView from "./adatbazisView/OrvosView.js";

class Kozpont {

  #adatok;
  #divElem;
  #tablak = [];

  constructor(adatok, szuloElem, osztaly) {
    this.#adatok = adatok;
    szuloElem.append("<div>");
    this.#divElem = szuloElem.children("div:last-child");
    this.#divElem.addClass(osztaly);

  }

  megjelenitGyerek() {
    for (const key in this.#adatok.gyerek ) {
      this.#tablak.push(new GyerekView(key, this.#adatok.gyerek[key], this.#divElem));
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

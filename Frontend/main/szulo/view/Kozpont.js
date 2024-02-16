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
    this.#divElem.empty();
    for (const key in this.#adatok) {
      if (key === 'gyerekek') {
        for (const gyerekKey in this.#adatok[key]) {
          this.#tablak.push(new GyerekView(gyerekKey, this.#adatok[key][gyerekKey], this.#divElem));
        }
      }
    }
  }

  megjelenitOrvos() {
    this.#divElem.empty();
    for (const key in this.#adatok) {
      if (key === 'orvosok') {
        for (const orvosKey in this.#adatok[key]) {
          this.#tablak.push(new OrvosView(orvosKey, this.#adatok[key][orvosKey], this.#divElem));
        }
      }
    }
  }

  megjelenitOltas() {
    this.#divElem.empty();
    for (const key in this.#adatok) {
      if (key === 'oltasok') {
        for (const oltasKey in this.#adatok[key]) {
          this.#tablak.push(new OltasView(oltasKey, this.#adatok[key][oltasKey], this.#divElem));
        }
      }
    }
  }
}
export default Kozpont;

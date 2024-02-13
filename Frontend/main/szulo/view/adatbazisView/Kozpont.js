import GyerekView from "./GyerekView.js";
import OltasView from "./OltasView.js";
import OrvosView from "./OrvosView.js";

class Kozpont {

  #adatok;
  #divElem;
  #tablak = [];
  #gombok = [];

  constructor(adatok, gombok, szuloElem, osztaly) {
    this.#adatok = adatok;
    this.#gombok = gombok;
    szuloElem.append("<div>");
    this.#divElem = szuloElem.children("div:last");
    this.#divElem.addClass(osztaly);

    this.#osszTabla();
  }

  #osszTabla() {
    for (const key in this.#adatok) {
      switch (this.#gombok[key]) {
        case "Gyerek":
          this.#tablak.push(
            new GyerekView(key, this.#adatok[key], this.#divElem)
          );
          break;

        case "Oltás":
          this.#tablak.push(
            new OltasView(key, this.#adatok[key], this.#divElem)
          );
          break;
        case "Orvos":
          this.#tablak.push(
            new OrvosView(key, this.#adatok[key], this.#divElem)
          );
          break;
      }
    }
  }

}
export default Kozpont;

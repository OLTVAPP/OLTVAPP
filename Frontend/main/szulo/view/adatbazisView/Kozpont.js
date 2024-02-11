import GyerekView from "./GyerekView.js";
import OltasView from "./OltasView.js";
import OrvosView from "./OrvosView.js";

class Kozpont {

    #adatok;
    #divElem
    #tablak = [];

    constructor(adatok, szuloElem, osztaly) {
        this.#adatok = adatok;
        szuloElem.append("<div>");
        this.#divElem = szuloElem.children("div:last");
        this.#divElem.addClass(osztaly);
    
        this.#osszTabla();
    }

    #osszTabla() {
        for (const key in this.#adatok) {
          switch (this.#adatok[key].tipus) {
            case "gyerek":
              this.#tablak.push(
                new GyerekView(key, this.#adatok[key], this.#divElem)
              );
              break;
    
            case "oltas":
              this.#tablak.push(
                new OltasView(key, this.#adatok[key], this.#divElem)
              );
              break;
            case "orvos":
              this.#tablak.push(
                new OrvosView(key, this.#adatok[key], this.#divElem)
              );
              break;
          }
        }
      }

}
export default Kozpont;
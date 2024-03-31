import Tabla_main from "../tabla_main.js";
import Szurok from "../view/szuro/szurok.js";

class Szuro_controller {
  #szurok;
  #divElem;

  constructor(adatok, divElem) {
    this.#divElem = divElem;
    this.#szurok = new Szurok(adatok, this.#divElem);
    this.#keresoEsemeny();
  }

  #keresoEsemeny() {
    $(window).on("kereses", (event) => {
      const obj = this.#szurok.getObjektumok();
      const keresettErtekek = [];
      let ures = 0;
      for (let index = 0; index < obj.length; index++) {
        keresettErtekek.push(obj[index].getValue());
        if (keresettErtekek[index] == "") {
          keresettErtekek[index] = "";
          ures = ures + 1;
        }
      }
      const tablaElem = $("table");
      tablaElem.empty();
      console.log(keresettErtekek);
      tabla.keresoTabla(keresettErtekek);
     
    });
  }
}

export default Szuro_controller;

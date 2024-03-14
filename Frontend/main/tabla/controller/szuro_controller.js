import Szurok from "../view/szuro/szurok.js";

class Szuro_controller {
  #szurok;

  constructor(szurok, divElem) {
    this.#szurok = new Szurok(szurok, divElem);
    this.#keresoEsemeny();
  }

  #keresoEsemeny() {
    $(window).on("kereses", (event) => {
       const obj =  this.#szurok.getObjektumok();
       const keresettErtekek = [];
       for (let index = 0; index < obj.length; index++) {
            keresettErtekek.push(obj[index].getValue());  
            console.log(obj[index].getValue())
       }

      


    });
  }
}

export default Szuro_controller;

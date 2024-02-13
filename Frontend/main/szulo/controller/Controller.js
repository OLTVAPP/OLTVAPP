import Kozpont from "../view/adatbazisView/Kozpont.js";
import adatbazisModell from "../modell/adatbazisModell.js";
import Gombok from "../view/adatbazisView/Gombok.js";

class Controller {
    #adatbazisModell;

    constructor() {
        this.#adatbazisModell = new adatbazisModell();
        this.megjelenit();
    }

    megjelenit() {
        const gombok = new Gombok(this.#adatbazisModell.getGleiro(), $(".tablaNevek")); 
        const kozpont = new Kozpont(this.#adatbazisModell.getLeiro(), this.#adatbazisModell.getGleiro(), $("article"), $(".tablak") );


        gombok.gombokKezelese(function(index) {
            switch(index) {
                case 0:
                    kozpont.megjelenitGyerek();
                    break;
                case 1:
                    kozpont.megjelenitOrvos();
                    break;
                case 2:
                    kozpont.megjelenitOltas();
                    break;
                default:
                    console.log("Ismeretlen gomb");
            }
        });
    }
}

export default Controller;

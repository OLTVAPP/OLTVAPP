import Kozpont from "../view/Kozpont.js";
import adatbazisModell from "../modell/adatbazisModell.js";
import Gombok from "../view/Gombok.js";

class Controller {
    #adatbazisModell;

    constructor() {
        this.#adatbazisModell = new adatbazisModell();
        this.megjelenit();
    }

    megjelenit() {
        const gombok = new Gombok(this.#adatbazisModell.getGleiro(), $(".tablaNevek"));
        const kozpont = new Kozpont(this.#adatbazisModell.getLeiro(), $("article"), $(".tablak"));

        gombok.gombokKezelese(function (index) {
            if (index === 0) {
                kozpont.megjelenitGyerek();
            } else if (index === 1) {
                kozpont.megjelenitOrvos();
            } else if (index === 2) {
                kozpont.megjelenitOltas();
            } else {
                console.log("Ismeretlen gomb");
            }
        });
    }

}

export default Controller;

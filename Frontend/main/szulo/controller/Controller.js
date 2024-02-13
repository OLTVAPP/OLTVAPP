import Kozpont from "../view/adatbazisView/Kozpont.js";
import adatbazisModell from "../modell/adatbazisModell.js";
import Gombok from "../view/adatbazisView/Gombok.js";

class Controller {

    #adatbazisModell

    constructor() {
        this.#adatbazisModell = new adatbazisModell();
        this.megjelenit();
    }

    megjelenit() {
        new Gombok(this.#adatbazisModell.getGleiro(), $(".tablaNevek"));
        new Kozpont(this.#adatbazisModell.getLeiro(), this.#adatbazisModell.getGleiro(), $("article"), $("tablak") );
        
    }
}

export default Controller;
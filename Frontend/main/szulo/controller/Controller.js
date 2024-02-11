import Kozpont from "../view/adatbazisView/Kozpont.js";
import adatbazisModell from "../modell/adatbazisModell.js";

class Controller {

    #adatbazisModell

    constructor() {
        this.#adatbazisModell = new adatbazisModell();
        this.megjelenit();
    }

    megjelenit() {
        new Kozpont(this.#adatbazisModell.getLeiro(), $("article"), $("tablak") );
    }
}

export default Controller;
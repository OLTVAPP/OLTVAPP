
import ProfilModell from "../modell/ProfilModell.js";
import Gombok from "../view/Gombok.js";
import TombInput from "../view/tombInput.js";



class Controller {

    #profilModell

    constructor() {
        this.#profilModell = new ProfilModell();
        this.megjelenit();

    }

    megjelenit() {
        new TombInput(this.#profilModell.getInputok(),$("article"), $("profilElemek"));
        new Gombok(this.#profilModell.getGombok(),$("profilGombok"));
    }
}

export default Controller;
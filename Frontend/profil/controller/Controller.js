import UrlapView from "../view/UrlapView.js";
import ProfilModell from "../modell/ProfilModell.js";

class Controller {

    #profilModell

    constructor() {
        this.#profilModell = new ProfilModell();
        this.megjelenit();

        $(window).on("feltolt", (event) => {
            console.log(event.detail);
          });
    }

    megjelenit() {
        new UrlapView($("article"), this.#profilModell.getInputok());
    }
}

export default Controller;
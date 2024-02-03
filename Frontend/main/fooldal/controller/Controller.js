import UrlapView from "../view/UrlapView.js";
import UrlapModell from "../modell/UrlapModell.js";

class Controller {

    #urlapModell

    constructor() {
        this.#urlapModell = new UrlapModell();
        this.megjelenit();

        $(window).on("feltolt", (event) => {
            console.log(event.detail);
          });
    }

    megjelenit() {
        new UrlapView($("article"), this.#urlapModell.getLeiro());
    }
}

export default Controller;
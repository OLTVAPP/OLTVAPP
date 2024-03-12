import UrlapView from "../view/osszekottetes/HozzaadUrlapView.js";
import UrlapModell from "../modell/UrlapModell.js";

class Hozzaad {

    #urlapModell;
    constructor() {
        this.#urlapModell = new UrlapModell();
        this.#megjelenit();

    }

    #megjelenit(){
        new UrlapView($("article"), this.#urlapModell.getLeiro());
    }
}

export default Hozzaad;
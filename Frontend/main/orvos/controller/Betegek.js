import UrlapModell from "../modell/UrlapModell.js";
import BetegView from "../view/betegek/BetegView.js";

class Betegek {
  #urlapModell;
  constructor() {
    this.#urlapModell = new UrlapModell();
    this.#megjelenit();
  }

  #megjelenit() {
    new BetegView(this.#urlapModell.getTesztAdatok(), $("article"), this.#urlapModell.getLeiro());
  }
}
export default Betegek;

import UrlapModell from "../modell/UrlapModell.js";
import BetegView from "../view/betegek/BetegekView.js";

class Betegek {
  #urlapModell;
  constructor() {
    this.#urlapModell = new UrlapModell();
    this.#megjelenit();
  }

  #megjelenit() {
    new BetegView(this.#urlapModell.getTesztAdatok(), $(".betegekLista"), this.#urlapModell.getLeiro());
  }

  egyBetegMegjelenit(){
    
  }
}
export default Betegek;

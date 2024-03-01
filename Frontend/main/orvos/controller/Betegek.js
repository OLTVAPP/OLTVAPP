import UrlapModell from "../modell/UrlapModell.js";
import BetegView from "../view/betegek/BetegekView.js";
import DataService from "../modell/data.js";

class Betegek {
  #urlapModell;
  #dataService;
  constructor() {
    this.#urlapModell = new UrlapModell();
    this.#dataService = new DataService();
    this.#get();
  }

  megjelenit(list, leiro) {
    new BetegView($(".betegekLista"), list, leiro);
  }

  #get(){
    this.#dataService.getAxiosData("http://localhost:8000/api/betegek/1", this.megjelenit, this.#urlapModell.getLeiro()
    );
  }

}
export default Betegek;

import UrlapModell from "../modell/Modell.js";
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
    let id = localStorage.getItem("felhasznalo_id");
    console.log(id)
    this.#dataService.getAxiosData(`http://localhost:8000/api/betegek/${id}`, this.megjelenit, this.#urlapModell.getLeiro()
    );
  }

}
export default Betegek;

import UrlapModell from "../modell/Modell.js";
import BetegekView from "../view/betegek/BetegekView.js";
import DataService from "../modell/data.js";
import BetegView from "../view/betegek/BetegView.js";
class Betegek {
  #urlapModell;
  #dataService;
  constructor() {
    this.#urlapModell = new UrlapModell();
    this.#dataService = new DataService();
    this.#get();
    this.#gyerekAdat()
    this.#vissza()
  }

  megjelenitBetegek(list, leiro) {
    new BetegekView($(".betegekLista"), list, leiro);
  }

  megjelenitBeteg(list, leiro) {
    console.log(leiro)
    new BetegView($(".betegekLista"), list, leiro)
  }


  #get() {
    let id = localStorage.getItem("felhasznalo_id");
    console.log(id)
    this.#dataService.getAxiosData(`http://localhost:8000/api/betegek/${id}`, this.megjelenitBetegek, this.#urlapModell.getLeiro()
    );
  }

  #gyerekAdat() {
    $(window).on("gyerek_taj", (event) => {
      this.#dataService.getAxiosData(`http://localhost:8000/api/beteg/${event.detail}`, this.megjelenitBeteg, this.#urlapModell.getReszletesAdatok())
      $(".betegekLista").empty()
    });
  }

  #vissza(){
    $(window).on("vissza", (event) => {
      $(".betegekLista").empty()
      this.#get();
    });
  }

}
export default Betegek;

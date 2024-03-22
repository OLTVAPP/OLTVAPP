import UrlapModell from "../modell/Modell.js";
import BetegekView from "../view/betegek/BetegekView.js";
import DataService from "../modell/data.js";
import BetegView from "../view/betegek/BetegView.js";
class Betegek {
  #urlapModell;
  #dataService;
  #id
  constructor() {
    this.#urlapModell = new UrlapModell();
    this.#dataService = new DataService();

    this.#get();
    this.#gyerekAdat()
    this.#vissza()
    this.#modositBeteg()

  }

  megjelenitBetegek(list, leiro) {
    console.log(list, leiro)
    new BetegekView($("article"), list, leiro);
  }

  megjelenitBeteg(list, leiro) {
    new BetegView($("article"), list, leiro)
  }


  #get() {
    this.#id = localStorage.getItem("felhasznalo");
    console.log(this.#id)
    this.#dataService.getAxiosData(`http://localhost:8000/api/betegek/${this.#id}`, this.megjelenitBetegek, this.#urlapModell.getLeiro()
    );
  }

  #gyerekAdat() {
    $(window).on("gyerek_taj", (event) => {
      this.#dataService.getAxiosData(`http://localhost:8000/api/beteg/${event.detail}`, this.megjelenitBeteg, this.#urlapModell.getReszletesAdatok())
      $("article").empty()
    });
  }

  #vissza(){
    $(window).on("vissza", (event) => {
      $("article").empty()
      this.#get();
    });
  }

  #modositBeteg(){
    $(window).on("modositBeteg", (event) => {
      this.#dataService.putData(`http://localhost:8000/api/beteg_modosit/${event.detail[2]}/${this.#id}/${event.detail[1]}`, event.detail[0])
    });
  }

}
export default Betegek;

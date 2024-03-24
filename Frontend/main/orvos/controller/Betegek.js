import UrlapModell from "../modell/Modell.js";
import BetegekView from "../view/betegek/BetegekView.js";
import DataService from "../modell/data.js";
import BetegView from "../view/betegek/BetegView.js";
import UjBeadott from "../view/betegek/UjBeadott.js";
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
    this.#ujBeadott();
    this.#ujBeadas();

  }

  megjelenitBetegek(list, leiro) {
    console.log(list, leiro)
    new BetegekView($("article"), list, leiro);
  }

  megjelenitBeteg(list, leiro) {
    console.log(list)
    new BetegView($("article"), list, leiro)
  }

  megjelenitUjBeteg(list, leiro, beadando_id){
    new UjBeadott($(".modal-content4"), list, leiro, beadando_id)
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

  #ujBeadott(){
    $(window).on("UjBeadott", (event) => {
      this.#dataService.getAxiosData2(`http://localhost:8000/api/keszlet_oltas_id/${this.#id}/${event.detail[1]}`, this.megjelenitUjBeteg, this.#urlapModell.getUjBeadott(), event.detail[0])
    });
  }


  #ujBeadas(){
    $(window).on("ujBeadas", (event) => {
      this.#dataService.patchData(`http://localhost:8000/api/keszlet_levon/${event.detail[3]}/${this.#id}`)
      this.#dataService.postData(`http://localhost:8000/api/uj_beadas/${this.#id}/${event.detail[0]}/${event.detail[1]}`, event.detail[2])
  });
  }
}
export default Betegek;

import UrlapModell from "../modell/Modell.js";
import BetegekView from "../view/betegek/BetegekView.js";
import DataService from "../modell/data.js";
import BetegView from "../view/betegek/BetegView.js";
import UjBeadott from "../view/betegek/UjBeadott.js";
import UjBeadando from "../view/betegek/UjBeadando.js";

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
    this.#oltasTipusNev();
    this.#ujBeadando();

  }

  megjelenitBetegek(list, leiro) {
    console.log(list, leiro)
    new BetegekView($("article"), list, leiro);
  }

  megjelenitBeteg(list, leiro) {
    console.log(list)
    new BetegView($("article"), list, leiro)
  }

  megjelenitUjBeteg(list, leiro, beadando_id) {
    new UjBeadott($(".modal-content4"), list, leiro, beadando_id)
  }

  megjelenitUjBeadando(list, leiro, gyerek_taj) {

    new UjBeadando($(".modal-content5"), list, leiro, gyerek_taj)
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

  #vissza() {
    $(window).on("vissza", (event) => {
      $("article").empty()
      this.#get();
    });
  }

  #modositBeteg() {
    $(window).on("modositBeteg", (event) => {
      this.#dataService.putData(`http://localhost:8000/api/beteg_modosit/${event.detail[2]}/${this.#id}/${event.detail[1]}`, event.detail[0])
    });
  }

  #ujBeadott() {
    $(window).on("UjBeadott", (event) => {
      this.#dataService.getAxiosData2(`http://localhost:8000/api/keszlet_oltas_id/${this.#id}/${event.detail[1]}`, this.megjelenitUjBeteg, this.#urlapModell.getUjBeadott(), event.detail[0])
    });
  }


  #ujBeadas() {
    $(window).on("ujBeadas", (event) => {
      this.#dataService.postData(`http://localhost:8000/api/uj_beadas/${this.#id}/${event.detail[0]}/${event.detail[1]}/${event.detail[3]}`, event.detail[2])

    });
  }

  #oltasTipusNev() {
    $(window).on("oltasTipusNev", (event) => {

      this.#dataService.getAxiosData2(`http://localhost:8000/api/oltas_tipus_nev`, this.megjelenitUjBeadando, this.#urlapModell.getUjBeadando(), event.detail)
    })
  }

  #ujBeadando() {
    $(window).on("ujBeadando", (event) => {
      this.#dataService.postData(`http://localhost:8000/api/uj_beadando/${event.detail[1]}/${event.detail[2]}`, event.detail[0])
    })
  }
}
export default Betegek;

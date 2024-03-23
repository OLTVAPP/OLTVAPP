import { admin_hozzAd, orvos_hozzAd } from "../modell/hozzaAd_leiro.js";
import HozzaAd_view from "../view/hozzaAd/hozzaAd_view.js";

class HozzaAd_Controller {
  #divElem;
  #adatLeiro = [];
  #cimke;
  #id;
  #divId
  constructor(divId, divElem) {
    this.#divId = divId
    this.setDivId();
    this.#divElem = divElem;
    console.log(this.#adatLeiro);
    this.#divElem.append(`<button class='ujAdat'>Új felhasználó</button>`);
    const button = this.#divElem.children(".ujAdat:last-child");
    button.on("click", () => {
      this.#adatAtadas();
      let txt = "";
      txt += `<div class="modal">
            <div class="modal-content" id="${this.#id}">
            </div>
            </div>`;
      $("article").append(txt);
      $(".modal").css("display", "block");
      new HozzaAd_view($(".modal-content"), this.#adatLeiro);
    });
  }

  #adatAtadas() {
    switch (this.#divId) {
      case "admin_hozaAd":
        this.#adatLeiro = admin_hozzAd;
        this.#cimke = "Új felhasználó hozzáadása";
        this.#id = "admin_felhasznalo";
        break;
      case "orvos_hozaAd":
        this.#adatLeiro = orvos_hozzAd;
        this.#cimke = "Új felhasználó hozzáadása";
        this.#id = "orvos_felhasznalo";
        break;
      default:
        break;
    }
  }



  setDivId(){
    $(window).on("divValtas", (event) => {
        this.#divId = event.detail;


  });

}
}
export default HozzaAd_Controller;

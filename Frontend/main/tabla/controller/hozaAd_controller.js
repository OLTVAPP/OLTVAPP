import { admin_hozzAd, beadando_hozzaAd, oltas_hozzaAd, oltas_tipus_hozzaAd, orvos_hozzAd } from "../modell/hozzaAd_leiro.js";
import HozzaAd_view from "../view/hozzaAd/hozzaAd_view.js";

class HozzaAd_Controller {
  #adatLeiro = [];
  #id;
  #divId;
  constructor(divId) {
    this.#divId = divId;
    this.setDivId();
    const button = $(`#${this.#divId}`);
    console.log(button);
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
        this.#id = "admin_felhasznalo";
        break;
      case "orvos_hozaAd":
        this.#adatLeiro = orvos_hozzAd;
        this.#id = "orvos_felhasznalo";
        break;
      case "oltas_tipus_add":
        this.#adatLeiro = oltas_tipus_hozzaAd;
        this.#id = "oltas_tipus";
        break;
      case "beadando_add":
        this.#adatLeiro = beadando_hozzaAd;
        this.#id = "beadando";
        break;
        case "oltas_add":
          this.#adatLeiro = oltas_hozzaAd;
          this.#id = "oltas";
          break;
      default:
        break;
    }
  }

  setDivId() {
    $(window).on("divValtas", (event) => {
      this.#divId = event.detail;
    });
  }
}
export default HozzaAd_Controller;

import DataService from "../../modell/data.js";
import { beadando_mododsit, modosit_felhasznalo, oltas_modosit, oltas_tipus_modosit } from "../../modell/modositLeiro.js";
import Modosit_mezo from "./modosit_mezo.js";

class Modosit {
  #id;
  #tabla;
  constructor(id, tabla) {
    this.#id = id;
    this.#tabla = tabla;

    //  this.#sor();
    //  this.#kattintas();
  }

  modositMezoKiiras() {
    return `<td><span class="modosit" id="modosit_${this.#id}">📝</span></td>`;
  }

  modositasParancs() {
    $(`#modosit_${this.#id}`).on("click", () => {
        console.log(this.#id)
        $("article").append(`<div class="modal" id=""></div>`);
       const divElem = $(".modal");
       divElem.css("display", "block");
      const data = new DataService();
      let url;
      let adatHalamzok;
      let adatTipus
      switch (this.#tabla) {
        case "osszes_felhasznalo":
          url = `http://localhost:8000/api/felhasznalo_szerep/${this.#id}`;
          adatHalamzok = modosit_felhasznalo;
          break;
        case "osszes_oltas":
          url = `http://localhost:8000/api/oltas/${this.#id}`;
          adatHalamzok = oltas_modosit;
          adatTipus = "oltas"
          break;
          case "osszes_beadando":
            url = `http://localhost:8000/api/beadando/${this.#id}`;
            adatHalamzok = beadando_mododsit;
            adatTipus = "beadando"
            break;
            case "osszes_oltas_tipus":
            url = `http://localhost:8000/api/oltas_tipus/${this.#id}`;
            adatHalamzok = oltas_tipus_modosit;
            adatTipus = "oltas_tipus"
            break;
        default:
          break;
      }
      data.getDataModosit(url, this.#modositAblak, divElem, adatHalamzok, adatTipus);
    });
  }

  #modositAblak(obj, divElem, leiro, adatTipus) {
    console.log(divElem)
    console.log(obj[0].atadas)
    if(obj[0].atadas == null){
      divElem.append(
        `<div class="modal-content" id="modosit_${adatTipus}"></div>`
      );
    } else{
    divElem.append(
      `<div class="modal-content" id="felhasznalo_${obj[0].atadas}"></div>`
    );
    }
    new Modosit_mezo($(".modal-content"), obj, leiro);
  }


}

export default Modosit;

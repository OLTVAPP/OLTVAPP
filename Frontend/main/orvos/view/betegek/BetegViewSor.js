import Modosit from "./Modosit.js"
import UjBeadott from "./UjBeadott.js";

class BetegViewSor {
  #adat;
  #tablaElem
  #modositGomb;
  #beadasGomb
  #szuloElem;
  #index;
  #sorElem
  #leiro
  #szulo_email
  #i
  #beadando_id
  #tipus_id

  constructor(adat, tablaElem, index, szuloElem, leiro, szulo_email, i) {
    this.#adat = adat;
    this.#tablaElem = tablaElem;
    this.#szuloElem = szuloElem
    this.#leiro = leiro;
    this.#index = index;
    this.#i = i;
    this.#szulo_email = szulo_email;
    this.#sor();
    const tbodyElem = this.#tablaElem.children("tbody");
    this.#sorElem = tbodyElem.children("tr:last-child");
    this.#modositGomb = this.#sorElem.children("td").children("#modosit" + this.#i);
    this.#beadasGomb = this.#sorElem.children("td").children("#beadott" + this.#i);
    this.#kattintas();
  }

  #sor() {
    let txt = "<tbody>";
    txt += `<tr class=adat${this.#index}>`;
    for (let key in this.#adat) {
      if (this.#adat[key] === null) {
        txt += `<td>-</td>`;
      }
      else if (key === "tipus_id") {
        this.#tipus_id = this.#adat[key];
      }
      else if (key === "beadando_id") {
        this.#beadando_id = this.#adat[key];
      }
      else if (key === "beadva") {
        if (this.#adat[key] === 0) {
          txt += `<td><span id="beadott${this.#i}">❌</span></td>`;
        } else {
          txt += `<td><span>✔️</span></td>`;
        }
      }
      else {
        txt += `<td>${this.#adat[key]}</td>`;
      }
    }
    if (this.#index === 0) {
      txt += `<td><span id="modosit${this.#i}">📝</span></td>`;
    }

    txt += "</tr>";
    txt += "</tbody>";

    this.#tablaElem.append(txt);
  }


  #kattintas() {
    this.#modositGomb.on("click", () => {
      let txt = "";
      txt +=
        `
      <div class="modal">
      <div class="modal-content">
      </div>
      </div>
      `
      this.#szuloElem.append(txt);
      $(".modal").css("display", "block");
      new Modosit($(".modal-content"), this.#adat, this.#leiro, this.#szulo_email);
    });
    ;
    this.#beadasGomb.on("click", () => {
      let txt = "";
      txt +=
        `
      <div class="modal4">
      <div class="modal-content4">
      <span class="close">&times;</span>
      </div>
      </div>
      `
      this.#szuloElem.append(txt)
      $(".modal4").css("display", "block");
      this.#esemenyTrigger("UjBeadott")
      $(".close").on("click", () => {
        $(".modal4").css("display", "none");
        $(".modal4").empty();
      });
    });
  }

  #esemenyTrigger(esemenyNev) {
    const e = new CustomEvent(esemenyNev, { detail: [this.#beadando_id, this.#tipus_id] });
    window.dispatchEvent(e);
  }

}

export default BetegViewSor;

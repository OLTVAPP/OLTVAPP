import Modosit from "./Modosit.js"

class BetegViewSor {
  #adat;
  #tablaElem
  #modositGomb;
  #szuloElem;
  #index;
  #sorElem
  #leiro
  #szulo_email

  constructor(adat, tablaElem, index, szuloElem, leiro, szulo_email) {
    this.#adat = adat;
    this.#tablaElem = tablaElem;
    this.#szuloElem = szuloElem
    this.#leiro = leiro;
    this.#index = index;
    this.#szulo_email = szulo_email;
    this.#sor();
    const tbodyElem = this.#tablaElem.children("tbody");
    this.#sorElem = tbodyElem.children("tr:last-child");
    this.#modositGomb = this.#sorElem.children("td").children("#modosit" + this.#index);
    this.#kattintas();
  }

  #sor() {
    let txt = "<tbody>";
    txt += `<tr class=adat${this.#index}>`;
    for (let key in this.#adat) {
      txt += `<td>${this.#adat[key]}</td>`;
    }
    if (this.#index === 0) {
      txt += `<td><span id="modosit${this.#index}">📝</span></td>`;
    }

    txt += "</tr>";
    txt += "</tbody>";

    this.#tablaElem.append(txt);
  }


  #kattintas() {
    this.#modositGomb.on("click", () => {
      console.log("dsa")
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
      console.log(this.#szulo_email)
      new Modosit($(".modal-content"), this.#adat, this.#leiro, this.#szulo_email);
    });
  }

}

export default BetegViewSor;

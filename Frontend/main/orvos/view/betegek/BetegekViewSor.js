class BetegViewSor {
  #adat;
  #tablaElem;
  #reszletGomb;
  #szuloElem;
  #index;

  constructor(adat, szuloElem, index) {
    this.#adat = adat;
    this.#szuloElem = szuloElem;
    this.#index = index;
    this.#sor();
    this.#kattintas();
  }

  #sor() {
    let txt = "";
    txt += "<tr>";
    for (let key in this.#adat) {
      txt += `<td>${this.#adat[key]}</td>`;
    }
    txt += `<td><span class="reszletek${this.#index}">✔️</span></td>`;
    txt += "</tr>";

    this.#szuloElem.append(txt);
  }

  #kattintas() {
    this.sorElem = this.#szuloElem.children("tr:last-child");
    this.#reszletGomb = this.sorElem
      .children("td")
      .children(".reszletek" + this.#index);
    let txt = "";
    txt +=`<div id="myModal" class="modal"><div class="modal-content"><span class="close">&times;</span></div></div>`;
    this.#reszletGomb.on("click", () => {
      modal.style.display = "block";
    });
  }
}

export default BetegViewSor;

class BetegViewSor {
  #adat;
  #tablaElem;
  #szuloGomb;
  #szuloElem
  #index

  constructor(adat, szuloElem, index) {
    this.#adat = adat;
    this.#szuloElem = szuloElem;
    this.#index = index
    this.#sor();
    //this.#kattintas();
  }

  #sor() {
    let txt = "";
    txt += "<tr>"
    for (let key in this.#adat) {
      txt += `<td>${this.#adat[key]}</td>`;
    }
    txt += "</tr>"

    this.#szuloElem.append(txt);
  }



  //this.#szuloGomb = $(`.szulo${this.#index}`);
  #kattintas() {
    this.#szuloGomb.on("click", () => {
      let txt = "";
      txt += "<tr>";
      txt += `<td>asdasdasd</td>`;
      txt += "</tr>";
      this.#tablaElem.append(txt);
    });
  }

}




export default BetegViewSor;

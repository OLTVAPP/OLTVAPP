class BetegViewSor {
  #adat;
  #tablaElem;
  #szuloGomb;
  #index;
  constructor(adat, szuloElem, index) {
    this.#adat = adat;
    this.#tablaElem = szuloElem;
    this.#index = index;
    this.#sor();
    this.#kattintas();
  }
  #sor() {
    let txt = "";

    txt += "<tr>";
    for (const key in this.#adat) {
      if (Object.hasOwnProperty.call(this.#adat, key)) {
        const element = this.#adat[key];
        txt += `<td>${element}</td>`;
      }
    }
    txt += `<td><div class="szulo${this.#index}">szülő profil</div></td>`;
    txt += `<td><div class="oltas${this.#index}">Oltási információk</div></td>`;
    txt += `<td><div class="szerkesztes${this.#index}">Módosítás</div></td>`;
    txt += "</tr>";

    this.#tablaElem.append(txt);
    this.#szuloGomb = $(`.szulo${this.#index}`);
  }

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

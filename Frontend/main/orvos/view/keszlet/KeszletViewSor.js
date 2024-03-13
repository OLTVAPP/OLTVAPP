class KeszletViewSor {

  #adat;
  #szuloElem;
  #index;
  #logikaiErtek
  #beszerzes_id
  #megsemmisitesGomb

  constructor(adat, szuloElem, index, logikaiErtek) {
    this.#adat = adat;
    this.#logikaiErtek = logikaiErtek
    this.#szuloElem = szuloElem;
    this.#index = index;
    this.#sor();
    const sorElem = this.#szuloElem.children("tr:last-child");
    this.#megsemmisitesGomb = sorElem.children("td").children(`.megsemmisit${this.#index}`);
    this.#kattintas();
  }

  #sor() {
    let txt = "";
    txt += `<tr class=gyerek${this.#index}>`;
    for (let key in this.#adat) {
      if (key === "beszerzes_id") {
        this.#beszerzes_id = this.#adat[key]
      } else {
        txt += `<td>${this.#adat[key]}</td>`;
      }
    }
    if (this.#logikaiErtek === false) {
      txt += `<td><span class="megsemmisit${this.#index}">Megsemmisít</span></td>`;
    }
    txt += "</tr>";

    this.#szuloElem.append(txt);
  }

  #kattintas() {
    this.#megsemmisitesGomb.on("click", () => {
      this.#esemenyTrigger("ujMegsemmisites")
    });
  }

  #esemenyTrigger(esemenyNev){
    const e = new CustomEvent(esemenyNev, { detail: this.#beszerzes_id });
    window.dispatchEvent(e);
  }

}

export default KeszletViewSor;
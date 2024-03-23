
class BetegekViewSor {
  #adat;
  #reszletGomb;
  #gyerekElem;
  #szuloElem;
  #adatokElem = [];
  #index;
  #i;
  #sorElem
  #adatElem
  #gyerek_taj

  constructor(adat, szuloElem, index) {
    this.#adat = adat;
    this.#szuloElem = szuloElem;
    this.#index = index;
    this.#sor();
    this.#gyerekElem = this.#szuloElem.children(`.gyerek${this.#index}`);

    const tbodyElem = this.#szuloElem.children("tbody");
    const trElem = tbodyElem.children("tr:last-child");
    this.#reszletGomb = trElem.children("td").children("#reszletek" + this.#index);
    this.#kattintas();
  }

  #sor() {
    this.#i = 0;
    let txt = "<tbody>";
    txt += `<tr class=gyerek${this.#index}>`;
    for (let key in this.#adat) {
      if(key === "gyerek_taj"){
        this.#gyerek_taj = this.#adat[key];
      }
      txt += `<td>${this.#adat[key]}</td>`;
      this.#i++;
    }
    txt += `<td><span id="reszletek${this.#index}">▶</span></td>`;
    txt += "</tr>";
    txt += "</tbody>"

    this.#szuloElem.append(txt);
  }

  #kattintas() {
    this.#reszletGomb.on("click", () => {
      this.#esemenyTrigger("gyerek_taj")
    });
  }

  #esemenyTrigger(esemenyNev){
    const e = new CustomEvent(esemenyNev, { detail: this.#gyerek_taj });
    window.dispatchEvent(e);
  }
}

export default BetegekViewSor;

import Betegek from "../../controller/Betegek.js";
class BetegViewSor {
  #adat;
  #reszletGomb;
  #modositGomb;
  #keszGomb;
  #gyerekElem;
  #szuloElem;
  #adatokElem = [];
  #index;
  #i;
  #leiro = [];
  #sorElem
  #adatElem

  constructor(adat, szuloElem, index, leiro) {
    this.#leiro = leiro;
    this.#adat = adat;
    this.#szuloElem = szuloElem;
    this.#index = index;
    this.#sor();
    this.#gyerekElem = this.#szuloElem.children(`.gyerek${this.#index}`);


    this.#sorElem = this.#szuloElem.children("tr:last-child");
    this.#adatElem = this.#sorElem.children("td:not(:has(span))");
    this.#reszletGomb = this.#sorElem.children("td").children(".reszletek" + this.#index);
    this.#modositGomb = this.#sorElem.children("td").children(".modosit" + this.#index);
    this.#keszGomb = this.#sorElem.children("td").children(".kesz" + this.#index);
    this.#keszGomb.css("display", "none");
    this.#kattintas();
  }

  #sor() {
    this.#i = 0;
    let txt = "";
    txt += `<tr class=gyerek${this.#index}>`;
    for (let key in this.#adat) {
      txt += `<td>${this.#adat[key]}</td>`;
      this.#i++;
    }
    txt += `<td><span class="reszletek${this.#index}">Részletek</span></td>`;
    txt += `<td><span class="modosit${this.#index}">Módosítás</span><span class="kesz${this.#index}">Kész</span></td>`;
    txt += "</tr>";

    this.#szuloElem.append(txt);
  }




  #kattintas() {
    this.#reszletGomb.on("click", () => {
    });
    this.#modositGomb.on("click", () => {
      this.#keszGomb.css("display", "inline");
      this.#modositGomb.css("display", "none");
    });
    this.#keszGomb.on("click", () => {
      this.#keszGomb.css("display", "none");
      this.#modositGomb.css("display", "inline");
    });
  }
}

export default BetegViewSor;

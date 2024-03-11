
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
  
    constructor(adat, szuloElem, index) {
      this.#adat = adat;
      this.#szuloElem = szuloElem;
      this.#index = index;
      this.#sor();
      this.#gyerekElem = this.#szuloElem.children(`.adat${this.#index}`);
    }
  
    #sor() {
      this.#i = 0;
      let txt = "";
      txt += `<tr class=adat${this.#index}>`;
      for (let key in this.#adat) {
        txt += `<td>${this.#adat[key]}</td>`;
        this.#i++;
      }
      txt += "</tr>";
      
  
      this.#szuloElem.append(txt);
    }
  
  }
  
  export default BetegViewSor;
  
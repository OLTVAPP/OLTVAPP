
class BetegViewSor {
    #adat;
    #reszletGomb;
    #modositGomb;
    #keszGomb;
    #gyerekElem;
    #szuloElem;
    #adatokElem = [];
    #foindex;
    #index;
    #i;
    #sorElem
  
    constructor(adat, szuloElem, index, foindex) {
      this.#adat = adat;
      this.#szuloElem = szuloElem;
      this.#index = index;
      this.#foindex = foindex;
      this.#sor();
      this.#gyerekElem = this.#szuloElem.children(`.adat${this.#index}`);

      this.#sorElem = this.#szuloElem.children("tr:last-child");
      this.#modositGomb = this.#sorElem.children("td").children(".modosit" + this.#index);
      this.#keszGomb = this.#sorElem.children("td").children(".kesz" + this.#index);
      this.#keszGomb.css("display", "none");
      this.#kattintas();
    }
  
    #sor() {
      this.#i = 0;
      let txt = "";
      txt += `<tr class=adat${this.#index}>`;
      for (let key in this.#adat) {
        txt += `<td>${this.#adat[key]}</td>`;
        this.#i++;
      }
      if(this.#foindex === 0 || this.#foindex === 2){
        txt += `<td><span class="modosit${this.#index}">Módosítás</span></td>`;
      }

      txt += "</tr>";

  
      this.#szuloElem.append(txt);
    }


    #kattintas() {
        this.#modositGomb.on("click", () => {
          this.#esemenyTrigger("modal");
        });
        this.#keszGomb.on("click", () => {
          this.#keszGomb.css("display", "none");
          this.#modositGomb.css("display", "inline");
        });
      }
  
    #esemenyTrigger(esemenyNev){
      const e = new CustomEvent(esemenyNev, { detail: this.#adat });
      window.dispatchEvent(e);
    }
  }
  
  export default BetegViewSor;
  
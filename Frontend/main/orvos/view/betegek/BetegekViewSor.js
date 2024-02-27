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

  constructor(adat, szuloElem, index, leiro) {
    this.#leiro = leiro;
    this.#adat = adat;
    this.#szuloElem = szuloElem;
    this.#index = index;
    this.#sor();
    this.#gyerekElem = this.#szuloElem.children(`.gyerek${this.#index}`);
    this.sorElem = this.#szuloElem.children("tr:last-child");
    this.#reszletGomb = this.sorElem
      .children("td")
      .children(".reszletek" + this.#index);
    this.#modositGomb = this.sorElem
      .children("td")
      .children(".modosit" + this.#index);
    this.#modositGomb = this.sorElem
      .children("td")
      .children(".modosit" + this.#index);
    this.#keszGomb = this.sorElem
      .children("td")
      .children(".kesz" + this.#index);
    this.#keszGomb.css("display", "none");
    this.#kattintas();
  }

  #sor() {
    this.#i = 0;
    let txt = "";
    txt += `<tr class=gyerek${this.#index}>`;
    for (let key in this.#adat) {
      txt += `<td class=adat${this.#i}>${this.#adat[key]}</td>`;
      this.#i++;
    }
    txt += `<td><span class="reszletek${this.#index}">✔️</span></td>`;
    txt += `<td><span class="modosit${
      this.#index
    }">Módosítás</span><span class="kesz${this.#index}">Kész</span></td>`;
    txt += "</tr>";

    this.#szuloElem.append(txt);
  }

  #sor2() {
    for (let key in this.#adat) {
      console.log(this.#adat[key]);
      this.#adatokElem.text(this.#adat[key]);
    }
  }

  #kattintas() {
    this.#reszletGomb.on("click", () => {
      console.log("asd");
    });
    this.#modositGomb.on("click", () => {
      for (let i = 0; i < this.#adatokElem.; i++) {
        this.#adatokElem.push(this.#gyerekElem.children(`.adat${this.#i}`));
      }
      let txt = "";
      txt += '<form><input type="text" id="lname" name="lname"></form>';
      this.#keszGomb.css("display", "inline");
      this.#modositGomb.css("display", "none");
      this.#adatokElem.empty();
      this.#adatokElem.append(txt);
      /*
      for(let key in this.#leiro){
        adatok.text(new TextInput())
        console.log(this.#leiro[key])
      }
      */

      /*
      for (let i = 0; i < this.#gyerekElem; i++) {
        const element = array[i];
        
      }
      */
    });
    this.#keszGomb.on("click", () => {
      this.#keszGomb.css("display", "none");
      this.#modositGomb.css("display", "inline");
      this.#adatokElem.empty();
      this.#sor2();
    });
  }
}

export default BetegViewSor;

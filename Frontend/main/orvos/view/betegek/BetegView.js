import BetegViewSor from "./BetegViewSor.js";

class BetegView {
  #szuloElem;
  #leiro = [];
  #list = [];
  #index


  constructor(list, szuloElem, leiro, index) {
    this.#index = index;
    this.#list = list;
    this.#leiro = leiro;
    this.#szuloElem = szuloElem;
    this.#tablazatbaIr();
  }

  #tablazatbaIr() {
    let index = 1;
    for (let key in this.#list.gyerekek) {
      const gyerek = this.#list.gyerekek[`gyerek${index}`];
      const div = $(`<div id=gyerek${index} class="gyerekek">`).html(`<h2>${gyerek.vez_nev} ${gyerek.ker_nev} ${gyerek.szul_datum}</h2>`);
      const h2 = div.children("h2");
      this.#szuloElem.append(div);
      div.append("<table>")
      const table = div.children("table");
      div.append("<div class=gombok>")
      const gombok = div.children("div");

      let boolean = true;
      h2.on("click", () => {
        if (boolean) {
          let txt = "";
          txt += "<tr>";
          for (let key in gyerek)
            txt += `<th>${key}</th>`;
          txt += "</tr>";
          table.append(txt);
          new BetegViewSor(this.#list.gyerekek[key], table, index)
          txt = "";
          txt += `<button>Oltási információk</button>`;
          txt += `<button>Szülő adatai</button>`;
          txt += `<button>Adatok szerkesztése</button>`;
          txt += "</div>";
          gombok.append(txt);
          boolean = false;
        }
        else {
          table.empty();
          gombok.empty();
          boolean = true;
        }

      })

      index++
    }
  }





}

export default BetegView;

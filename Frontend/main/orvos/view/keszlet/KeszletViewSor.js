class KeszletViewSor {

  #adat;
  #szuloElem;
  #index;
  #logikaiErtek
  #beszerzes_id
  #megsemmisitesGomb
  #article

  constructor(adat, szuloElem, index, logikaiErtek, article) {
    this.#adat = adat;
    this.#logikaiErtek = logikaiErtek
    this.#szuloElem = szuloElem;
    this.#index = index;
    this.#article = article;
    this.#sor();
    const tbody = this.#szuloElem.children("tbody");
    const sorElem = tbody.children("tr:last-child");
    this.#megsemmisitesGomb = sorElem.children("td").children(`#megsemmisit${this.#index}`);
    this.#kattintas();
  }

  #sor() {
    let txt = "<tbody>";
    txt += `<tr class=gyerek${this.#index}>`;
    for (let key in this.#adat) {
      if (key === "beszerzes_id") {
        this.#beszerzes_id = this.#adat[key]
      } else {
        txt += `<td>${this.#adat[key]}</td>`;
      }
    }
    if (this.#logikaiErtek === false) {
      txt += `<td><span id="megsemmisit${this.#index}">❌</span></td>`;
    }
    txt += "</tr>";
    txt += "</tbody>"
    this.#szuloElem.append(txt);
  }

  #kattintas() {
    this.#megsemmisitesGomb.on("click", () => {
      let txt = "";
      txt +=
        `
      <div class="modal2">
      <div class="modal-content2">
      <a>Biztos megsemmisited?</a>
      <div class="gombok">
      <button class="btn btn-success" type="button" id="igen">Igen</button>
      <button class="btn btn-danger" type="button" id="nem">Nem</button>
      </div>
      </div>
      </div>
      `

      this.#article.append(txt);

      const modal2 = this.#article.children(".modal2")
      const model_contant2 = modal2.children(".modal-content2");
      const gombok = model_contant2.children(".gombok");
      const nemGomb = gombok.children("#nem")
      const igenGomb = gombok.children("#igen")
      console.log(igenGomb)
      $(".modal2").css("display", "block");
      igenGomb.on("click", () => {
        this.#esemenyTrigger("ujMegsemmisites")
      })
      nemGomb.on("click", () => {
        $(".modal2").css("display", "none");
      })
    });
  }

  #esemenyTrigger(esemenyNev) {
    const e = new CustomEvent(esemenyNev, { detail: this.#beszerzes_id });
    window.dispatchEvent(e);
  }

}

export default KeszletViewSor;
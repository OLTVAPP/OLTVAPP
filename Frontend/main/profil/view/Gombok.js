class Gombok {
  #adatok = [];
  #divElem;

  constructor(adatok, szuloElem, osztaly) {
    this.#adatok = adatok;
    szuloElem.append("<div>");
    this.#divElem = szuloElem.children("div:last-child");
    this.#divElem.addClass(osztaly);

    this.gombok();
  }

  gombok() {
    let txt = '';
    for (let index = 0; index < this.#adatok.length; index++) {
      txt += `<button class="gombCimkek"> ${this.#adatok[index]} </button>`;
    }
    this.#divElem.append(txt);
  }

  gombokKezelese(callback) {
    const adatok = this.#adatok;
    this.#divElem.on('click', 'button', function () {
      const buttonText = $(this).text().trim(); // A gomb szövege
      const index = adatok.findIndex(item => item === buttonText);
      if (index !== -1) {
        callback(index);
      } else {
        console.log("Ismeretlen gomb");
      }
    });
  }
}

export default Gombok;
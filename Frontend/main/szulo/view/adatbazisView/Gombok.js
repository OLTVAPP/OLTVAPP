class Gombok {
  #adatok = [];
  #divElem;

  constructor(adatok, szuloElem) {
    this.#adatok = adatok;
    this.#divElem = szuloElem;

    this.gombok();
  }

  gombok() {
    let txt = '';
    for (let index = 0; index < this.#adatok.length; index++) {
      txt += `<button> ${this.#adatok[index]} </button>`;
    }
    this.#divElem.append(txt);
  }

  gombokKezelese(callback) {
    this.#divElem.on('click', 'button', function () {
      const index = $(this).index(); 
      callback(index); 
    });
  }
 
}

export default Gombok;

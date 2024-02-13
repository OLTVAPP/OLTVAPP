class Gombok {
  #adatok=[];
  #divElem

  constructor(adatok, szuloElem) {
    this.#adatok = adatok;
    this.#divElem = szuloElem;
  }

  gombok() {
    let txt;
    for (let index = 0; index < this.#adatok.length; index++) {
        txt += `<button> ${this.#adatok[index]} </button>`;
        
    }
    this.#divElem.append(txt);
  }

  
}
export default Gombok;
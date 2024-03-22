class Gombok {
  #adatok = [];
  #divElem;

  constructor(adatok, szuloElem) {
    this.#adatok = adatok;
    this.#divElem = szuloElem;

    this.gombok();
    //this.gombokKezelese();
  }

  gombok() {
    let txt = '';
    for (let index = 0; index < this.#adatok.length; index++) {
        txt += `<button class="gombCimkek" data-index="${index}"> ${this.#adatok[index]} </button>`;
    }
    this.#divElem.append(txt);

    const gombok = this.#divElem.find('.gombCimkek');
    gombok.each((index, gomb) => {
        $(gomb).on('click', () => {
            // A gomb indexének lekérése a data attribútum alapján
            const gombIndex = $(gomb).data('index');
            // Emitálj egy eseményt a kiválasztott gomb indexével
            this.#esemenyTrigger('gombKattintas', gombIndex);
        });
    });
}

#esemenyTrigger(esemenyNev, adat) {
    const E = new CustomEvent(esemenyNev, { detail: adat });
    window.dispatchEvent(E);
}
}

export default Gombok;
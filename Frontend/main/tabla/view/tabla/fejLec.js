class Fejlec {
  #cimke;
  #tartalom;
  #fejlec_cim;
  #inputElem;

  constructor(feljlec_cim, cimke) {
    this.#fejlec_cim = feljlec_cim;
    this.#cimke = cimke;
    this.#setInputElem($(`#sort_${this.#cimke}`));
    this.#cimkeFelepito();
  }

  #cimkeFelepito() {
    this.#tartalom = `<th> <button id="sort_${this.#cimke}"> ↕ </button> ${
      this.#fejlec_cim
    }</th>`;
  }

  kattintas(adatok) {
    $(`#sort_${this.#cimke}`).on("click", () => {
      const tomb = [];
      for (let index = 0; index < adatok.length; index++) {
        tomb.push(adatok[index][this.#cimke]);
      }
      this.sorrend(adatok);
      this.csokkenoSorrend(adatok);
    });
  }

  sorrend(adatok) {
    var adat = [
      { nev: 'John', kor: 30, varos: 'New York' },
      { nev: 'Alice', kor: 25, varos: 'Los Angeles' },
      { nev: 'Bob', kor: 35, varos: 'Chicago' }
  ];
    function rendezoFuggvenyNovekvo(nev1) {
      return function (elsoElem, masodikElem) {
        if (elsoElem[nev1] !== masodikElem[nev1]) {
          return elsoElem[nev1].localeCompare(masodikElem[nev1]);
        }
      };
    }
    console.log(this.#cimke);
    console.log(adatok[0][this.#cimke])
    adatok.sort(rendezoFuggvenyNovekvo("felhasznalo_nev"));
    adat.sort(rendezoFuggvenyNovekvo("nev"));
    console.log(adatok);
    console.log(adat);
  }

  csokkenoSorrend(adatok) {
    function rendezoFuggvenyCsokeno(nev1) {
      return function (elsoElem, masodikElem) {
        if (masodikElem[nev1] !== elsoElem[nev1]) {
          return masodikElem[nev1].localeCompare(elsoElem[nev1]);
        }
      };
    }
    console.log(this.#cimke);
    adatok.sort(rendezoFuggvenyCsokeno("felhasznalo_nev"));
    console.log(adatok);
  }

  getTartalom() {
    return this.#tartalom;
  }

  getCimke() {
    return this.#cimke;
  }

  #setInputElem(button_id) {
    this.#inputElem = button_id;
  }
}

export default Fejlec;

class Fejlec {
  #cimke;
  #tartalom;
  #fejlec_cim;
  #inputElem;
  #sorend

  constructor(feljlec_cim, cimke) {
    this.#sorend = true
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
     console.log(this.#sorend)
      if(this.#sorend == true){
        adatok = this.novekvoSorrend(adatok);
        this.#sorend = false
      } else{
       adatok = this.csokkenoSorrend(adatok);
       this.#sorend = true
      }
      this.#esemenyTrigger(adatok);
    });
  }

  novekvoSorrend(adatok) {
    adatok.sort(rendezoFuggvenyNovekvo(this.#cimke));
    return adatok


    function rendezoFuggvenyNovekvo(nev1) {
      return function (elsoElem, masodikElem) {
        if (elsoElem[nev1] !== masodikElem[nev1]) {
          return elsoElem[nev1].localeCompare(masodikElem[nev1]);
        }
      };
    }

  }

  csokkenoSorrend(adatok) {
    adatok.sort(rendezoFuggvenyCsokkeno(this.#cimke));
    return adatok



    function rendezoFuggvenyCsokkeno(nev1) {
      return function (elsoElem, masodikElem) {
        if (masodikElem[nev1] !== elsoElem[nev1]) {
          return masodikElem[nev1].localeCompare(elsoElem[nev1]);
        }
      };
    }
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



  #esemenyTrigger(adatok){
    window.dispatchEvent(new CustomEvent("tabla_sorrend_valtas", { detail: adatok}));
  }
}

export default Fejlec;

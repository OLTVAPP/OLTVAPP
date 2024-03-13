class Fejlec {
  #cimke;
  #tartalom
  #fejlec_cim;
  constructor(feljlec_cim, cimke) {
    this.#fejlec_cim = feljlec_cim
    this.#cimke = cimke;
    console.log(cimke)
    this.#cimkeFelepito();
  }

  #cimkeFelepito() {
    this.#tartalom = `<th>${this.#fejlec_cim}</th>`;
  }


  getTartalom(){
    return this.#tartalom
  }

  getCimke(){
    return this.#cimke
  }
}

export default Fejlec;

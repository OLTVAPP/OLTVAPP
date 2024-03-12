class Tartalom {
  #adatok;
  #aktualisMezo;
  #mezok;
  #tartalom;
  #hanyadik;
  constructor(adatok, aktualisMezo, mezok, hanyadik) {
    this.#hanyadik = hanyadik;
    this.#adatok = adatok;
    this.#aktualisMezo = aktualisMezo;
    this.#mezok = mezok;
    this.#elemBeepites();
  }

  #elemBeepites() {
    this.#tartalom = `<td>${this.#adatok[this.#aktualisMezo]}</td>`;
  }

  getTartalom() {
    return this.#tartalom;
  }
}
export default Tartalom;

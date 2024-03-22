import {
  gyerekLeiro,
  reszletesAdatok,
  keszletLeiro,
  ujBeteg,
} from "./adatLeiro.js";

class UrlapModell {
  #gyerekLeiro;
  #reszletesAdatok;
  #keszletLeiro;
  #ujBeteg;

  constructor() {
    this.#gyerekLeiro = gyerekLeiro;
    this.#reszletesAdatok = reszletesAdatok;
    this.#keszletLeiro = keszletLeiro;
    this.#ujBeteg = ujBeteg;
  }

  getLeiro() {
    return { ...this.#gyerekLeiro };
  }

  getReszletesAdatok() {
    return { ...this.#reszletesAdatok };
  }

  getKeszletLeiro() {
    return { ...this.#keszletLeiro };
  }

  getUjBeteg() {
    return { ...this.#ujBeteg };
  }
}
export default UrlapModell;

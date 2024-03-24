import {
  gyerekLeiro,
  reszletesAdatok,
  keszletLeiro,
  ujBeteg,
  ujBeadott
} from "./adatLeiro.js";

class UrlapModell {
  #gyerekLeiro;
  #reszletesAdatok;
  #keszletLeiro;
  #ujBeteg;
  #ujBeadott

  constructor() {
    this.#gyerekLeiro = gyerekLeiro;
    this.#reszletesAdatok = reszletesAdatok;
    this.#keszletLeiro = keszletLeiro;
    this.#ujBeteg = ujBeteg;
    this.#ujBeadott = ujBeadott;
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

  getUjBeadott(){
    return { ...this.#ujBeadott };
  }
}
export default UrlapModell;

import {
  gyerekLeiro,
  reszletesAdatok,
  keszletLeiro,
  ujBeteg,
  ujBeadott,
  ujBeadando,
  profilModositas
} from "./adatLeiro.js";

class UrlapModell {
  #gyerekLeiro;
  #reszletesAdatok;
  #keszletLeiro;
  #ujBeteg;
  #ujBeadott;
  #ujBeadando;
  #profilModositas;

  constructor() {
    this.#gyerekLeiro = gyerekLeiro;
    this.#reszletesAdatok = reszletesAdatok;
    this.#keszletLeiro = keszletLeiro;
    this.#ujBeteg = ujBeteg;
    this.#ujBeadott = ujBeadott;
    this.#ujBeadando = ujBeadando
    this.#profilModositas = profilModositas;
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

  getUjBeadott() {
    return { ...this.#ujBeadott };
  }

  getUjBeadando() {
    return { ...this.#ujBeadando };
  }

  getProfilModositas() {
    return { ...this.#profilModositas };
  }
}
export default UrlapModell;

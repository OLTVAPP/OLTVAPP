import { gyerekLeiro, reszletesAdatok, keszletLeiro } from "./adatLeiro.js";

class UrlapModell {
  #gyerekLeiro;
  #reszletesAdatok
  #keszletLeiro

  constructor() {
    this.#gyerekLeiro = gyerekLeiro;
    this.#reszletesAdatok = reszletesAdatok
    this.#keszletLeiro = keszletLeiro;
  }

  getLeiro() {
    return { ...this.#gyerekLeiro };
  }

  getReszletesAdatok(){
    return { ...this.#reszletesAdatok };
  }

  getKeszletLeiro(){
    return { ...this.#keszletLeiro };
  }




}
export default UrlapModell;

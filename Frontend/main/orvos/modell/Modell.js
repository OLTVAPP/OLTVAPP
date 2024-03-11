import { gyerekLeiro, reszletesAdatok } from "./adatLeiro.js";

class UrlapModell {
  #gyerekLeiro;
  #reszletesAdatok

  constructor() {
    this.#gyerekLeiro = gyerekLeiro;
    this.#reszletesAdatok = reszletesAdatok
  }

  getLeiro() {
    return { ...this.#gyerekLeiro };
  }

  getReszletesAdatok(){
    return { ...this.#reszletesAdatok };
  }


}
export default UrlapModell;

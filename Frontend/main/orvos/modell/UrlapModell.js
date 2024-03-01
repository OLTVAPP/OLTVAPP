import { gyerekLeiro } from "./adatLeiro.js";

class UrlapModell {
  #leiro;

  constructor() {
    this.#leiro = gyerekLeiro;
  }

  getLeiro() {
    return { ...this.#leiro };
  }

}
export default UrlapModell;

import { urlapLeiro } from "./adatLeiro.js";
import { tesztAdatok } from "./tesztAdat.js";

class UrlapModell {
  #leiro;
  #tesztAdatok;

  constructor() {
    this.#leiro = urlapLeiro;
    this.#tesztAdatok = tesztAdatok;
  }

  getLeiro() {
    return { ...this.#leiro };
  }

  getTesztAdatok() {
    return { ...this.#tesztAdatok };
  }
}
export default UrlapModell;

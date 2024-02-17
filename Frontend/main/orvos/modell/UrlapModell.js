import { urlapLeiro } from "./adatLeiro.js";


class UrlapModell {

    #leiro

    constructor() {
        this.#leiro = urlapLeiro;
    }

    getLeiro() {
        return { ...this.#leiro };
    }

}
export default UrlapModell;
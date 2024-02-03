import { urlapLeiro } from "./urlapLeiro.js"

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
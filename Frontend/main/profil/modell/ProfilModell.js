import { inputok, gombok } from "./InputLeiro.js"
class ProfilModell {
    #inputok
    #gombok;

    constructor() {
        this.#inputok = inputok;
        this.#gombok = gombok
    }

    getInputok() {
        return { ...this.#inputok };
    }

    getGombok() {
        return [...this.#gombok];
    }
}

export default ProfilModell;
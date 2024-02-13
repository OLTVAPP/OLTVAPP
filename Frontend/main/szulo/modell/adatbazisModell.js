import { adatbazis, gombok } from "./adatbazisLeiro.js"

class adatbazisModell {

    #leiro
    #gLeiro

    constructor() {
        this.#leiro = adatbazis;
        this.#gLeiro = gombok
    }

    getLeiro() {
        return { ...this.#leiro };
    }

    getGleiro(){
        return [...this.#gLeiro];
    }


}
export default adatbazisModell;
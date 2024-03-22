import { adatbazis, gombok, jelentkezettOltasok } from "./adatbazisLeiro.js"

class adatbazisModell {

    #jelentkezettOltasok
    #leiro
    #gLeiro

    constructor() {
        this.#jelentkezettOltasok = jelentkezettOltasok;
        this.#leiro = adatbazis;
        this.#gLeiro = gombok;
    }

    getLeiro() {
        return { ...this.#leiro };
    }

    getGleiro(){
        return [...this.#gLeiro];
    }

    getJelentkezettOltasok() {
        return { ...this.#jelentkezettOltasok }
    }
}
export default adatbazisModell;
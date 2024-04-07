import { adatbazis, gombok, jelentkezettOltasok, profilModositas } from "./adatbazisLeiro.js"

class adatbazisModell {

    #jelentkezettOltasok
    #leiro
    #gLeiro
    #profilModositas

    constructor() {
        this.#jelentkezettOltasok = jelentkezettOltasok;
        this.#leiro = adatbazis;
        this.#gLeiro = gombok;
        this.#profilModositas = profilModositas;
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

    getProfil() {
        return { ...this.#profilModositas };
    }

}
export default adatbazisModell;
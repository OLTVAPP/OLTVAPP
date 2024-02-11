import { adatbazis } from "./adatbazisLeiro.js"

class adatbazisModell {

    #leiro

    constructor() {
        this.#leiro = adatbazis;
    }

    getLeiro() {
        return { ...this.#leiro };
    }


}
export default adatbazisModell;
class Xyoldal {
    #formElem;
    #adatok;

    constructor(adatok, szuloElem) {
        console.log("Bementem az Xyoldala osztályba");
        this.#adatok = adatok;
        this.#formElem = szuloElem;
        this.#tablaAdatai();
    }



    #tablaAdatai() {
        let txt = `<h2>${this.#adatok.vez_nev} ${this.#adatok.ker_nev} adatai</h2>`;

        this.#formElem.append(txt);
    }

}

export default Xyoldal;

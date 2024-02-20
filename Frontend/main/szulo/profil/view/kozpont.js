class Kozpont {

    #adatok;
    #divElem;
    #tablak = [];

    constructor(adatok, szuloElem, osztaly) {
        this.#adatok = adatok;
        szuloElem.append("<div>");
        this.#divElem = szuloElem.children("div:last-child");
        this.#divElem.addClass(osztaly);

    }

}
export default Kozpont;

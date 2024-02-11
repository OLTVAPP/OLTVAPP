
class OrvosView {

    #adatok;
    #divElem

    constructor(szuloElem) {
        this.#divElem = szuloElem;
        szuloElem.append("<div>");
        this.#divElem = szuloElem.children("div:last-child");
        this.#divElem.addClass(className);

    }


}
export default OrvosView;
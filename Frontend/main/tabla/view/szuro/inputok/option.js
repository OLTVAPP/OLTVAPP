class Option{
    #value;
    #adat;
    #selectElem
    constructor(value, adat, selectElem){
        this.#value = value
        this.#adat = adat;
        this.#selectElem = selectElem;
        this.#selectElem.append(this.optionBeszuro());

    }


    optionBeszuro(){
        return `<option value="${this.#value}">${this.#adat}</option>`
      }

}
export default Option
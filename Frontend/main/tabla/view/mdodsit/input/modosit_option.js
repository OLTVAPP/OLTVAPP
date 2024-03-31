class Modosit_Option{
    #value;
    #adat;
    constructor(value, adat){
        this.#value = value
        this.#adat = adat;
        console.log(value + " ", adat)

    }


    optionBeszuro(){
        return `<option value="${this.#value}">${this.#adat}</option>`
      }



}
export default Modosit_Option
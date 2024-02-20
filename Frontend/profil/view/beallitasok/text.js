class TextInput{

    #formElem;
    #key;
    #leiro;
    #value;


    constructor(key, leiro, szuloElem){
        console.log("hello")
        this.#key = key;
        this.#leiro = leiro;
        this.#formElem = szuloElem;
        this.#value = this.#leiro.value;
        this.#textElem();
        this.inputElem=$(`#${this.#key}`)
        console.log("input", this.inputElem);
        this.validelem = this.#formElem.children("div:last-child").children(".valid");
        this.invalidElem = this.#formElem.children("div:last-child").children(".invalid");;
        console.log(this.validelem)
        console.log(this.invalidElem)
        this.inputElem.on("keyup",()=>{
            this.#value = this.inputElem.val();
            let reg = this.#leiro.regex;
            let regObj = new RegExp(reg);
            console.log(regObj.test(this.#value));
        })


    }



    #textElem() {
        let txt = `<div class="mb-3 mt-3">
        <label for="${this.#key}" class="form-label">${this.#leiro.megjelenes}</label>
        <input type="${this.#leiro.tipus}" class="form-control" id="${this.#key}" placeholder="${this.#leiro.placeholder}" name="${this.#key}"
        pattern="${this.#leiro.regex}" value="${this.#value}">
      </div>`
        this.#formElem.append(txt);
    }


    getValue(){
        return this.#value
    }


}
export default TextInput
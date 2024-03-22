class TextArea{

    #formElem;
    #key;
    #leiro;
    #value;
    #valid = false;


    constructor(key, leiro, szuloElem){
        console.log("hello")
        this.#key = key;
        this.#leiro = leiro;
        this.#formElem = szuloElem;
        this.#value = this.#leiro.value;
        this.#textElem();
        this.inputElem=$(`#${this.#key}`)
        console.log("input", this.inputElem);
        this.validElem = this.#formElem.children("div:last-child").children(".valid");
        this.invalidElem = this.#formElem.children("div:last-child").children(".invalid");;
        this.inputElem.on("keyup",()=>{
            this.#value = this.inputElem.val();
            let reg = this.#leiro.regex;
            let regObj = new RegExp(reg);
            console.log(regObj.test(this.#value));
            if (regObj.test(this.#value)) {
                this.#valid = true;
                this.validElem.removeClass("elrejt");
                this.invalidElem.addClass("elrejt");
            } else {
                this.#valid = false;
                this.invalidElem.removeClass("elrejt");
                this.validElem.addClass("elrejt");
            }
        })


    }

    get id() {
        return this.#leiro.id;
    }

    get value() {
        return this.#value;
    }

    get valid() {
        return this.#valid;
    }

    get key() {
        return this.#key;
    }



    #textElem() {
        let txt = `
        <div class="input">
        <label for="${this.#key}" 
        class="form-label">
        ${this.#leiro.megjelenes}
        </label>
        
        <textarea type="${this.#leiro.tipus}" class="form-control"
        id="${this.#key}" 
        name="${this.#key}"
        ></textarea>
        </div>
        `
        this.#formElem.append(txt);
    }


    getValue(){
        return this.#value
    }


}
export default TextArea
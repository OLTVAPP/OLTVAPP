class HozzaAd_Text{

    #key;
    #leiro = []
    #txt
    #value
    #inputElem
    #valid
    constructor(leiro, key){
        this.#valid = false
        this.#value = "";
        this.#leiro = leiro;
        this.#key = key;
        this.#textElem();
    }

    kiirasModsito(){
        this.validElem = $(`.${this.#key}`).children(".valid");
        this.invalidElem = $(`.${this.#key}`).children(".invalid");;
        this.#inputElem=$(`#add_${this.#key}`)
        this.#inputElem.on("keyup",()=>{
            this.#value = this.#inputElem.val();  
            console.log(this.#value)
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



    #textElem() {
        let txt = `<div class="${this.#key}">
        <label for="${this.#key}" 
        class="form-label">
        ${this.#leiro.megjelenes}
        </label>
        <input type="${this.#leiro.tipus}" class="form-control" 
        id="add_${this.#key}" 
        name="${this.#key}"
        placeholder="${this.#leiro.placeholder}"
        value="${this.#value}"
        patter="${this.#leiro.regex}"
        maxLength="${this.#leiro.maxLength}">
        <div class="valid elrejt">OK</div>
        <div class="invalid elrejt">${this.#leiro.validalas}</div>
        </div>`
        this.#txt = txt;
    }

    getTxt(){
        return this.#txt
    }

    getValue(){
        return this.#value
    }



}
export default HozzaAd_Text
class TextArea{

    #formElem;
    #key;
    #leiro;
    #value;
    #valid = true;


    constructor(key, leiro, szuloElem){
        console.log("hello")
        this.#key = key;
        this.#leiro = leiro;
        this.#formElem = szuloElem;
        this.#value = this.#leiro.value;
        this.#textElem();
        this.inputElem=$(`#${this.#key}`)

        this.inputElem.on("keyup",()=>{
            this.#value = this.inputElem.val();
            if(this.#value === ""){
                this.#value = null;
            }
        })
        if(this.#value === undefined){
            this.#value = null;
        }


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
        maxLength="${this.#leiro.maxLength}"
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
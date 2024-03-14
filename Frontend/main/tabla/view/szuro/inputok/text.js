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
        this.inputElem.on("keyup",()=>{
            this.#value = this.inputElem.val();  
        })
    }

    get id() {
        return this.#leiro.id;
    }

    get value() {
        return this.#value;
    }

    get key() {
        return this.#key;
    }



    #textElem() {
        let txt = `
        <label for="${this.#key}" 
        class="form-label">
        ${this.#leiro.megjelenes}
        </label>
        <input type="${this.#leiro.tipus}" class="form-control" 
        id="${this.#key}" 
        name="${this.#key}"
        value="${this.#leiro.value}">`
        this.#formElem.append(txt);
    }


    getValue(){
        return this.#value;
      }


}
export default TextInput
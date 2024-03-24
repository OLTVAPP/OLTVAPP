class Modosit_Text{
    #key;
    #leiro = []
    #adat = [];
    #txt
    #value
    #inputElem
    constructor(leiro, adat, key){
        this.#leiro = leiro;
        this.#adat = adat;
        this.#key = key;
        this.#value = this.#adat[this.#key]
        this.#textElem();
    }

    kiirasModsito(){
        this.#inputElem=$(`#modosit_${this.#key}`)
        this.#inputElem.on("keyup",()=>{
            this.#value = this.#inputElem.val();  
            console.log(this.#value)
        })
    }



    #textElem() {
        let txt = `
        <label for="${this.#key}" 
        class="form-label">
        ${this.#leiro.megjelenes}
        </label>
        <input type="${this.#leiro.tipus}" class="form-control" 
        id="modosit_${this.#key}" 
        name="${this.#key}"
        placeholder="${this.#adat[this.#key]}"
        value="${this.#value}"
        >`
        this.#txt = txt;
    }

    getTxt(){
        return this.#txt
    }

    getValue(){
        return this.#value
    }

    getKey(){
        return this.#key
    }



}

export default Modosit_Text
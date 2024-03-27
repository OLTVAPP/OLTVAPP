class HozzaAd_Text{

    #key;
    #leiro = []
    #txt
    #value
    #inputElem
    constructor(leiro, key){
        this.#value = "";
        this.#leiro = leiro;
        this.#key = key;
        this.#textElem();
    }

    kiirasModsito(){
        this.#inputElem=$(`#add_${this.#key}`)
        this.#inputElem.on("keyup",()=>{
            this.#value = this.#inputElem.val();  
        })
    }



    #textElem() {
        let txt = `
        <label for="${this.#key}" 
        class="form-label">
        ${this.#leiro.megjelenes}
        </label>
        <input type="${this.#leiro.tipus}" class="form-control" 
        id="add_${this.#key}" 
        name="${this.#key}"
        placeholder="${this.#leiro.placeholder}"
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



}
export default HozzaAd_Text
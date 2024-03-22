class HozzaAd_Text{

    #key;
    #leiro = []
    #txt
    #value
    constructor(leiro, key){
        this.#value = "";
        this.#leiro = leiro;
        this.#key = key;
        this.#textElem();
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
        placeholder=${this.#leiro.placeholder}
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
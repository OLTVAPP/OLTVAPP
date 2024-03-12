class DateInput {

    #key = "";
    #leiro = {};
    #gyerekElem
    #value = "";
    #valid = false;

    constructor(key, leiro, gyerekElem) {
        this.#key = key;
        this.#leiro = leiro;
        this.#gyerekElem = gyerekElem

        this.textElem();

        this.inputElem = $(`#${this.#key}`);
        this.validElem = this.#gyerekElem.children("div:last-child").children(".valid");
        this.invalidElem = this.#gyerekElem.children("div:last-child").children(".invalid");
        this.inputElem.on("keyup", () => {
            this.#value = this.inputElem.val();
            let reg = this.#leiro.regex;
            let regObj = new RegExp(reg);

            if (regObj.test(this.#value)) {
                this.#valid = true;
                this.validElem.removeClass("elrejt");
                this.invalidElem.addClass("elrejt");
            } else {
                this.#valid = false;
                this.invalidElem.removeClass("elrejt");
                this.validElem.addClass("elrejt");
            }
        });
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

    textElem() {
        let txt = `
        <div class="input">
        <label for="${this.#key}" 
        class="form-label">
        ${this.#leiro.megjelenes}
        </label>
        
        <input type="${this.#leiro.tipus}" class="form-control" 
        id="${this.#key}" 
        name="${this.#key}"
        patter="${this.#leiro.regex}"
        value="${this.#leiro.value}"
        maxLength="${this.#leiro.maxLength}">

        <div class="valid elrejt">OK</div>
        <div class="invalid elrejt">${this.#leiro.validalas}</div>
        </div>
        `

        this.#gyerekElem.append(txt);
    }
}

export default DateInput;
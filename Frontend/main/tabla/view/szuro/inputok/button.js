class Button {
    #formElem;
    #key;
    #value;
    #inputElem;
  
    constructor(key, value, szuloElem) {
      console.log("hello");
      this.#key = key;
      this.#formElem = szuloElem;
      this.#value = value;
      this.#buttonElem();
      this.#setInputElem($(`#${this.#key}`));
     this.#kattintas();
    }
  
    #buttonElem() {
      let txt = `<div class="mb-3 mt-3">`;
      txt += ` <button class="form-control" id="${ this.#key }"  value="${this.#value}">  ${this.#value} </button>`;
     // txt += `<input type="${this.#leiro.tipus}" class="form-control" id="${this.#key}"  value="${this.#value}">`;
      txt += "</div>";
      this.#formElem.append(txt);
    }
  
    #kattintas() {
      this.#inputElem.on("click", () => {
        this.#esemenyTrigger();
      });
    }

    #setInputElem(button_id){
    this.#inputElem = button_id;
    }

   
  
    #esemenyTrigger(ertek) {
      window.dispatchEvent(new CustomEvent(`${this.#key}`, { detail: this}));
    }
  }
  export default Button;
  
class SubmitInput {
  #formElem;
  #key;
  #leiro;
  #value;

  constructor(key, leiro, szuloElem) {
    console.log("hello");
    this.#key = key;
    this.#leiro = leiro;
    this.#formElem = szuloElem;
    this.#value = this.#leiro.value;
    this.#buttonElem();
    this.inputElem = $(`#${this.#key}`);
    console.log("input", this.inputElem);
    this.validelem = this.#formElem
      .children("div:last-child")
      .children(".valid");
    this.invalidElem = this.#formElem
      .children("div:last-child")
      .children(".invalid");
    console.log(this.validelem);
    console.log(this.invalidElem);
    this.#kattintas();
  }

  #buttonElem() {
    console.log(this.#leiro.tipus);
    let txt = `<div class="mb-3 mt-3">`;
    txt += ` <button class="form-control" id="${ this.#key }"  value="${this.#value}">  ${this.#value} </button>`;

   // txt += `<input type="${this.#leiro.tipus}" class="form-control" id="${this.#key}"  value="${this.#value}">`;
    txt += "</div>";
    this.#formElem.append(txt);
  }

  #kattintas() {
    this.inputElem.on("click", () => {
      console.log(this.#key)
      this.#esemenyTrigger();
    });
  }

  #esemenyTrigger() {
    window.dispatchEvent(new CustomEvent(`${this.#key}`, { detail: this }));
  }
}
export default SubmitInput;

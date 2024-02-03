import TextInput from "./input/text.js";

class TombInput {
  #adatok;
  #divElem;

  constructor(adatok, szuloElem, className) {
    this.#adatok = adatok;
    szuloElem.append("<div>");
    this.#divElem = szuloElem.children("div:last-child");
    this.#divElem.addClass(className);
    this.#inputTombLetrehozo();
  }

  #inputTombLetrehozo() {
    for (const key in this.#adatok) {
      console.log(key);
      console.log(this.#adatok[key]);
      new TextInput(key, this.#adatok[key], this.#divElem);
    }
  }
}

export default TombInput;

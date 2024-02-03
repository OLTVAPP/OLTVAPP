import PasswordInput from "./input/password.js";
import SubmitInput from "./input/submit.js";
import TextInput from "./input/text.js";

class TombInput {
  #adatok;
  #divElem;
  #inputok = [];
  constructor(adatok, szuloElem, className) {
    this.#adatok = adatok;
    szuloElem.append("<div>");
    this.#divElem = szuloElem.children("div:last-child");
    this.#divElem.addClass(className);
    this.#inputTombLetrehozo();
    console.log(this.#inputok);
  }

  #inputTombLetrehozo() {
    for (const key in this.#adatok) {
      switch (this.#adatok[key].tipus) {
        case "text":
          this.#inputok.push(
            new TextInput(key, this.#adatok[key], this.#divElem)
          );
          break;

        case "password":
          this.#inputok.push(
            new PasswordInput(key, this.#adatok[key], this.#divElem)
          );
          break;
          case "submit":
            this.#inputok.push(
              new SubmitInput(key, this.#adatok[key], this.#divElem)
            );
            break;
      }
    }
  }

  getInputok() {
    return this.#inputok;
  }
}

export default TombInput;

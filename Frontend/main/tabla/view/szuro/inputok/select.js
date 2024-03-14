import Option from "./option.js";
class Select {
  #selectElem;
  #adatok;
  #value;

  constructor(adatok, selectElem) {
    this.#adatok = adatok;
    this.#selectElem = selectElem;
    for (let index = 0; index < this.#adatok.length; index++) {
      console.log(this.#adatok[index].value);
      new Option(
        this.#adatok[index].value,
        this.#adatok[index].kiiras,
        this.#selectElem
      );
    }
    this.#kattintas();
  }


  #kattintas() {
    this.#selectElem.on("change", (e) => {
        let optionSelected = $(e.target);
        this.setValue(optionSelected.val());
        console.log(this.#value)
    });
  }


  setValue(value){
    this.#value = value;
  }

  getValue(){
    return this.#value;
  }

}
export default Select;

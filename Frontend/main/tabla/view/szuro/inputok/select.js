import Option from "./option.js";
class Select {
  #selectElem;
  #adatok;
  #value;

  constructor(key, inputElem) {
    inputElem.append(`<select id="${key}"></select>`);
    this.#selectElem = inputElem.children(`#${key}:last-child`);
    this.#change(); 
  }


  selectLetrehozo(adatok, selectElem){
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
  }



  #change() {
    this.#selectElem.on("change", (e) => {
        let optionSelected = $(e.target);
        this.setValue(optionSelected.val());
    });
  }


  setValue(value){
    this.#value = value;
  }

  getValue(){
    return this.#value;
  }

  getSelectElem(){
    return this.#selectElem
  }

}
export default Select;

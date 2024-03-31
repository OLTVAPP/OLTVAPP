import Modosit_Option from "./modosit_option.js";

class Select_Modosit{
    #selectElem;
    #adatok;
    #value;
    #key;
    #txt;
    #elsoErtek;
  
    constructor(key, cimke) {
      this.#key = key;
      this.#txt = `<label>${cimke}</label>`;
      this.#txt += `<select class="form-control form-select-sm" id="add_${key}">`;
    }
  
    selectLetrehozo(adatok, data) {
      this.#elsoErtek = $(`#add_${this.#key} option[value="${data[0][this.#key]}"]`)
      this.#adatok = adatok;
      this.setValue( this.#adatok[0].value)
      for (let index = 0; index < this.#adatok.length; index++) {
        this.#txt += new Modosit_Option(
          this.#adatok[index].value,
          this.#adatok[index].kiiras
        ).optionBeszuro();
        console.log(this.#txt)
      }
     
    }
  
    selectLetrehozoUrl(adatok) {
      this.#adatok = adatok;
      this.setValue( this.#adatok[0].value)
      for (let index = 0; index < this.#adatok.length; index++) {
        console.log(this.#adatok[index].value);
         this.#selectElem.append(new Modosit_Option(
          this.#adatok[index].value,
          this.#adatok[index].kiiras
        ).optionBeszuro());
       
        window.dispatchEvent(new CustomEvent("selectURL", { detail: this}));
      }
     
    }



    elsoElemreValtas(){



    }
  
    getTxt() {
      return this.#txt;
    }
  
  
    selectLezaro(){
     return "</select>";
    }
  
    kiirasModsito() {
      this.#selectElem = $(`#add_${this.#key}`);
      this.#selectElem.on("change", (e) => {
        let optionSelected = $(e.target);
        this.setValue(optionSelected.val());
        console.log(this.#value);
      });
    }
  
    getKey() {
      return this.#key;
    }
  
    setValue(value) {
      this.#value = value;
    }
  
    getValue() {
      return this.#value;
    }
  
    getSelectElem() {
      return this.#selectElem;
    }




}
export default Select_Modosit
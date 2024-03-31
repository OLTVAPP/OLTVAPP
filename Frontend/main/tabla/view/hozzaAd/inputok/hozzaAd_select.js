import HozzaAd_Option from "./hozzaAd_option.js";

class HozzaAd_Select {
  #selectElem;
  #adatok;
  #value;
  #key;
  #txt;

  constructor(key, cimke) {
    this.#key = key;
    this.#txt = `<label>${cimke}</label>`;
    this.#txt += `<select class="form-control form-select-sm" id="add_${key}">`;
  }

  selectLetrehozo(adatok) {
    this.#adatok = adatok;
    this.setValue( this.#adatok[0].value)
    for (let index = 0; index < this.#adatok.length; index++) {
      this.#txt += new HozzaAd_Option(
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
       this.#selectElem.append(new HozzaAd_Option(
        this.#adatok[index].value,
        this.#adatok[index].kiiras
      ).optionBeszuro());
      window.dispatchEvent(new CustomEvent("selectURL", { detail: this}));
    }
   
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
export default HozzaAd_Select;

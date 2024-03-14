import DataService from "../../modell/data.js";
import Select from "./inputok/select.js";
import Option from "./inputok/option.js";

class Szurok {
  #adatok;
  #divElem;
  #inputok;
  constructor(adatok, szuloElem) {
    
    this.#adatok = adatok;
    this.#divElem = szuloElem;
 
    this.#init();
  }

  #init() {
    
    for (let index = 0; index < this.#adatok.length; index++)  {
      switch (this.#adatok[index].tipus) {
        /*   case "text":
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
          ); */
        case "select":
          const dataService = new DataService();
          this.#divElem.append(`<select id="${this.#adatok[index].key}"></select>`)
          const selectElem = this.#divElem.children(`#${this.#adatok[index].key}:last-child`)
          console.log(selectElem)
          if(this.#adatok[index].url == "nincs"){
              new Select(this.#adatok[index].valaszto, selectElem);
          } else{
            new Option(this.#adatok[index].valaszto.value, this.#adatok[index].valaszto.kiiras, selectElem);
            dataService.getDataKereso(this.#adatok[index].url, this.#selectUrlLetrehozo,  selectElem);
          }
          break;
      }
    }
  }


  #selectUrlLetrehozo(obj, selectElem){
    console.log(obj)
    new Select(obj, selectElem);
  }



  getInputok() {
    return this.#inputok;
  }
}

export default Szurok;

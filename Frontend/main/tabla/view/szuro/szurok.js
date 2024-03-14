import DataService from "../../modell/data.js";
import Select from "./inputok/select.js";
import TextInput from "./inputok/text.js";
import Button from "./inputok/button.js";

class Szurok {
  #adatok;
  #divElem;
  #inputok;
  #szuroAdatErteke;
  #objektumok = [];
  constructor(adatok, szuloElem) {
    this.#adatok = adatok;
    this.#divElem = szuloElem;
    this.#init();
    console.log(this.#objektumok)
  }

  #init() {
    for (let index = 0; index < this.#adatok.length; index++)  {
      this.#divElem.append('<div class="input"></div>')
      const inputElem = this.#divElem.children('div:last-child')
      switch (this.#adatok[index].tipus) {
          case "text":
           this.#objektumok.push(new TextInput(this.#adatok[index].key, this.#adatok[index], inputElem));
          break;
          case "button":
             new Button(this.#adatok[index].key, this.#adatok[index].value, inputElem);
          break;
        case "select":
          const select = new Select(this.#adatok[index].key, this.#divElem);
          const selectElem = select.getSelectElem();
          console.log(selectElem)
          if(this.#adatok[index].url == "nincs"){
             select.selectLetrehozo(this.#adatok[index].valaszto, select.getSelectElem());
          } else{
            const dataService = new DataService();
            select.selectLetrehozo(this.#adatok[index].valaszto, select.getSelectElem());
            select.setValue("");
            dataService.getDataKereso(this.#adatok[index].url, this.#selectUrlLetrehozo,  select.getSelectElem(), select); 
          }
          this.#objektumok.push(select);
          break;
      }
    }
  }

  #kereses(){
    this.#divElem.append('<div class="input"></div>')
    const inputElem = this.#divElem.children('div:last-child')
    const keres = new Button("kereses", "Keresés", inputElem)
    keres.kattintas(this.#objektumok);
  }

  #selectUrlLetrehozo(adat, selectElem, obj){
    console.log(adat)
    obj.selectLetrehozo(adat, selectElem)
  }

  getObjektumok(){
    return this.#objektumok;
  }

  
}

export default Szurok;

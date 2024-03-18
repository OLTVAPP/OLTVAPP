import Fejlec from "./fejLec.js";
import Tartalom from "./tartalom.js";

class Tabla {
  #fejelc_obj = [];
  #adatok;
  #fejlec;
  #tablaElem;
  #tablaJelolok = [];
  constructor(adatok, fejlec) {
    this.#tablaElem = $("table");
    this.#adatok = adatok;
    this.#fejlec = fejlec;
    this.fejLecKiiro();
    this.tartalomKiiro();
   for (let index = 0; index < this.#fejelc_obj.length; index++) {
     this.#fejelc_obj[index].kattintas(this.#adatok);
    } 
    this.tartalomKiiroCsere();
  }

  fejLecKiiro() {
    this.#tablaElem.append("<thead></thead>");
    const fej = this.#tablaElem.children("thead:last-child");
    let txt = "<tr>"
    let hanyadik = 0;
    for (const key in this.#fejlec) {
      console.log(key);
      this.#fejelc_obj[hanyadik] = new Fejlec(this.#fejlec[key], key);
      txt += this.#fejelc_obj[hanyadik].getTartalom();
      this.#tablaJelolok.push(this.#fejelc_obj[hanyadik].getCimke());
      hanyadik = hanyadik + 1;
    }
    fej.append(txt);
  }



  tartalomKiiro(){
    this.#tablaElem.append("<tbody></tbody>");
    const test = this.#tablaElem.children("tbody:last-child");
    for (let index = 0; index < this.#adatok.length; index++) {
        let txt = "<tr>"
        console.log(this.#adatok[index])
        let hanyadik = 0
        for (const key in this.#adatok[index]) {
          console.log(key);
          console.log(this.#adatok[index].aktiv)
            if(key == this.#tablaJelolok[hanyadik]){
              const tartalom = new Tartalom(this.#adatok[index], key, this.#tablaJelolok, hanyadik);
              txt += tartalom.getTartalom();
              hanyadik ++;
            }
        }
        test.append(txt); 
    }
  }


  tartalomKiiroCsere(){
    $(window).on("tabla_sorrend_valtas", (event) => {
      const tartalom = $('tbody');
      console.log(tartalom);
      console.log(event.detail)
      tartalom.empty()
      for (let index = 0; index < event.detail.length; index++) {
        let txt = "<tr>"
        let hanyadik = 0
        for (const key in event.detail[index]) {
          console.log(key);
          console.log(this.#adatok[index].aktiv)
            if(key == this.#tablaJelolok[hanyadik]){
              const tartalom = new Tartalom(event.detail[index], key, this.#tablaJelolok, hanyadik);
              txt += tartalom.getTartalom();
              hanyadik ++;
            }
        }
        tartalom.append(txt); 
    }

    });
    

  }
}
export default Tabla;

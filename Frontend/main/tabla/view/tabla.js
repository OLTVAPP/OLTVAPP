import Fejlec from "./fejLec.js";
import Tartalom from "./tartalom.js";

class Tabla {
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
  }

  fejLecKiiro() {
    this.#tablaElem.append("<thead></thead>");
    const fej = this.#tablaElem.children("thead:last-child");
    fej.append("<tr>");
    for (const key in this.#fejlec) {
      console.log(key);
      const fejlec = new Fejlec(this.#fejlec[key], key);
      fej.append(fejlec.getTartalom());
      this.#tablaJelolok.push(fejlec.getCimke());
    }
    fej.append("</tr>");
  }



  tartalomKiiro(){
    this.#tablaElem.append("<tbody></tbody>");
    const test = this.#tablaElem.children("tbody:last-child");
    for (let index = 0; index < this.#adatok.length; index++) {
        test.append('<tr>');
        console.log(this.#adatok[index])
        let hanyadik = 0
        for (const key in this.#adatok[index]) {
          console.log(key);
          console.log(this.#adatok[index].aktiv)
            if(key == this.#tablaJelolok[hanyadik]){
              const tartalom = new Tartalom(this.#adatok[index], key, this.#tablaJelolok, hanyadik);
              test.append(tartalom.getTartalom());
              hanyadik ++;
            }
            
        }
        test.append('</tr>');
        
    }


  }
}
export default Tabla;

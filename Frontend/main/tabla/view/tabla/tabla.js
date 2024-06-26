import Modosit from "../mdodsit/modosit.js";
import Fejlec from "./fejLec.js";
import Tartalom from "./tartalom.js";

class Tabla {
  #fejelc_obj = [];
  #adatok;
  #fejlec;
  #tablaElem;
  #tablaJelolok = [];
  #tablaMezokHossz;
  #modositGomb = [];
  constructor(adatok, fejlec) {
    this.#tablaMezokHossz = 0;
    this.#tablaElem = $("table");
    this.#adatok = adatok;
    this.#fejlec = fejlec;
    this.#modositGomb = [];
    this.#fejelc_obj = [];
    this.fejLecKiiro();
    this.tartalomKiiro();
    for (let index = 0; index < this.#fejelc_obj.length; index++) {
      this.#fejelc_obj[index].kattintas(this.#adatok);
    }
    console.log(this.#tablaJelolok);
    this.tartalomKiiroCsere();
  }

  fejLecKiiro() {
    this.#tablaElem.append("<thead></thead>");
    const fej = this.#tablaElem.children("thead:last-child");
    let txt = "<tr>";
    let hanyadik = 0;
    for (const key in this.#fejlec) {
      if (key != "sorrendValtozatato") {
        this.#fejelc_obj[hanyadik] = new Fejlec(this.#fejlec[key], key);

        if (key == "modosit") {
          this.#fejelc_obj[hanyadik].modositFelepito();
          txt += this.#fejelc_obj[hanyadik].getTartalom();
          hanyadik = hanyadik + 1;
          this.#tablaJelolok.push("modosit");
        } else {
          this.#fejelc_obj[hanyadik].cimkeFelepito(
            this.#fejlec.sorrendValtozatato[hanyadik]
          );
          txt += this.#fejelc_obj[hanyadik].getTartalom();
          this.#tablaJelolok.push(this.#fejelc_obj[hanyadik].getCimke());
          hanyadik = hanyadik + 1;
        }
        this.#tablaMezokHossz = this.#tablaMezokHossz + 1;
      }
    }
    fej.append(txt);
  }

  tartalomKiiro() {
    this.#tablaElem.append("<tbody></tbody>");
    const test = this.#tablaElem.children("tbody:last-child");
    for (let index = 0; index < this.#adatok.length; index++) {
      let txt = "<tr>";
      let hanyadik = 0;
      let mezo = 0;
      while (this.#tablaMezokHossz > mezo) {
        if (this.#tablaJelolok[hanyadik] == "modosit") {
          mezo = mezo + 1;
          this.#modositGomb.push(
            new Modosit(this.#adatok[index].id, this.#tablaElem.attr("id"))
          );
          txt += this.#modositGomb[index].modositMezoKiiras();
        } else {
          for (const key in this.#adatok[index]) {
            if (key == this.#tablaJelolok[hanyadik]) {
              const tartalom = new Tartalom(
                this.#adatok[index],
                key,
                this.#tablaJelolok,
                hanyadik
              );
              txt += tartalom.getTartalom();
              hanyadik++;
              mezo = mezo + 1;
            }
          }
        }
      }
      test.append(txt);
    }
    this.#futtato();
  }

  tartalomKiiroCsere() {
    $(window).on("tabla_sorrend_valtas", (event) => {
      
      this.#modositGomb = [];
      const tartalom = $("tbody");
      tartalom.empty();
      for (let index = 0; index < event.detail.length; index++) {
        console.log("index ciklus")
        let txt = "<tr>";
        let hanyadik = 0;
        let mezo = 0;

        while (this.#tablaMezokHossz > mezo) {
          console.log("Tábla mező hossz:" +this.#tablaMezokHossz + " aktuális mező érték: " + mezo)
          if (this.#tablaJelolok[hanyadik] == "modosit") {
            mezo = mezo + 1;
            this.#modositGomb.push(
              new Modosit(this.#adatok[index].id, this.#tablaElem.attr("id"))
            );
            txt += this.#modositGomb[index].modositMezoKiiras();
           // mezo = this.#tablaMezokHossz;
          } else {
            for (const key in event.detail[mezo]) {
       //       console.log("Tábla mező hossz:" +this.#tablaMezokHossz + " aktuális mező érték: " + mezo)
              if (key == this.#tablaJelolok[mezo]) {
                const tartalom = new Tartalom(
                  event.detail[index],
                  key,
                  this.#tablaJelolok,
                  hanyadik
                );
                txt += tartalom.getTartalom();
                hanyadik++;
                mezo = mezo + 1;
              }
            }
          }
        }
        tartalom.append(txt);
      }
      this.#futtato();
    });
  }

  #futtato() {
    for (let index = 0; index < this.#modositGomb.length; index++) {
      this.#modositGomb[index].modositasParancs();
    }
  }
}
export default Tabla;

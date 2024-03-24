import DataService from "./data.js";

import { admin_adatok_modosit, felhasznalo_adatok_modosit, orvos_adatok_modosit, szulo_adatok_modosit } from "./modositAdurl_leiro.js";

class Adat_Modosit {
    #tablaAdatUrl;
    #fejLecek
    #data = new DataService()
    #urlAdatok = {};
    #adatok;
    constructor(adatok, idElem, fejLecek, id) {
      this.#adatok = adatok
        this.#fejLecek = fejLecek;
        switch (idElem) {
            case "felhasznalo_A":
                this.#tablaAdatUrl =  felhasznalo_adatok_modosit.url
                this.#urlAdatok = felhasznalo_adatok_modosit.szuksegesAdatok;
                this.#adatOsszerako()
                this.#data.putData(this.#tablaAdatUrl, id, this.#urlAdatok)
                this.#tablaAdatUrl =  admin_adatok_modosit.url
                this.#urlAdatok = admin_adatok_modosit.szuksegesAdatok;
                this.#adatOsszerako()
                this.#data.putData(this.#tablaAdatUrl, id, this.#urlAdatok)
                break;
            case "felhasznalo_S":
              this.#tablaAdatUrl =  felhasznalo_adatok_modosit.url
                this.#urlAdatok = felhasznalo_adatok_modosit.szuksegesAdatok;
                this.#adatOsszerako()
                this.#data.putData(this.#tablaAdatUrl, id, this.#urlAdatok)
                this.#tablaAdatUrl =  szulo_adatok_modosit.url
                this.#urlAdatok = szulo_adatok_modosit.szuksegesAdatok;
                this.#adatOsszerako()
                this.#data.putData(this.#tablaAdatUrl, id, this.#urlAdatok)
                break;
            case "felhasznalo_O":
              this.#tablaAdatUrl =  felhasznalo_adatok_modosit.url
              this.#urlAdatok = felhasznalo_adatok_modosit.szuksegesAdatok;
              this.#adatOsszerako()
              this.#data.putData(this.#tablaAdatUrl, id, this.#urlAdatok)
              this.#tablaAdatUrl =   orvos_adatok_modosit.url
              this.#urlAdatok =  orvos_adatok_modosit.szuksegesAdatok;
              this.#adatOsszerako()
              this.#data.putData(this.#tablaAdatUrl, id, this.#urlAdatok)
                break;

            default:
                break;
        }
      //  location.reload();
    }

    #adatOsszerako() {
      for (const key in this.#urlAdatok) {
        for (let index = 0; index < this.#adatok.length; index++) {
          if (key == this.#adatok[index].getKey()) {
            this.#urlAdatok[key] = this.#adatok[index].getValue();
          }
        }
      }
    }




    #szuroErtekAtadas(adatok) {
        // Itt adja meg az url-nek a szüréshez szükséges kiirást
        let kiiras = "?";
        let hanyadik = 0;
        for (const key in this.#fejLecek) {
          if (adatok[hanyadik] == "") {
            kiiras = kiiras + key;
          } else {
            kiiras = kiiras + key + "=" + adatok[hanyadik];
          }
          if (hanyadik < adatok.length - 1) {
            kiiras = kiiras + "&";
          }
          hanyadik = hanyadik + 1;
        }
        return kiiras;
      }





}
export default Adat_Modosit;
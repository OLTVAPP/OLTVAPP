import DataService from "./data.js";
import {
  admin_adatok_hozzaAd,
  beadando_hozzaAd,
  felhasznalo_adatok_hozzaAd,
  oltas_hozzaAd,
  oltas_tipus_hozzaAd,
  orvos_adatok_hozzaAd,
} from "./hozzaAdurl_leiro.js";

class Adat_hozaAd {
  #adatok;
  #idEllenorzo;
  #url;
  #urlAdatok = {};
  #kereses;
  constructor(adatok, idEllenorzo) {
    this.#idEllenorzo = idEllenorzo;
    this.#adatok = adatok;
    this.urlAtado();
  }

  urlAtado() {
    const data = new DataService();
    console.log(this.#idEllenorzo);
    switch (this.#idEllenorzo) {
      case "admin_felhasznalo":
        this.#url = felhasznalo_adatok_hozzaAd.url;
        this.#urlAdatok = felhasznalo_adatok_hozzaAd.szuksegesAdatok;
        this.#urlAdatok.szerepkor = "A";
        this.#adatOsszerako();
        data.postData(this.#url, this.#urlAdatok);
        this.#kereses = this.#urlAdatok.felhasznalo_email;
        this.#urlAdatok = admin_adatok_hozzaAd;
        console.log(this.#urlAdatok);
        this.#adatOsszerako();
        data.getDataAdd(
          `http://localhost:8000/api/felhasznalo_idKeres/${this.#kereses}`,
          this.#masodikTablaAdd,
          this.#urlAdatok
        );
        break;
      case "orvos_felhasznalo":
        this.#url = felhasznalo_adatok_hozzaAd.url;
        this.#urlAdatok = felhasznalo_adatok_hozzaAd.szuksegesAdatok;
        this.#urlAdatok.szerepkor = "O";
        this.#adatOsszerako();
        data.postData(this.#url, this.#urlAdatok);
        this.#kereses = this.#urlAdatok.felhasznalo_email;
        this.#urlAdatok = orvos_adatok_hozzaAd;
        console.log(this.#urlAdatok);
        this.#adatOsszerako();
        data.getDataAdd(
          `http://localhost:8000/api/felhasznalo_idKeres/${this.#kereses}`,
          this.#masodikTablaAdd,
          this.#urlAdatok
        );
        break;
      case "oltas_tipus":
        this.#url = oltas_tipus_hozzaAd.url;
        this.#urlAdatok = oltas_tipus_hozzaAd.szuksegesAdatok;
        console.log(this.#url);
        this.#adatOsszerako();
        data.postData(this.#url, this.#urlAdatok);
        break;
      case "beadando":
        console.log("beadand");
        this.#url = beadando_hozzaAd.url;
        this.#urlAdatok = beadando_hozzaAd.szuksegesAdatok;
        console.log(this.#url);
        this.#adatOsszerako();
        console.log(this.#urlAdatok);
        data.postData(this.#url, this.#urlAdatok);
        break;
        case "oltas":
          console.log("oltas");
          this.#url = oltas_hozzaAd.url;
          this.#urlAdatok = oltas_hozzaAd.szuksegesAdatok;
          console.log(this.#url);
          this.#adatOsszerako();
          console.log(this.#urlAdatok);
          data.postData(this.#url, this.#urlAdatok);
          break;
      default:
        break;
    }
     location.reload();
  }

  #adatOsszerako() {
    for (const key in this.#urlAdatok) {
      for (let index = 0; index < this.#adatok.length; index++) {
        if (key == this.#adatok[index].key) {
          this.#urlAdatok[key] = this.#adatok[index].value;
        }
      }
    }
  }

  #masodikTablaAdd(obj, adatok) {
    const data = new DataService();
    adatok.felhasznalo_id = obj[0].id;
    console.log(obj);
    console.log(adatok);
    switch (obj[0].szerepkor) {
      case "A":
        console.log("admin");
        data.postData("http://localhost:8000/api/admin", adatok);
        break;
      case "O":
        console.log("orvos");
        data.postData("http://localhost:8000/api/orvos", adatok);
        break;
      default:
        break;
    }
  }
}

export default Adat_hozaAd;

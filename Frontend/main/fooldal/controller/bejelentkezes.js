import { bejelentKezesLeiro } from "../modell/adatLeiro.js";
import DataService from "../modell/data.js";
import Felhasznalo from "../modell/felhasznalo.js";
import TombInput from "../view/TombInput.js";

class Bejelentkezes {
  #felhasznalo_nev = "";
  #jelszo = "";
  #hElem;
  #felhasznaloi_adatok;
  #dataService = new DataService();
  constructor(articleElem) {
    const adatTombok = [];
    const adatLeiro = bejelentKezesLeiro;
    for (const tomb in adatLeiro) {
      console.log(adatLeiro[tomb]);
      adatTombok.push(new TombInput(adatLeiro[tomb], articleElem, tomb));
    }
    this.#felhasznaloi_adatok = adatTombok[0].getInputok();
    articleElem.append("<h5>");
    this.#hElem = articleElem.children("h5:last-child");
    this.#bejelentkezes();
  }

  #bejelentkezes() {
    $(window).on("belepes", (event) => {
      this.#hElem.empty();
      this.#felhasznalo_nev = this.#felhasznaloi_adatok[0].getValue();
      this.#jelszo = this.#felhasznaloi_adatok[1].getValue();
      console.log(this.#felhasznalo_nev);
      console.log(this.#jelszo);

      this.#dataService.getData(
        `http://localhost:8000/api/bejelentkezes/${this.#felhasznalo_nev}/${
          this.#jelszo
        }`,
        this.keresett_felhasznalo,
        this.#hElem,
        this.megjelenitHiba
      );
    });
  }

  keresett_felhasznalo(obj, elem) {
    console.log(obj);
    let jelszo_allapot = obj[0];
    if (jelszo_allapot == "Helyes jelszó") {
      const objektum = obj[1];
      console.log(objektum)
      console.log("jó jelszó");
      if (objektum == 1) {
        const adat = {
          emai: objektum.felhasznalo_email,
          jelszo: objektum.jelszo,
        };
        localStorage.setItem("felhasznalo", obj[3]);
        switch (obj[2]) {
          case "S":
            console.log("szulo");
            window.location.assign("/main/szulo/szulo.html");
            break;
          case "O":
            console.log("orvos");
            window.location.assign("/main/orvos/orvos.html");
            break;
          case "A":
            console.log("admin");
            window.location.assign("/main/admin/admin.html");
            break;
        }
      } else {
        elem.append("<h5>Nem aktív felhasználó</h5>");
        console.log("Nem aktív felhasználó");
      }
    } else if (jelszo_allapot == "helytelen jelszó") {
      elem.append("<h5>Hibás jelszó</h5>");
      console.log("Hibás jelszó");
    } else {
      elem.append("<h5>Nincs ilyen felhasználó</h5>");
      console.log("Nincs ilyen felhasználó");
    }
  }

  megjelenitHiba(hiba) {}
}
export default Bejelentkezes;

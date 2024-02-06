import {
  bejelentKezesLeiro,
  bejelentKezesElfelejtLeiro,
} from "../model/adatLeiro.js";
import DataService from "../model/dataService.js";
import Felhasznalo from "../model/felhasznalo.js";
import TombInput from "../view/tombInput.js";
class Bejelentkezes {
  #felhasznalo_id;
  #felhasznalo_nev;
  #jelszo;
  #email_cim;
  #felhasznalo
  #felhasznaloi_adatok;
  #dataService = new DataService();
  constructor() {
    const adatTombok = [];
    const adatLeiro = bejelentKezesLeiro;
    $("article").append("<form>");
    const formElem = $("article").children("form:last-child");
    for (const tomb in adatLeiro) {
      console.log(adatLeiro[tomb]);
      adatTombok.push(new TombInput(adatLeiro[tomb], $("article"), tomb));
    }
    this.#felhasznaloi_adatok = adatTombok[0].getInputok();
    this.#bejelentkezes()
  }


  #bejelentkezes() {
    $(window).on("belepes", (event) => {
      this.#felhasznalo_nev = this.#felhasznaloi_adatok[0].getValue()
      this.#jelszo = this.#felhasznaloi_adatok[1].getValue()
      console.log(this.#felhasznalo_nev)
      console.log(this.#jelszo)
      this.#dataService.getData(
        `http://localhost:8000/api/felhasznalo_keres/${this.#felhasznalo_nev}`,
        this.keresett_felhasznalo,
        this.megjelenitHiba
      );
    });
  }

  keresett_felhasznalo(obj) {
    const objektum = obj[0]

    console.log(objektum.jelszo)

    console.log(objektum.szerepkor)

    if ("123ab" == objektum.jelszo) {
      console.log("jó jjelszó")
      if (objektum.aktiv == 1) {
        console.log(objektum.szerepkor)
        switch (objektum.szerepkor) {
          case 'S':
            console.log("szulo")
          //  location.replace("https://www.w3schools.com");
            break;

          case 'O':
            console.log("orvos")
           // location.replace("https://www.w3schools.com");
            break;
          case 'A':
            console.log("admin")
          //  location.replace("admin.html");
            break;
        }

      } else {
        console.log("Nem aktív felhasználó")
      }



    } else {
      console.log("Hibás elszó")
    }


  }



  megjelenitHiba(hiba) { }

}
export default Bejelentkezes;

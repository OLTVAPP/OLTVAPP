import {bejelentKezesLeiro, bejelentKezesElfelejtLeiro,} from "../modell/adatLeiro.js";
import DataService from "../modell/dataService.js";
import Felhasznalo from "../modell/felhasznalo.js";
import TombInput from "../view/tombInput.js";

class Bejelentkezes {
  #felhasznalo_id;
  #felhasznalo_nev = "";
  #jelszo = "";
  #email_cim;
  #felhasznalo
  #felhasznaloi_adatok;
  #dataService = new DataService;
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
        `http://localhost:8000/api/felhasznalo_keres/${this.#felhasznalo_nev}/${this.#jelszo}`,
        this.keresett_felhasznalo,
        this.megjelenitHiba
      );
    });
  }

  keresett_felhasznalo(obj) {
    console.log(obj);
    let jelszo_allapot = obj[0]
    if (jelszo_allapot == "Helyes jelszó") {
      const objektum = obj[1];
      console.log("jó jelszó")
      if (objektum.aktiv == 1) {
        const felhasznalo = new Felhasznalo(objektum.felhasznalo_id);
        
        switch (objektum.szerepkor) {
          case 'S':
            console.log("szulo")
           // location.replace("/main/szulo/szulo.html");
         
            window.location.assign("/main/admin/admin.html");
            console.log(felhasznalo.getId())
            break;
          case 'O':
            console.log("orvos")
            window.location.assign("/main/orvos/orvos.html");
            console.log(felhasznalo.getId())
            break;
          case 'A':
            console.log("admin")
            window.location.assign("/main/admin/admin.html");
            console.log(felhasznalo.getId())
            break;
        }
      } else {
        console.log("Nem aktív felhasználó")
      }
    } else if(jelszo_allapot == "helytelen jelszó") {
      console.log("Hibás jelszó")
    } else{
      console.log("Nincs ilyen felhasználó")
    }


  }



  megjelenitHiba(hiba) { }

}
export default Bejelentkezes;

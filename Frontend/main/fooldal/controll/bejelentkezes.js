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
  constructor() {
    this.dataService = new DataService();
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


  #bejelentkezes(){
    $(window).on("belepes", (event) => {
      this.#felhasznalo_nev = this.#felhasznaloi_adatok[0].getValue()
      this.#jelszo = this.#felhasznaloi_adatok[1].getValue()
      console.log(this.#felhasznalo_nev)
      console.log(this.#jelszo)
      this.dataService.getData(
        `http://localhost:8000/api/felhasznalo_keres/${this.#felhasznalo_nev}`,
        this.keresett_felhasznalo_id,
        this.megjelenitHiba
      );
    });
  }

  keresett_felhasznalo_id(obj){
    const objektum = obj[0]
    console.log(objektum)
    this.#felhasznalo = new Felhasznalo();
   
    this.#felhasznalo.setAdatok(objektum);
    this.dataService.getData(
      `http://localhost:8000/api/felhasznalo/1`,
      this.megjelenit,
      this.megjelenitHiba
    );
  }

  megjelenit(lista) {
    console.log(lista)
   

  }

  megjelenitHiba(hiba){}

}
export default Bejelentkezes;

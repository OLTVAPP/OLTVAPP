import { bejelentKezesElfelejtLeiro } from "../modell/adatLeiro.js";
import TombInput from "../view/TombInput.js";
import Bejelentkezes from "./bejelentkezes.js";


class ElfelejtettJelszo {
    #aritcleElem
  constructor(articelElem) {
    this.#aritcleElem = articelElem
    this.#aritcleElem.append("<div><h4 class='elf_jelszo'>Elfelejtem a jelszót!</h4></div>" );
    const elfelejtettJelszo = $(".elf_jelszo");
    elfelejtettJelszo.on("click", () => {
      this.kattintasFunkcio(this.#aritcleElem);
    });
    this.megse();
    this.megerosit();
  }

  kattintasFunkcio(articelElem) {
    const adatTombok = [];
    articelElem.empty();
    const adatLeiro = bejelentKezesElfelejtLeiro;
    for (const tomb in adatLeiro) {
      console.log(adatLeiro[tomb]);
      adatTombok.push(new TombInput(adatLeiro[tomb], $("article"), tomb));
    }
  }



  megse(){
    $(window).on("megse", (event) => {
        console.log("megse")
        this.#aritcleElem.empty();
        new Bejelentkezes(this.#aritcleElem);
        new ElfelejtettJelszo(this.#aritcleElem);
  });
}


  megerosit(){


  }

}
export default ElfelejtettJelszo;

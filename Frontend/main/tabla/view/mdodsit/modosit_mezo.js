import Adat_Modosit from "../../modell/adat_modosit.js";
import DataService from "../../modell/data.js";
import Modosit_extended_Text from "./input/modosit_extended_text.js";

import Select_Modosit from "./input/modosit_select.js";
import Modosit_Text from "./input/modosit_text.js";

class Modosit_mezo {
  #adatok = [];
  #szuloElem;
  #leiro;
  #mentesGomb;
  #ujAdat = [];
  #id;
  constructor(szuloElem, adat, leiro) {
    this.#id = adat[0].id;
    for (const key in adat) {
      this.#adatok.push(adat[key]);
    }
    this.#szuloElem = szuloElem;
    this.#leiro = leiro;
    this.#sor();
    for (let index = 0; index < this.#ujAdat.length; index++) {
      this.#ujAdat[index].kiirasModsito();
    }
    this.#kattintas();
  }

  #sor() {
    let hanyadik = 0;
    let txt = '<span class="close">&times;</span>';
    txt += '<div class="mb-3">';
    for (let index = 0; index < this.#leiro.length; index++) {
      if (this.#leiro[index].key == "plusz") {
        const pluszLeiro = this.#leiro[index].pluszAdatok;
        for (let x = 0; x < pluszLeiro.length; x++) {
          if (pluszLeiro[x].atadas == this.#adatok[0].atadas) {
            for (let y = 0; y < pluszLeiro[x].plusz_adatok.length; y++) {
              txt += this.#inputok(hanyadik, y, pluszLeiro[x].plusz_adatok);
              hanyadik++;
            }
          }
        }
      } else {
        txt += this.#inputok(hanyadik, index, this.#leiro);
        hanyadik++;
      }
    }
    txt += "</div>";
    txt +=
      "<button class='btn btn-success' id='ment' type='button'>Mentés</button>";
    this.#szuloElem.append(txt);
    this.#mentesGomb = this.#szuloElem.children("#ment");
  }

  #inputok(hanyadik, index, leiro) {
    let txt = "";
    console.log(this.#ujAdat)
    switch (leiro[index].tipus) {
      case "text":
        this.#ujAdat[hanyadik] = new Modosit_Text(
          leiro[index],
          this.#adatok[0],
          leiro[index].key
        );
        txt += this.#ujAdat[hanyadik].getTxt();
        break;
        case "extended_text":
        this.#ujAdat[hanyadik] = new Modosit_extended_Text(
          leiro[index],
          this.#adatok[0],
          leiro[index].key
        );
        txt += this.#ujAdat[hanyadik].getTxt();
        break;
      case "select":
        this.#ujAdat[hanyadik] = new Select_Modosit(
            leiro[index].key,
            leiro[index].megjelenes,
          );
        if (leiro[index].url == "nincs") {
            this.#ujAdat[hanyadik].selectLetrehozo(leiro[index].valaszto, this.#adatok);
            txt +=   this.#ujAdat[hanyadik].getTxt();
            txt += this.#ujAdat[hanyadik].selectLezaro();
         } else{
            const dataService = new DataService();
            this.#ujAdat[hanyadik].selectLetrehozo(
            leiro[index].valaszto, this.#adatok);
            this.#ujAdat[hanyadik].getSelectElem()
          
          txt +=   this.#ujAdat[hanyadik].getTxt();
          txt += this.#ujAdat[hanyadik].selectLezaro();
          dataService.getDataKereso(
            leiro[index].url,
            this.#selectUrlLetrehozo,
            this.#ujAdat[hanyadik].getSelectElem(),
            this.#ujAdat[hanyadik]
          );
          $(window).on("selectURL", (event) => {
            this.#ujAdat[hanyadik] = event.detail;
            console.log(this.#ujAdat[hanyadik].getValue());
          });
            }
        break;
    }
    return txt;
  }

  #selectUrlLetrehozo(adat, selectElem, obj){
    console.log(adat)
    obj.selectLetrehozoUrl(adat)
  }
/*
  #inputValaszto(index) {
    let txt = "";
    switch (this.#leiro[index].tipus) {
      case "text":
        this.#inputok[index] = new HozzaAd_Text(
          this.#leiro[index],
          this.#leiro[index].key
        );
        txt += this.#inputok[index].getTxt();
        break;
      case "select":
        console.log(this.#leiro[index].key);
        this.#inputok[index] = new HozzaAd_Select(
          this.#leiro[index].key,
          this.#leiro[index].megjelenes
        );
        this.#inputok[index].setValue("");
        const selectElem = this.#inputok[index].getSelectElem();
        console.log(selectElem);
        if (this.#leiro[index].url == "nincs") {
          this.#inputok[index].selectLetrehozo(this.#leiro[index].valaszto);
          txt += this.#inputok[index].getTxt();
          txt += this.#inputok[index].selectLezaro();
        } else {
          const dataService = new DataService();
          this.#inputok[index].selectLetrehozo(
            this.#leiro[index].valaszto,
            this.#inputok[index].getSelectElem()
          );
          txt += this.#inputok[index].getTxt();
          txt += this.#inputok[index].selectLezaro();
          dataService.getDataKereso(
            this.#leiro[index].url,
            this.#selectUrlLetrehozo,
            this.#inputok[index].getSelectElem(),
            this.#inputok[index]
          );
          $(window).on("selectURL", (event) => {
            this.#inputok[index] = event.detail;
            console.log(this.#inputok[index].getValue());
          });
        }
        break;
    }
    return txt;
  }
*/
  #kattintas() {
    this.#mentesGomb.on("click", () => {
      const adatHalmaz = [];
      adatHalmaz.push(this.#id);
      new Adat_Modosit(
        this.#ujAdat,
        $(".modal-content").attr("id"),
        this.#adatok,
        this.#id
      );
    });
    $(".close").on("click", () => {
      $(".modal").remove();
    });
  }

  #esemenyTrigger(esemenyNev) {
    console.log(this.#ujAdat);
    //    const E = new CustomEvent(esemenyNev, { detail: [this.#ujAdat, this.#felhasznalo_email, this.#gyerek_taj] });
    //    window.dispatchEvent(E);
  }
}

export default Modosit_mezo;

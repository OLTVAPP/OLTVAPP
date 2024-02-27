import GyerekView from "./adatbazisView/GyerekView.js";
import OltasView from "./adatbazisView/OltasView.js";
import OrvosView from "./adatbazisView/OrvosView.js";
import OltasRegisztracioView from "./adatbazisView/OltasRegisztracioView.js";

class Kozpont {

  #adatok;
  #divElem;
  #tablak = [];

  constructor(adatok, szuloElem, osztaly) {
    this.#adatok = adatok;
    szuloElem.append("<div>");
    this.#divElem = szuloElem.children("div:last-child");
    this.#divElem.addClass(osztaly);
    //______________________________________________
    //MODAL MINTA, NYUGODTAN HASZNÁLJÁTOK!!!
    //this.oltasFelvetel();

  }

  megjelenitGyerek() {
    this.#divElem.empty();
    for (const key in this.#adatok) {
      if (key === 'gyerekek') {
        for (const gyerekKey in this.#adatok[key]) {
          this.#tablak.push(new GyerekView(gyerekKey, this.#adatok[key][gyerekKey], this.#divElem));
        }
      }
    }
  }

  megjelenitOrvos() {
    this.#divElem.empty();
    for (const key in this.#adatok) {
      if (key === 'orvosok') {
        for (const orvosKey in this.#adatok[key]) {
          this.#tablak.push(new OrvosView(orvosKey, this.#adatok[key][orvosKey], this.#divElem));
        }
      }
    }

  }

  megjelenitOltas() {
    this.#divElem.empty();
    for (const key in this.#adatok) {
      if (key === 'oltasok') {
        for (const oltasKey in this.#adatok[key]) {
          this.#tablak.push(new OltasView(oltasKey, this.#adatok[key][oltasKey], this.#divElem));
        }
      }
    }
  }

  megjelenitIdopont(){
    const oltasRegisztracioView = new OltasRegisztracioView(this.#divElem);
    $("#oltasRegisztracioBtn").click(function () {
      let betegNeve = $("#betegNeve").val();
      let idopont = $("#idopont").val();
      let valasztas = $("#valasztasiLista").val();
  
      oltasRegisztracioView.regisztracioFelvetel(betegNeve, idopont, valasztas);
    });
  }
  
  //______________________________________________
  //MODAL MINTA, NYUGODTAN HASZNÁLJÁTOK!!!
  
  /*oltasFelvetel() {
    const self = this;
    let txt = `
    <button id="openModalBtn" class="profilGomb" >Oltás kérelem</button>
    <div id="myModal" class="modal">
        <div class="modal-content">
            <span class="close">&times;</span>
            <p>Választható oltások:</p>
    <select id="valasztasiLista">
        <option value="opcio1">Bárányhimlő</option>
        <option value="opcio2">Covid</option>
        <option value="opcio3">Halrudi elleni oltás</option>
        <option value="opcio4">Hipilisz</option>
    </select>
            <label for="fname">Beteg neve:</label>
            <input type="text" id="fname" name="fname">
            <label for="fname">Esetleges időpont:</label>
            <input type="date" id="fname" name="fname">
            <button id="oltasRegisztracioBtn">Regisztrálok az oltásra</button>
        </div>
    </div>
    `

    self.#divElem.append(txt);

    $(document).ready(function () {

      $("#openModalBtn").click(function () {
        $("#myModal").css("display", "block");
      });
    
      $(".close").click(function () {
        $("#myModal").css("display", "none");
      });
    
      $("#myModal").on("click", function (event) {
        if (event.target === $("#myModal")[0]) {
          $("#myModal").css("display", "none");
        }
      });
    
      self.megjelenitIdopont();
    });
  }*/
//______________________________________________
}
export default Kozpont;

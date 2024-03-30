import TextInput from "../input/Text.js";
import EmailInput from "../input/Email.js";
import NumberInput from "../input/Number.js";
import DateInput from "../input/Date.js";
import TextArea from "../input/TextArea.js";

class UrlapView {
  #szuloElem;
  #adatElem;
  #gyerekAdatElem;
  #gyerekLakcimElem;
  #leiro;
  #urlapElemLista = [];
  #osszesElemValidE = true;
  #adatok = {};
  #email;

  constructor(szuloElem, leiro) {
    this.#szuloElem = szuloElem;
    this.#leiro = leiro;
    this.#letrehozz();
  }

  #letrehozz() {
    this.#szuloElem.append('<div class="container mt-10" id="adatok">');
    this.#adatElem = this.#szuloElem.children("#adatok");
    this.#adatElem.append("<h2>Szülő adat</h2>");
    this.#szulo();
    this.#adatElem.append('<div class="container mt-10 border border-dark p-4" id="gyerekAdat">');
    this.#gyerekAdatElem = this.#adatElem.children("#gyerekAdat");
    this.#gyerekAdatElem.append("<h2>Gyerek adatok</h2>");
    this.#gyerek();
    this.#gyerekAdatElem.append('<div class="container mt-10 border border-dark p-4" id="gyerekLakcim">');
    this.#gyerekLakcimElem = this.#gyerekAdatElem.children("#gyerekLakcim");
    this.#gyerekLakcimElem.append("<h2>Lakcim adatok</h2>");
    this.#gyerekLakcim();
    this.#szuloElem.append('<button class="btn btn-success" id="kuld">Mentés</button>');
    this.#adatFeltolt();
  }

  #szulo() {
    for (const key in this.#leiro.szulo_adatok) {
      this.#urlapElemLista.push(
        new EmailInput(key, this.#leiro.szulo_adatok[key], this.#adatElem, "")
      );
    }
    this.#adatElem.append("<br>");
  }

  #gyerek() {
    for (const key in this.#leiro.gyerek_adatok.szemelyes_adatok) {
      switch (this.#leiro.gyerek_adatok.szemelyes_adatok[key].tipus) {
        case "text":
          this.#urlapElemLista.push(
            new TextInput(
              key,
              this.#leiro.gyerek_adatok.szemelyes_adatok[key],
              this.#gyerekAdatElem, ""
            )
          );
          break;
        case "number":
          this.#urlapElemLista.push(
            new NumberInput(
              key,
              this.#leiro.gyerek_adatok.szemelyes_adatok[key],
              this.#gyerekAdatElem, ""
            )
          );
          break;
        case "date":
          const today = new Date();
          const year = today.getFullYear();
          const oldyear = today.getFullYear() - 18;
          const month = String(today.getMonth() + 1).padStart(2, '0');
          const day = String(today.getDate()).padStart(2, '0');
          const maxDatum = year + '-' + month + '-' + day;
          const minDatum = oldyear + '-' + month + '-' + day;
          this.#urlapElemLista.push(
            new DateInput(
              key,
              this.#leiro.gyerek_adatok.szemelyes_adatok[key],
              this.#gyerekAdatElem, maxDatum, minDatum
            )
          );
          break;
        case "textarea":
          this.#urlapElemLista.push(
            new TextArea(
              key,
              this.#leiro.gyerek_adatok.szemelyes_adatok[key],
              this.#gyerekAdatElem, ""
            )
          );
          break;
        default:
      }
    }
    this.#gyerekAdatElem.append("<br>");
  }
  #gyerekLakcim() {
    for (const key in this.#leiro.gyerek_adatok.lakcim) {
      switch (this.#leiro.gyerek_adatok.lakcim[key].tipus) {
        case "text":
          this.#urlapElemLista.push(
            new TextInput(
              key,
              this.#leiro.gyerek_adatok.lakcim[key],
              this.#gyerekLakcimElem, ""
            )
          );
          break;
        case "number":
          this.#urlapElemLista.push(
            new NumberInput(
              key,
              this.#leiro.gyerek_adatok.lakcim[key],
              this.#gyerekLakcimElem, ""
            )
          );
          break;
        default:
      }
    }
  }

  #adatFeltolt() {
    this.submitElem = $("#kuld");
    this.submitElem.on("click", (event) => {
      event.preventDefault();
      this.#osszesElemValidE = true;
      this.#urlapElemLista.forEach(elem => {
        this.#osszesElemValidE = this.#osszesElemValidE && elem.valid;
      })
      if (this.#osszesElemValidE) {
        this.#urlapElemLista.forEach((elem) => {
          if (elem.key === "email") {
            this.#email = elem.value;
          } else {
            this.#adatok[elem.key] = elem.value;
            console.log(this.#adatok)
          }
        })
        this.#esemenyTrigger("ujBeteg");
      } else {
        console.log("Nem valid az űrlap");
      }
    });
  }

  #esemenyTrigger(esemenyNev) {
    const E = new CustomEvent(esemenyNev, { detail: [this.#adatok, this.#email] });
    window.dispatchEvent(E);
  }

}

export default UrlapView;

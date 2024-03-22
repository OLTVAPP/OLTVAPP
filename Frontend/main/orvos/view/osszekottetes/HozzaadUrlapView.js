import TextInput from "./input/Text.js";
import EmailInput from "./input/Email.js";
import NumberInput from "./input/Number.js";
import DateInput from "./input/Date.js";
import TextArea from "./input/TextArea.js";

class UrlapView {
  #szuloElem;
  #adatElem;
  #gyerekAdatElem;
  #gyerekLakcimElem;
  #leiro;
  #urlapElemLista = [];

  constructor(szuloElem, leiro) {
    this.#szuloElem = szuloElem;
    this.#leiro = leiro;
    this.#letrehozz();
  }

  #letrehozz() {
    this.#szuloElem.append('<div class="container mt-10 px-3" id="adatok">');
    this.#adatElem = this.#szuloElem.children("#adatok");
    this.#adatElem.append("<h2>Szülő adat</h2>");
    this.Szulo();
    this.#adatElem.append('<div class="container mt-10 border border-dark px-3" id="gyerekAdat">');
    this.#gyerekAdatElem = this.#adatElem.children("#gyerekAdat");
    this.#gyerekAdatElem.append("<h2>Gyerek adatok</h2>");
    this.gyerek();
    this.#gyerekAdatElem.append('<div class="container mt-10 border border-dark px-3" id="gyerekLakcim">');
    this.#gyerekLakcimElem = this.#gyerekAdatElem.children("#gyerekLakcim");
    this.#gyerekLakcimElem.append("<h2>Lakcim adatok</h2>");
    this.gyerekLakcim();
    this.#szuloElem.append('<button class="btn btn-success" id="kuld">Mentés</button>');
  }

  Szulo() {
    for (const key in this.#leiro.szulo_adatok) {
      this.#urlapElemLista.push(
        new EmailInput(key, this.#leiro.szulo_adatok[key], this.#adatElem)
      );
    }
  }

  gyerek() {
    for (const key in this.#leiro.gyerek_adatok.szemelyes_adatok) {
      switch (this.#leiro.gyerek_adatok.szemelyes_adatok[key].tipus) {
        case "text":
          this.#urlapElemLista.push(
            new TextInput(
              key,
              this.#leiro.gyerek_adatok.szemelyes_adatok[key],
              this.#gyerekAdatElem
            )
          );
          break;
        case "number":
          this.#urlapElemLista.push(
            new NumberInput(
              key,
              this.#leiro.gyerek_adatok.szemelyes_adatok[key],
              this.#gyerekAdatElem
            )
          );
          break;
        case "date":
          this.#urlapElemLista.push(
            new DateInput(
              key,
              this.#leiro.gyerek_adatok.szemelyes_adatok[key],
              this.#gyerekAdatElem
            )
          );
          break;
          case "textarea":
            this.#urlapElemLista.push(
              new TextArea(
                key,
                this.#leiro.gyerek_adatok.szemelyes_adatok[key],
                this.#gyerekAdatElem
              )
            );
            break;
        default:
      }
    }
  }
  gyerekLakcim() {
    for (const key in this.#leiro.gyerek_adatok.lakcim) {
      switch (this.#leiro.gyerek_adatok.lakcim[key].tipus) {
        case "text":
          this.#urlapElemLista.push(
            new TextInput(
              key,
              this.#leiro.gyerek_adatok.lakcim[key],
              this.#gyerekLakcimElem
            )
          );
          break;
        case "number":
          this.#urlapElemLista.push(
            new NumberInput(
              key,
              this.#leiro.gyerek_adatok.lakcim[key],
              this.#gyerekLakcimElem
            )
          );
          break;
        default:
      }
    }
  }
}

export default UrlapView;

import GyerekView from "./adatbazisView/GyerekView.js";
import OltasView from "./adatbazisView/OltasView.js";
import OrvosView from "./adatbazisView/OrvosView.js";
import OltasRegisztracioView from "./adatbazisView/OltasRegisztracioView.js";

class Kozpont {
  constructor(szuloElem, osztaly) {
      this.szuloElem = szuloElem;
      this.osztaly = osztaly;
  }

  megjelenitGyerek(data) {
      this.szuloElem.empty();
      for (const key in data) {
          if (key === 'gyerekek') {
              for (const gyerekKey in data[key]) {
                  this.osztaly.push(new GyerekView(gyerekKey, data[key][gyerekKey], this.szuloElem));
              }
          }
      }
  }

  megjelenitOrvos(data) {
      this.szuloElem.empty();
      for (const key in data) {
          if (key === 'orvosok') {
              for (const orvosKey in data[key]) {
                  this.osztaly.push(new OrvosView(orvosKey, data[key][orvosKey], this.szuloElem));
              }
          }
      }
  }

  megjelenitOltas(data) {
      this.szuloElem.empty();
      for (const key in data) {
          if (key === 'oltasok') {
              for (const oltasKey in data[key]) {
                  this.osztaly.push(new OltasView(oltasKey, data[key][oltasKey], this.szuloElem));
              }
          }
      }
  }
}

export default Kozpont;

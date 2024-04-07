import GyerekView from "./adatbazisView/GyerekView.js";
import OltasView from "./adatbazisView/OltasView.js";
import OrvosView from "./adatbazisView/OrvosView.js";
//import OltasRegisztracioView from "./adatbazisView/OltasRegisztracioView.js";

class Kozpont {
    constructor(szuloElem, osztaly) {
        this.szuloElem = szuloElem;
        this.osztaly = osztaly;
    }

    megjelenitGyerek(data) {
        this.szuloElem.empty();
        for (const key in data) {
            console.log("Létrehozom a GyerekView-t a gyerek kulcsok alapján:", key);
            this.osztaly.push(new GyerekView(key, data[key], this.szuloElem));
        }
    }

    megjelenitOrvos(data) {

        this.szuloElem.empty();
        for (const key in data) {
            console.log("Létrehozom az OrvosView-t az orvos kulcs alapján:", key);
            this.osztaly.push(new OrvosView(key, data[key], this.szuloElem));
        }
    }

    megjelenitOltas(data) {
        this.szuloElem.empty();
        for (const key in data) {
            console.log("Létrehozom az OltasView-t az oktás kulcs alapján:", key);
            this.osztaly.push(new OltasView(key, data[key], this.szuloElem));
        }
    }
}

export default Kozpont;

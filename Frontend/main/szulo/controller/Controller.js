import Kozpont from "../view/Kozpont.js";
import adatbazisModell from "../modell/adatbazisModell.js";
import DataService from "../modell/DataService.js";

class Controller {
    constructor() {
        this.dataService = new DataService();
        this.adatbazisModell = new adatbazisModell();
        this.kozpont = new Kozpont($("#article"), $("#tablak"));
        this.megjelenitAdatok('gyerek'); // Példa: Elsőnek a gyerekek adatait jelenítsük meg
    }

    megjelenitAdatok(adatTipus) {
        if (adatTipus === 'gyerek') {
            this.getGyerekAdatok();
        } else if (adatTipus === 'orvos') {
            this.getOrvosAdatok();
        } else if (adatTipus === 'oltas') {
            this.getOltasAdatok();
        } else {
            console.log('Ismeretlen adat típus');
        }
    }

    getGyerekAdatok() {
        this.dataService.getAxiosData(
            "http://localhost:8000/api/gyerek",
            (data) => {
                this.kozpont.megjelenitGyerek(data);
            },
            this.adatbazisModell.getLeiro()
        );
    }

    getOrvosAdatok() {
        this.dataService.getAxiosData(
            "http://localhost:8000/api/orvos",
            (data) => {
                this.kozpont.megjelenitOrvos(data);
            },
            this.adatbazisModell.getLeiro()
        );
    }

    getOltasAdatok() {
        this.dataService.getAxiosData(
            "http://localhost:8000/api/oltas",
            (data) => {
                this.kozpont.megjelenitOltas(data);
            },
            this.adatbazisModell.getLeiro()
        );
    }

}

export default Controller;

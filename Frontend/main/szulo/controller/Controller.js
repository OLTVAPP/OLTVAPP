import Kozpont from "../view/Kozpont.js";
import adatbazisModell from "../modell/adatbazisModell.js";
import DataService from "../modell/DataService.js";
import Gombok from "../view/Gombok.js";

class Controller {
    constructor() {
        this.dataService = new DataService();
        this.adatbazisModell = new adatbazisModell();
        this.kozpont = new Kozpont($("#article"), $("#tablak"));
        this.gombok = new Gombok(this.adatbazisModell.getGleiro(), $(".tablaNevek"));
        this.megjelenitAdatok();
    }

    megjelenitAdatok() {
        switch (this.adatbazisModell.getGleiro()) {
            case 'Gyerek':
                this.getGyerekAdatok();
                break;
            case 'Orvos':
                this.getOrvosAdatok();
                break;
            case 'Oltás':
                this.getOltasAdatok();
                break;
            default:
                console.log('Ismeretlen adat típus');
                break;
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

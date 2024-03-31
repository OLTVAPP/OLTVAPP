import Kozpont from "../view/Kozpont.js";
import adatbazisModell from "../modell/adatbazisModell.js";
import DataService from "../modell/DataService.js";
import Gombok from "../view/Gombok.js";

class Controller {
    constructor() {
        this.dataService = new DataService();
        this.adatbazisModell = new adatbazisModell();
        this.kozpont = new Kozpont($("article"), $(".tablak"));
        this.gombok = new Gombok(this.adatbazisModell.getGleiro(), $(".tablaNevek"));
        this.megjelenitAdatok();
    }

    megjelenitAdatok() {
        // Gombok eseménykezelője
        $(".tablaNevek").on("click", ".gombCimkek", (event) => {
            const gombIndex = $(event.currentTarget).data('index'); // A gomb indexének lekérése a data attribútum alapján
            const valasztottGomb = this.adatbazisModell.getGleiro()[gombIndex]; // A kiválasztott gomb nevének lekérése
            switch (valasztottGomb) {
                case 'Gyerek':
                    this.getGyerekAdatok();
                    console.log("Gyerek adatok megjelenítése");
                    break;
                case 'Orvos':
                    this.getOrvosAdatok();
                    console.log("Orvos adatok megjelenítése");
                    break;
                case 'Oltás':
                    this.getOltasAdatok();
                    console.log("Oltás adatok megjelenítése");
                    break;
                default:
                    console.log('Ismeretlen adat típus');
                    break;
            }
        });
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

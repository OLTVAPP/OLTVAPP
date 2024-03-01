import Kozpont from "../view/Kozpont.js";
import adatbazisModell from "../modell/adatbazisModell.js";
import Gombok from "../view/Gombok.js";
import DataService from "../modell/DataService.js";


class Controller {
    #adatbazisModell;
    #dataService;

    constructor() {
        this.#dataService = new DataService();
        this.#adatbazisModell = new adatbazisModell();
        this.megjelenit();

    }


    megjelenit() {
        const gombok = new Gombok(this.#adatbazisModell.getGleiro(), $(".tablaNevek"));
        const kozpont = new Kozpont($("article"), $(".tablak"));

        gombok.gombokKezelese((index) => {
            if (index === 0) {
                this.getGyerek();
            } else if (index === 1) {
                this.getOrvos();
            } else if (index === 2) {
                this.getOltas();
            } else {
                console.log("Ismeretlen gomb");
            }
        });
    }

    getOltas() {
        const self = this;
        $(".gombCimkek2").click((event) => {
            event.preventDefault(); 
            self.#dataService.getAxiosData(
                "http://localhost:8000/api/oltas",
                (data) => {
                    const kozpont = new Kozpont(data, $("article"), $("tablak"));
                    kozpont.megjelenitOltas();
                },
                self.#adatbazisModell.getLeiro()
            );
        });
    }


    getGyerek() {
        this.#dataService.getAxiosData(
            "http://localhost:8000/api/gyerek",
            (data) => {
                const kozpont = new Kozpont(data, $("article"), $("tablak"));
                kozpont.megjelenitGyerek();

            },
            this.#adatbazisModell.getLeiro()
        );
    }

    getOrvos() {
        this.#dataService.getAxiosData(
            "http://localhost:8000/api/orvos",
            (data) => {
                const kozpont = new Kozpont(data, $("article"), $("tablak"));
                kozpont.megjelenitOrvos();

            },
            this.#adatbazisModell.getLeiro()
        );
    }
}

export default Controller;

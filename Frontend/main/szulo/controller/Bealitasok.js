import UrlapView from "../view/BealitasokUrlapView.js";
import adatbazisModell from "../modell/adatbazisModell.js";
import DataService from "../modell/DataService.js";

class Bealitasok {

    #adatbazismodell;
    #dataService;
    #id;

    constructor() {
        this.#adatbazismodell = new adatbazisModell();
        this.#dataService = new DataService();

        this.#megjelenitSzulo();
        this.#profilModositas();
    }

    megjelenit(list, leiro) {
        console.log(list, leiro)
        new UrlapView($("article"), list, leiro);
    }


    #megjelenitSzulo() {
        this.#id = localStorage.getItem("felhasznalo");
        this.#dataService.getAxiosData(`http://localhost:8000/api/szulo/${this.#id}`, this.megjelenit, this.#adatbazismodell.getProfil())
    }

    #profilModositas() {
        $(window).on("szuloModosit", (event) => {
            console.log(event.detail)
            this.#dataService.patchData2(`http://localhost:8000/api/szulo_modosit/${this.#id}`, event.detail)
        });
    }
}

export default Bealitasok;
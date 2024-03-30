import UrlapView from "../view/bealitasok/BealitasokUrlapView.js";
import UrlapModell from "../modell/Modell.js";
import DataService from "../modell/data.js";

class Bealitasok {

    #urlapModell;
    #dataService;
    #id;

    constructor() {
        this.#urlapModell = new UrlapModell();
        this.#dataService = new DataService();

        this.#megjelenitOrvos();
        this.#profilModositas();
    }

    megjelenit(list, leiro) {
        console.log(list, leiro)
        new UrlapView($("article"), list, leiro);
    }


    #megjelenitOrvos() {
        this.#id = localStorage.getItem("felhasznalo");
        this.#dataService.getAxiosData(`http://localhost:8000/api/orvos/${this.#id}`, this.megjelenit, this.#urlapModell.getProfilModositas())
    }

    #profilModositas() {
        $(window).on("orvosModosit", (event) => {
            console.log(event.detail)
            this.#dataService.patchData2(`http://localhost:8000/api/orvos_modosit/${this.#id}`, event.detail)
        });
    }
}

export default Bealitasok;
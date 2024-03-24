import UrlapView from "../view/osszekottetes/HozzaadUrlapView.js";
import UrlapModell from "../modell/Modell.js";
import DataService from "../modell/data.js";

class Hozzaad {

    #urlapModell;
    #dataService;
    #id;

    constructor() {
        this.#urlapModell = new UrlapModell();
        this.#dataService = new DataService();
        this.#megjelenit();
        this.#ujBeteg();
        this.#id = localStorage.getItem("felhasznalo");

    }

    #megjelenit(){
        new UrlapView($("article"), this.#urlapModell.getUjBeteg());
    }

    #ujBeteg(){
        $(window).on("ujBeteg", (event) => {
            console.log(event.detail[0])
            this.#dataService.postData(`http://localhost:8000/api/uj_beteg/${this.#id}/${event.detail[1]}`, event.detail[0])
        });
    }
}

export default Hozzaad;
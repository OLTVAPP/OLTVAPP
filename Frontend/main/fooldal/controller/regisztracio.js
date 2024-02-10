import UrlapView from "../view/UrlapView.js";
import UrlapModell from "../modell/UrlapModell.js";
import DataService from "../modell/DataService.js";


class Controller {

    #urlapModell
    #dataService

    constructor() {
        this.#dataService = new DataService();
        this.#urlapModell = new UrlapModell();
        this.megjelenit();
        this.post();

    }

    megjelenit() {
        new UrlapView($("article"), this.#urlapModell.getLeiro());
    }

    post() {
        $(window).on("felhasznalo", (event) => {
            this.#dataService.postData(
                "http://localhost:8000/api/felhasznalo",
                event.detail
            );
        });
        $(window).on("szulo", (event) => {
            this.#dataService.postAxiosData(
                "http://localhost:8000/api/szulo",
                event.detail
            );
        });
    }
}

export default Controller;
import UrlapView from "../view/RegisztracioUrlapView.js";
import UrlapModell from "../modell/UrlapModell.js";
import DataService from "../modell/data.js";

class Controller {
  #urlapModell;
  #dataService;

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
    $(window).on("regisztracio", (event) => {
      this.#dataService.postData(
        "http://localhost:8000/register",
        event.detail
      );
    });
  }
}

export default Controller;

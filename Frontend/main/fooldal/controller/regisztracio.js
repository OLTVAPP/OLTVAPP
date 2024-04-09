import UrlapView from "../view/RegisztracioUrlapView.js";
import UrlapModell from "../modell/UrlapModell.js";
import DataService from "../modell/data.js";

class Controller {
  #urlapModell;
  #dataService;

  constructor() {
    this.#dataService = new DataService();
    this.#urlapModell = new UrlapModell();
    this.#ellenorzes();
    this.post();
  }

  megjelenit(list, leiro) {
    console.log(list)
    new UrlapView($("article"), leiro, list);
  }

  post() {
    $(window).on("regisztracio", (event) => {
      this.#dataService.postData("http://localhost:8000/register", event.detail);
    });
  }

  #ellenorzes() {
    this.#dataService.getAxiosData("http://localhost:8000/api/felhasznalo_szulo_adatok", this.megjelenit, this.#urlapModell.getLeiro());
  }
}

export default Controller;

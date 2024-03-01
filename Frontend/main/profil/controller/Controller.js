import ProfilModell from "../modell/ProfilModell.js";
import Gombok from "../view/Gombok.js";
import TombInput from "../view/tombInput.js";

class Controller {
  #profilModell;

  constructor() {
    this.#profilModell = new ProfilModell();
    this.megjelenit();
    this.setupListeners();
  }

  megjelenit() {
    new TombInput(this.#profilModell.getInputok(), $("article"), $("profilElemek"));
    new Gombok(this.#profilModell.getGombok(), $("article"), $("profilGombok"));
  }

  setupListeners() {
    const gombok = this.#profilModell.getGombok();
    const tombInput = new TombInput(this.#profilModell.getInputok(), $("article"), $("profilElemek"));

    gombok.forEach((gomb, index) => {
      if (gomb === "Jelszó megvátoztatása") {
        // Eseménykezelő hozzáadása a jelszó megváltoztatása gombhoz
        $(".gombCimkek").eq(index).on("click", () => {
          tombInput.showPasswordInputs();
        });
      } else if (gomb === "Saját adatok változtatása") {
        // Eseménykezelő hozzáadása a saját adatok változtatása gombhoz
        $(".gombCimkek").eq(index).on("click", () => {
          tombInput.showTextInput();
        });
      }
    });
  }
}

export default Controller;

import DataService from "../modell/data.js";
import Tabla from "../view/tabla/tabla.js";

class Tabla_controller {
  #dataService = new DataService();
  urlBelovaso(url, fejlec) {
    console.log(url);
    this.#dataService.getDataTabla(url, fejlec, this.tabla, this.hiba);
  }

  urlBeolvasoErtek(url, fejlec, ertek) {
    url = url + "/" + ertek;
    this.#dataService.getDataTabla(url, fejlec, this.tabla, this.hiba);
  }
  tabla(obj, fejLec) {
    console.log(obj);
    new Tabla(obj, fejLec);
  }
  hiba(obj) {}
}
export default Tabla_controller;

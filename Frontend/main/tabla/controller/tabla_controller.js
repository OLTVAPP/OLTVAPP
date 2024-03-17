import DataService from "../modell/data.js";
import Tabla from "../view/tabla/tabla.js";

class Tabla_controller {
  #dataService = new DataService();

  constructor(url, fejlec){
    this.#dataService.getDataTabla(url, fejlec, this.tabla);
  }

  

 
  tabla(obj, fejLec) {
    new Tabla(obj, fejLec);
  }
  
}
export default Tabla_controller;

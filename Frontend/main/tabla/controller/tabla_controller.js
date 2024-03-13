import DataService from "../modell/data.js";
import Tabla from "../view/tabla.js";


class Tabla_controller{
    constructor(url, fejlec){
        const felhasznalo = localStorage.getItem("felhasznalo");
        console.log(felhasznalo);
       const dataService = new DataService();   
       dataService.getData(url, fejlec, this.tabla, this.hiba);
    }


    tabla(obj, fejLec){
        console.log(obj);
        new Tabla(obj, fejLec);
    }

    hiba(obj){

    }



}
export default Tabla_controller;
import DataService from "../../fooldal/modell/data.js";
import { fejlec_admin_felhasznalo } from "../modell/adatLeiro.js";
import Tabla from "../view/tabla.js";

class Tabla_controller{
    constructor(url){
        const felhasznalo = localStorage.getItem("felhasznalo");
        console.log(felhasznalo);
       const dataService = new DataService();
      
       dataService.getData(url, this.tabla, this.hiba);




    }


    tabla(obj){
        console.log(obj);
        new Tabla(obj,fejlec_admin_felhasznalo);
    }

    hiba(obj){

    }



}
export default Tabla_controller;
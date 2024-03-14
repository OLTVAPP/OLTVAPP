import { felhasznalo_szuro, felhasznalo_szuro_proba } from "../modell/szuroLeiro.js";
import Szurok from "../view/szuro/szurok.js";

class Szuro_controller{

    constructor(){
        console.log("hello");
      
        new Szurok(   felhasznalo_szuro, $("#tabla_szuro"));

        
    }




}

export default Szuro_controller;
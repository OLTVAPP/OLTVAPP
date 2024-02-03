import { bejelentKezesLeiro, bejelentKezesElfelejtLeiro } from "../model/adatLeiro.js"
import TombInput from "../view/tombInput.js";
class Bejelentkezes{

    constructor(){
        const adatLeiro = bejelentKezesLeiro;
        const articleElem = $("article");
        for (const tomb in adatLeiro) {
            console.log(adatLeiro[tomb])
            new TombInput(adatLeiro[tomb], articleElem, tomb);
        }
      
        



    }



}
export default Bejelentkezes
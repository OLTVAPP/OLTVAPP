import {
  bejelentKezesLeiro,
  bejelentKezesElfelejtLeiro,
} from "../model/adatLeiro.js";
import TombInput from "../view/tombInput.js";
class Bejelentkezes {
  constructor() {
    const adatLeiro = bejelentKezesLeiro;
    $("article").append("<form>");
    const formElem = $("article").children("form:last-child");
    for (const tomb in adatLeiro) {
      console.log(adatLeiro[tomb]);
      new TombInput(adatLeiro[tomb], formElem, tomb);
    }
  }
}
export default Bejelentkezes;

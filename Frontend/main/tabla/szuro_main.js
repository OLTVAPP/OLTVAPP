import Szuro_controller from "./controller/szuro_controller.js";
import { felhasznalo_szuro } from "./modell/szuroLeiro.js";
$(function () {
  //new Tabla_main($("table").attr("id"))

  new Szuro_main($(".szuro").attr("id"));
});
class Szuro_main {
  constructor(szuro_id) {
    let szuroAdatok;
    console.log(szuro_id);
    switch (szuro_id) {
      case "felhasznalo_szuro":
        szuroAdatok = felhasznalo_szuro;
        break;
    }
    new Szuro_controller(szuroAdatok, $(`#${szuro_id}`));
  }
}
export default Szuro_main;

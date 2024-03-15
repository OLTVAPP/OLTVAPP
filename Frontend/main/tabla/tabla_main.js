import Tabla_controller from "./controller/tabla_controller.js";
import DataService from "./modell/data.js";
import {
  fejlec_admin_felhasznalo,
  fejlec_felhasznalo,
  fejlec_orvos_felhasznalo,
  fejlec_szulo_felhasznalo,
} from "./modell/fejlecLeiro.js";
$(function () {
  const tabla = new Tabla_main();
  tabla.alapTablak($("table").attr("id"));
});
class Tabla_main {
  alapTablak(tabla) {
    let tablaAdatUrl;
    let fejlec;
    switch (tabla) {
      case "admin_felhaszhnalok":
        tablaAdatUrl = "http://localhost:8000/api/felhasznalo_admin";
        fejlec = fejlec_admin_felhasznalo;
        break;
      case "orvos_felhasznalok":
        tablaAdatUrl = "http://localhost:8000/api/felhasznalo_orvos";
        fejlec = fejlec_orvos_felhasznalo;
        break;
      case "szulo_felhasznalok":
        tablaAdatUrl = "http://localhost:8000/api/felhasznalok";
        fejlec = fejlec_felhasznalo;
        break;
      default:
        break;
    }
    const tabla_controller = new Tabla_controller(fejlec);
    console.log(tablaAdatUrl);
    tabla_controller.urlBelovaso(tablaAdatUrl, fejlec);
  }

  keresoTabla(tabla, adatok) {
    let tablaAdatUrl;
    let fejlec;
    switch (tabla) {
      case "szulo_felhasznalok":
        tablaAdatUrl = `http://localhost:8000/api/felhasznalok_search`;
        fejlec = fejlec_felhasznalo;
        break;
    }
    let queryString = this.#szuroErtekAtadas(fejlec, adatok);
    tablaAdatUrl = tablaAdatUrl + "?" + queryString;
    console.log(tablaAdatUrl);
    const data = new DataService();
    const tabla_controller = new Tabla_controller(fejlec);
    tabla_controller.urlBeolvasoErtek(tablaAdatUrl, fejlec);
  }

 

  #szuroErtekAtadas(kulcsok, adatok) {
    let kiiras = "";
    let hanyadik = 0;
    for (const key in kulcsok) {
      if (adatok[hanyadik] == "") {
        kiiras = kiiras + key;
      } else {
        kiiras = kiiras + key + "=" + adatok[hanyadik];
      }
      if (hanyadik < adatok.length-1){
      kiiras = kiiras + "&";
      }
      hanyadik = hanyadik + 1;
    }
    return kiiras;
  }

}
export default Tabla_main;

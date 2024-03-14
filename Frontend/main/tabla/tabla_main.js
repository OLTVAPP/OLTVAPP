import Tabla_controller from "./controller/tabla_controller.js";
import { fejlec_admin_felhasznalo, fejlec_felhasznalo, fejlec_orvos_felhasznalo, fejlec_szulo_felhasznalo} from "./modell/fejlecLeiro.js";
$(function () {
  new Tabla_main($("table").attr("id"))
});
class Tabla_main{
  constructor(tabla){
    let tablaAdatUrl;
    let fejlec;
    switch (tabla) {
      case "admin_felhaszhnalok":
        tablaAdatUrl = "http://localhost:8000/api/felhasznalo_admin";
        fejlec = fejlec_admin_felhasznalo
        break;
      case "orvos_felhaszhnalok":
        tablaAdatUrl = "http://localhost:8000/api/felhasznalo_orvos";
        fejlec = fejlec_orvos_felhasznalo
        break;
      case "szulo_felhaszhnalok":
        tablaAdatUrl = "http://localhost:8000/api/felhasznalok";
        fejlec = fejlec_felhasznalo
        break;
      default:
        break;
    }
    new Tabla_controller(tablaAdatUrl, fejlec);
  }
}
export default Tabla_main



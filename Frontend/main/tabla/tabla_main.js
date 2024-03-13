import Tabla_controller from "./controller/tabla_controller.js";
import { fejlec_admin_felhasznalo, fejlec_orvos_felhasznalo, fejlec_szulo_felhasznalo} from "./modell/adatLeiro.js";

$(function () {
  //  localStorage.setItem("tabla", objektum.id);
  let tablaAdatUrl;
  let fejlec;
  const tabla = $("table").attr("id");
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
      tablaAdatUrl = "http://localhost:8000/api/felhasznalo_szulo";
      fejlec = fejlec_szulo_felhasznalo
      break;

    default:
      break;
  }
  console.log(fejlec)
  new Tabla_controller(tablaAdatUrl, fejlec);
});

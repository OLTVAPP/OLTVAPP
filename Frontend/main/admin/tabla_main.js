import Tabla_controller from "./controller/tabla_controller.js";

$(function () {
  //  localStorage.setItem("tabla", objektum.id);
  let tablaAdatUrl = "";
  const tabla = $("table").attr("id");
  switch (tabla) {
    case "admin_felhaszhnalok":
        tablaAdatUrl = "http://localhost:8000/api/felhasznalo_admin"
      break;
    case "orvos_felhaszhnalok":
        tablaAdatUrl = "http://localhost:8000/api/felhasznalo_orvos"
      break;
    case "szulo_felhaszhnalok":
        tablaAdatUrl = "http://localhost:8000/api/felhasznalo_szulo"
      break;

    default:
      break;
  }
  new Tabla_controller(tablaAdatUrl);
});

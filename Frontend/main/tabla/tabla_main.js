import Tabla_controller from "./controller/tabla_controller.js";
import DataService from "./modell/data.js";
import {
  fejlec_admin_felhasznalo,
  fejlec_felhasznalo,
  fejlec_orvos_felhasznalo,
  fejlec_szulo_felhasznalo,
} from "./modell/fejlecLeiro.js";
$(function () {
  const tabla = new Tabla_main($("table").attr("id"));
  tabla.tabla_futtato();
});
class Tabla_main {
  #fejLecek;
  #tablaAdatUrl;
  constructor(tabla) {
    // Itt választja ki a table elem id-ja alapján, hogy milyen url és fejléc adatokat kapjon a két privát érték.
    switch (tabla) {
      case "admin_felhaszhnalok":
        this.#tablaAdatUrl = "http://localhost:8000/api/felhasznalo_admin";
        this.#fejLecek = fejlec_admin_felhasznalo;
        break;
      case "orvos_felhasznalok":
        this.#tablaAdatUrl = "http://localhost:8000/api/felhasznalo_orvos";
        this.#fejLecek = fejlec_orvos_felhasznalo;
        break;
      case "osszes_felhasznalo":
        this.#tablaAdatUrl = "http://localhost:8000/api/felhasznalok_search";
        this.#fejLecek = fejlec_felhasznalo;
        break;
      default:
        break;
    }
  }

  tabla_futtato() {
   new Tabla_controller(this.#tablaAdatUrl, this.#fejLecek);
  }

  keresoTabla(adatok) {
    // Itt kötöm össze az url-t az ertekekkel, amikre szürni szeretne a program
    let queryString = this.#szuroErtekAtadas(adatok);
    this.#tablaAdatUrl = this.#tablaAdatUrl + queryString;
    console.log(this.#tablaAdatUrl)
    this.tabla_futtato();
  }

  #szuroErtekAtadas(adatok) {
    // Itt adja meg az url-nek a szüréshez szükséges kiirást
    let kiiras = "?";
    let hanyadik = 0;
    for (const key in this.#fejLecek) {
      if (adatok[hanyadik] == "") {
        kiiras = kiiras + key;
      } else {
        kiiras = kiiras + key + "=" + adatok[hanyadik];
      }
      if (hanyadik < adatok.length - 1) {
        kiiras = kiiras + "&";
      }
      hanyadik = hanyadik + 1;
    }
    return kiiras;
  }

  
}
export default Tabla_main;

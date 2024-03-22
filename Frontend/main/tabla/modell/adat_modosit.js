import DataService from "./data.js";

class Adat_Modosit {
    #tablaAdatUrl;
    #fejLecek
    #data = new DataService()
    constructor(adatok, idElem, fejLecek) {
        this.#fejLecek = fejLecek;
        switch (idElem) {
            case "felhasznalo_A":
                console.log("admin")
                this.#tablaAdatUrl = `http://localhost:8000/api/felhasznalo`;
                let queryString = this.#szuroErtekAtadas(adatok);
                this.#tablaAdatUrl = this.#tablaAdatUrl + queryString;
                this.#data.putData(this.#tablaAdatUrl, this.#fejLecek.id, queryString)
                break;
            case "felhasznalo_S":
                console.log("szulo")

                break;
            case "felhasznalo_O":
                console.log("orvos")

                break;

            default:
                break;
        }
      


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
export default Adat_Modosit;
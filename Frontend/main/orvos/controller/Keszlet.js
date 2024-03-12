import DataService from "../modell/data.js";
import UrlapModell from "../modell/Modell.js";
import KeszletView from "../view/keszlet/KeszletView.js";
class Keszlet{
    #urlapModell;
    #dataService;
    #id;
    constructor(){
        this.#urlapModell = new UrlapModell();
        this.#dataService = new DataService();
        this.#get();
        this.#semmisitettAdat();
        this.#visszaAdat();
        console.log("asd")
    }

    megjelenitKeszlet(list, leiro, logikaiErtek){
        new KeszletView($("article"), list, leiro, logikaiErtek)
    }

    #get() {
        this.#id = localStorage.getItem("felhasznalo_id");
        this.#dataService.getAxiosData2(`http://localhost:8000/api/keszlet/${this.#id}`, this.megjelenitKeszlet, this.#urlapModell.getKeszletLeiro(), false
        );
      }

    #semmisitettAdat(){
        $(window).on("semmisitett", (event) => {
            this.#dataService.getAxiosData2(`http://localhost:8000/api/megsemmisitett_keszlet/${this.#id}`, this.megjelenitKeszlet, this.#urlapModell.getKeszletLeiro(), true)
            $("article").empty()
          });
    }
    #visszaAdat(){
        $(window).on("vissza", (event) => {
            $("article").empty()
            this.#get();
          });
    }
}

export default Keszlet;
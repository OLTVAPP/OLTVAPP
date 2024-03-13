import DataService from "../modell/data.js";
import UrlapModell from "../modell/Modell.js";
import KeszletView from "../view/keszlet/KeszletView.js";
import UjKeszlet from "../view/keszlet/UjKeszlet.js";
class Keszlet {
    #urlapModell;
    #dataService;
    #id;
    constructor() {
        this.#urlapModell = new UrlapModell();
        this.#dataService = new DataService();
        this.#get();
        this.#semmisitettAdat();
        this.#visszaAdat();
        this.#ujMegsemmisites();
        this.#oltasNev();
        this.#ujKeszlet();
    }

    megjelenitKeszlet(list, leiro, logikaiErtek) {
        new KeszletView($("article"), list, leiro, logikaiErtek)
    }

    megjelenitUjKeszlet(vakcinaNev, leiro) {
        new UjKeszlet($(".modal-content"), leiro, vakcinaNev)
    }

    #get() {
        this.#id = localStorage.getItem("felhasznalo_id");
        this.#dataService.getAxiosData2(`http://localhost:8000/api/keszlet/${this.#id}`, this.megjelenitKeszlet, this.#urlapModell.getKeszletLeiro(), false
        );
    }

    #semmisitettAdat() {
        $(window).on("semmisitett", (event) => {
            this.#dataService.getAxiosData2(`http://localhost:8000/api/megsemmisitett_keszlet/${this.#id}`, this.megjelenitKeszlet, this.#urlapModell.getKeszletLeiro(), true)
            $("article").empty()
        });
    }
    #visszaAdat() {
        $(window).on("vissza", (event) => {
            $("article").empty()
            this.#get();
        });
    }

    #ujMegsemmisites() {
        $(window).on("ujMegsemmisites", (event) => {
            this.#dataService.patchData(`http://localhost:8000/api/keszlet_megsemmisitese/${event.detail}`)
        });
    }

    #oltasNev() {
        $(window).on("oltasNev", (event) => {
            this.#dataService.getAxiosData(`http://localhost:8000/api/oltas_nev/`, this.megjelenitUjKeszlet, event.detail)
        });
    }

    #ujKeszlet() {
        $(window).on("ujKeszlet", (event) => {
            console.log(event.detail[0])
            this.#dataService.postData(`http://localhost:8000/api/uj_keszlet/${this.#id}/${event.detail[1]}`, event.detail[0])
        });
    }
}

export default Keszlet;
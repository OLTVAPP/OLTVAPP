import { admin_hozzAd } from "../modell/hozzaAd_leiro.js";
import HozzaAd_view from "../view/hozzaAd/hozzaAd_view.js";

class HozzaAd_Controller{
    #divElem
    #adatLeiro = []
    #cimke
    constructor(divId, divElem){
        this.#divElem = divElem
        switch (divId) {
            case "admin_hozaAd":
              this.#adatLeiro = admin_hozzAd;
            this.#cimke = "Új felhasználó hozzáadása"
                break;
        
            default:
                break;
        }

        console.log(this.#adatLeiro)
        this.#divElem.append(`<button class='ujAdat'>${this.#cimke}</button>`)
        const button = this.#divElem.children(".ujAdat:last-child")
        button.on("click", () =>{
            let txt = "";
            txt +=`<div class="modal" id="felhasznalo_atadAs">
            <div class="modal-content">
            </div>
            </div>`
            $("article").append(txt);
            $(".modal").css("display", "block");
          new  HozzaAd_view($(".modal-content"), this.#adatLeiro)
        })









    }





}
export default HozzaAd_Controller;
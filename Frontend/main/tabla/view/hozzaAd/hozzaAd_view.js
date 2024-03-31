import Adat_hozaAd from "../../modell/adat_hozzaAdd.js";
import DataService from "../../modell/data.js";
import HozzaAd_Select from "./inputok/hozzaAd_select.js";
import HozzaAd_Text from "./inputok/hozzaAd_text.js";

class HozzaAd_view{
    #szuloElem
    #leiro
    #esemenyGomb
    #inputok = []
    #input

    constructor(szuloElem, leiro) {
        this.#szuloElem = szuloElem;
        this.#leiro = leiro;
        this.#sor();
        for (let index = 0; index < this.#inputok.length; index++) {
            this.#inputok[index].kiirasModsito();
        }
        this.#kattintas()
      
    }

    #sor() {
        let hanyadik = 0;
        let txt = '<span class="close">&times;</span>';
        txt += '<div class="mb-3">';
        for (let index = 0; index < this.#leiro.length; index++) {
          txt += this.#inputValaszto(index)
        }
        txt += "</div>"
        txt += "<button class='btn btn-success' id='add' type='button'>Új adat hozzáadása</button>"
        this.#szuloElem.append(txt);
        this.#esemenyGomb = this.#szuloElem.children("#add");
    }

    #kattintas() {
        this.#esemenyGomb.on("click", () => {
           for (let index = 0; index < this.#leiro.length; index++) {
            console.log(this.#inputok[index].getValue())
                this.#leiro[index].value = this.#inputok[index].getValue();
            }
            console.log(this.#leiro)
            new Adat_hozaAd(this.#leiro, $(".modal-content").attr('id'));
        });
        $(".close").on("click", () => {
            $(".modal").remove();
        });
    }

    #inputValaszto(index){
        let txt = "";
        switch (this.#leiro[index].tipus) {
            case "text":
                this.#inputok[index] = new HozzaAd_Text(this.#leiro[index], this.#leiro[index].key);
                txt += this.#inputok[index].getTxt();
            break;
          case "select":
            console.log(this.#leiro[index].key)
            this.#inputok[index] = new HozzaAd_Select(this.#leiro[index].key, this.#leiro[index].megjelenes);
            this.#inputok[index].setValue("");
            const selectElem = this.#inputok[index].getSelectElem();
            console.log(selectElem)
            if(this.#leiro[index].url == "nincs"){
                this.#inputok[index].selectLetrehozo(this.#leiro[index].valaszto);
                txt += this.#inputok[index].getTxt();
                txt += this.#inputok[index].selectLezaro();
            } else{ 
              const dataService = new DataService();
              this.#inputok[index].selectLetrehozo(this.#leiro[index].valaszto, this.#inputok[index].getSelectElem());
              txt += this.#inputok[index].getTxt();
              txt += this.#inputok[index].selectLezaro();
              dataService.getDataKereso(this.#leiro[index].url, this.#selectUrlLetrehozo,  this.#inputok[index].getSelectElem(), this.#inputok[index]);  
              $(window).on("selectURL", (event) => {
                this.#inputok[index] = event.detail
                console.log(this.#inputok[index].getValue())
              });
            }
            break;
    }
    return txt;
    }

    #selectUrlLetrehozo(adat, selectElem, obj){
        console.log(adat)
        obj. selectLetrehozoUrl(adat)
      }



}
export default HozzaAd_view
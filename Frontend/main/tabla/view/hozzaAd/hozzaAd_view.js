import Adat_hozaAd from "../../modell/adat_hozzaAdd.js";
import HozzaAd_Text from "./hozzaAd_text.js";

class HozzaAd_view{
    #szuloElem
    #leiro
    #esemenyGomb
    #inputok = []

    constructor(szuloElem, leiro) {
        this.#szuloElem = szuloElem;
        this.#leiro = leiro;
        this.#sor()
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
          this.#inputok[index] = new HozzaAd_Text(this.#leiro[index], this.#leiro[index].key);
            txt += this.#inputok[index].getTxt();
        }
        txt += "</div>"
        txt += "<button class='btn btn-success' id='add' type='button'>Új adat hozzáadása</button>"
        this.#szuloElem.append(txt);
        this.#esemenyGomb = this.#szuloElem.children("#add");
    }

    #kattintas() {
        this.#esemenyGomb.on("click", () => {
           for (let index = 0; index < this.#leiro.length; index++) {
                this.#leiro[index].value = this.#inputok[index].getValue();
            }
            console.log(this.#leiro)
            new Adat_hozaAd(this.#leiro, $(".modal-content").attr('id'));
        });
        $(".close").on("click", () => {
            $(".modal").remove();
        });
    }


    


}
export default HozzaAd_view
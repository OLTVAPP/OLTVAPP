import HozzaAd_Text from "./hozzaAd_text.js";

class HozzaAd_view{
    #szuloElem
    #leiro
    #mentesGomb
    #keszlet_adat = {};
    constructor(szuloElem, leiro) {
        this.#szuloElem = szuloElem;
        this.#leiro = leiro;
        this.#sor()
        this.#kattintas()
      
    }

    #sor() {
        let hanyadik = 0;
        let txt = '<span class="close">&times;</span>';
        txt += '<div class="mb-3">';
        for (let index = 0; index < this.#leiro.length; index++) {
          const input = new HozzaAd_Text(this.#leiro[index], this.#leiro[index].key);
            txt += input.getTxt();
        }


        txt += "</div>"
        txt += "<button class='btn btn-success' id='add' type='button'>Új adat hozzáadása</button>"
        this.#szuloElem.append(txt);
        this.#mentesGomb = this.#szuloElem.children("#add");
    }

    #kattintas() {
        this.#mentesGomb.on("click", () => {
          
        });
        $(".close").on("click", () => {
            $(".modal").remove();
        });
    }


    


}
export default HozzaAd_view
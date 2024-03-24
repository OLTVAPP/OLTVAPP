import Adat_Modosit from "../../modell/adat_modosit.js";
import TextInput from "../szuro/inputok/text.js";
import Modosit_Text from "./modosit_text.js";

class Modosit_mezo {
    #adatok = [];
    #szuloElem;
    #leiro;
    #mentesGomb
    #ujAdat = [];
    #id;
    constructor(szuloElem, adat, leiro) {
        console.log(adat)
        this.#id = adat[0].id
        console.log(this.#id)
        for (const key in adat) {
            this.#adatok.push(adat[key])
        }
        this.#szuloElem = szuloElem;
        this.#leiro = leiro;
        this.#sor();
        console.log(this.#ujAdat)
        for (let index = 0; index < this.#ujAdat.length; index++) {
            this.#ujAdat[index].kiirasModsito();
        }
        this.#kattintas();

    }


    #sor() {
        let hanyadik = 0;
        let txt = '<span class="close">&times;</span>';
        txt += '<div class="mb-3">';
        for (let index = 0; index < this.#leiro.length; index++) {
            if (this.#leiro[index].key == "plusz") {
                const pluszLeiro = this.#leiro[index].pluszAdatok
                for (let x = 0; x < pluszLeiro.length; x++) {
                    if (pluszLeiro[x].atadas == this.#adatok[0].atadas) {
                        for (let y = 0; y < pluszLeiro[x].plusz_adatok.length; y++) {
                           txt += this.#inputok(hanyadik, y, pluszLeiro[x].plusz_adatok);
                            hanyadik++;
                        }
                    }

                }

            }
            else {
                txt += this.#inputok(hanyadik, index, this.#leiro);
                hanyadik++;
            }
        }
        txt += "</div>"
        txt += "<button class='btn btn-success' id='ment' type='button'>Mentés</button>"
        this.#szuloElem.append(txt);
        this.#mentesGomb = this.#szuloElem.children("#ment");
    }


    #inputok(hanyadik, index, leiro) {
        let txt = ""
        console.log(leiro[index])
        this.#ujAdat[hanyadik] = new Modosit_Text(leiro[index], this.#adatok[0], leiro[index].key);
        txt += this.#ujAdat[hanyadik].getTxt();
        return txt;
    }


    #kattintas() {
        this.#mentesGomb.on("click", () => {
            const adatHalmaz = [];
            adatHalmaz.push(this.#id);
            new Adat_Modosit(this.#ujAdat, $(".modal-content").attr('id'), this.#adatok, this.#id);
        });
        $(".close").on("click", () => {
            $(".modal").remove();
        });
    }

    #esemenyTrigger(esemenyNev) {
        console.log(this.#ujAdat)
        //    const E = new CustomEvent(esemenyNev, { detail: [this.#ujAdat, this.#felhasznalo_email, this.#gyerek_taj] });
        //    window.dispatchEvent(E);
    }





}

export default Modosit_mezo;
import KeszletViewSor from "./KeszletViewSor.js";
import UjKeszlet from "./UjKeszlet.js";

class KeszletView{

    #szuloElem;
    #list = [];
    #leiro = [];
    #tablaElem;
    #logikaiErtek
    #semmisitettGomb
    #visszaGomb
    #ujVakcina
    #ujKeszletleiro = {};

    constructor(szuloElem, list, leiro, logikaiErtek){
        this.#logikaiErtek = logikaiErtek
        this.#leiro = leiro;
        this.#list = list;
        this.#szuloElem = szuloElem;
        if(this.#logikaiErtek === false){
            this.#szuloElem.append("<button class='btn btn-primary' id='semmisitett' type='button'>Megsemmisített vakcinák</button>")
            this.#szuloElem.append("<button class='btn btn-primary' id='ujvakcina' type='button'>Új vakcina hozzáadása</button>")
        }
        else{
            this.#szuloElem.append("<button class='btn btn-primary' id='vissza' type='button'>Vissza</button>")
        }

        this.#semmisitettGomb = this.#szuloElem.children("#semmisitett");
        this.#visszaGomb = this.#szuloElem.children("#vissza");
        this.#ujVakcina = this.#szuloElem.children("#ujvakcina");
        this.#szuloElem.append(`<table class="table table-hover">`);
        this.#tablaElem = this.#szuloElem.children("table");
        this.#sor();
        this.#tablazatbaIr();
        this.#kattintas();
        this.#modal();
    }

    #modal(){
        let txt = "";
        txt +=
            `
        <div class="modal3">
        <div class="modal-content3">
        <span class="close">&times;</span>
        </div>
        </div>
        `
        this.#szuloElem.append(txt);
        this.#esemenyTrigger("oltasNev")
        this.#ujVakcina.on("click", () => {
            $(".modal3").css("display", "block");
        });
        $(".close").on("click", () => {
            $(".modal3").css("display", "none");
        });
    }

    #sor() {
        let txt = "<thead>";
        txt += "<tr>";
        let i = 0;
        for (const key in this.#leiro) {
            if(this.#logikaiErtek === false){
                if(i >= 1 & i <= 3){
                    this.#ujKeszletleiro[key] = this.#leiro[key]
                }
                if(i < 5){
                    txt += `<th>${this.#leiro[key].megjelenes}</th>`;
                }
            }
            else{
                txt += `<th>${this.#leiro[key].megjelenes}</th>`;
            }

            i++;
        }
        if(this.#logikaiErtek === false){
            txt += `<th>Megsemmisítés</th>`;
        }
        txt += "</tr>";
        txt += "</thead>"
        this.#tablaElem.append(txt);
    }

    #tablazatbaIr() {
        let i = 0;
        for (const key in this.#list) {
            new KeszletViewSor(this.#list[key], this.#tablaElem, i, this.#logikaiErtek, this.#szuloElem);
            i++;
        }

    }

    #kattintas() {
        this.#semmisitettGomb.on("click", () => {
            this.#esemenyTrigger("semmisitett")
        });
        this.#visszaGomb.on("click", () => {
            this.#esemenyTrigger("vissza")
        });
      }

      #esemenyTrigger(esemenyNev){
        const e = new CustomEvent(esemenyNev, { detail: this.#ujKeszletleiro });
        window.dispatchEvent(e);
      }

}

export default KeszletView;
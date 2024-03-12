import KeszletViewSor from "./KeszletViewSor.js";

class KeszletView{

    #szuloElem;
    #list = [];
    #leiro = [];
    #tablaElem;
    #logikaiErtek
    #semmisitettGomb
    #visszaGomb

    constructor(szuloElem, list, leiro, logikaiErtek){
        this.#logikaiErtek = logikaiErtek
        this.#leiro = leiro;
        this.#list = list;
        this.#szuloElem = szuloElem;
        if(this.#logikaiErtek === false){
            this.#szuloElem.append("<button class='semmisitett' type='button'>Megsemmisitett vakcinák</button>")
            this.#szuloElem.append("<button class='vissza' type='button'>Új vakcina hozzáadása</button>")
        }
        else{
            this.#szuloElem.append("<button class='vissza' type='button'>vissza</button>")
        }

        this.#semmisitettGomb = this.#szuloElem.children(".semmisitett");
        this.#visszaGomb = this.#szuloElem.children(".vissza");
        this.#szuloElem.append(`<table>`);
        this.#tablaElem = this.#szuloElem.children("table");
        this.#sor();
        this.#tablazatbaIr();
        this.#kattintas();
    }

    #sor() {
        let txt = "";
        txt += "<tr>";
        let i = 0;
        for (const key in this.#leiro) {
            if(this.#logikaiErtek === false){
                if(i < 4){
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
        this.#tablaElem.append(txt);
    }

    #tablazatbaIr() {
        let i = 0;
        for (const key in this.#list) {
            new KeszletViewSor(this.#list[key], this.#tablaElem, i, this.#logikaiErtek);
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
        const e = new CustomEvent(esemenyNev, { detail: this });
        window.dispatchEvent(e);
      }

}

export default KeszletView;
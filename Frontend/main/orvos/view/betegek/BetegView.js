import BetegViewSor from "./BetegViewSor.js";
import Modosit from "./Modosit.js";
class BetegView {

    #szuloElem;
    #list = [];
    #tablaElem = [];
    #leiro = [];
    #index = 0;
    #cim = [];
    #szulo_email;
    #gyerek_taj;

    constructor(szuloElem, list, leiro) {
        this.#leiro = leiro;
        this.#list = list;
        this.#cim = ["Részletes adatok", "Szülő adatok", "Beadott oltások", "Beadnadó oltások"]

        this.#szuloElem = szuloElem;
        for (let i = 0; i < this.#list.length; i++) {
            this.#szuloElem.append(`<h3>${this.#cim[i]}</h3>`);
            this.#szuloElem.append(`<table class="table table-hover" id=table${i}>`);
            this.#tablaElem.push(szuloElem.children(`#table${i}`));
        }

        const adat = this.#list[0];
        const szulo = this.#list[1];
        const beadott_vakcina = this.#list[2];
        const beadnado_vackina = this.#list[3];
        this.#szulo_email = szulo[0].felhasznalo_email
        this.#gyerek_taj = adat[0].gyerek_taj


        this.#sor(this.#leiro.adatok);
        this.#tablazatbaIr(adat);
        this.#sor(this.#leiro.szulo_adatok);
        this.#tablazatbaIr(szulo);
        this.#sor(this.#leiro.beadott_oltas);
        this.#tablazatbaIr(beadott_vakcina);
        this.#sor(this.#leiro.beadando_oltas);
        this.#tablazatbaIr(beadnado_vackina);
        this.#szuloElem.append("<button class='btn btn-primary' id='vissza' type='button'>Vissza</button>")
        this.#szuloElem.append("<button class='btn btn-primary' id='beadando' type='button'>Új beadnadó oltás</button>")
        const gombElem = this.#szuloElem.children("#vissza");
        gombElem.on("click", () => {
            this.#esemenyTrigger("vissza")
        });
        this.#modal();
    }

    #sor(leiro) {
        let txt = "<thead>";

        txt += "<tr>";
        for (const key in leiro) {
            txt += `<th>${leiro[key].megjelenes}</th>`;
        }
        if (this.#index === 0) {
            txt += `<th>Módosít</th>`;
        }
        txt += "</tr>";
        txt += "</thead>";
        this.#tablaElem[this.#index].append(txt);
    }

    #tablazatbaIr(adat) {
        let i = 0;
        for (const key in adat) {
            new BetegViewSor(adat[key], this.#tablaElem[this.#index], this.#index, this.#szuloElem, this.#leiro.adatok, this.#szulo_email, i);
            i++;
        }
        this.#index++;
    }

    #esemenyTrigger(esemenyNev) {
        const e = new CustomEvent(esemenyNev, { detail: this.#gyerek_taj });
        window.dispatchEvent(e);
    }

    #modal() {
        let txt = "";
        txt +=
            `
        <div class="modal5">
        <div class="modal-content5">
        <span class="close">&times;</span>
        </div>
        </div>
        `
        this.#szuloElem.append(txt);
        this.#esemenyTrigger("oltasTipusNev")
        const gombBeadando = this.#szuloElem.children("#beadando");
        gombBeadando.on("click", () => {
            $(".modal5").css("display", "block");
        })
        $(".close").on("click", () => {
            $(".modal5").css("display", "none");
        });
    }
}

export default BetegView;
import UrlapElem from "./UrlapElem.js";

class UrlapView {

    #szuloElem
    #fElem
    #szElem
    #lElem
    #leiro = {}
    #urlapElemLista = [];
    #osszesElemValidE = true;
    #szuloAdat = {};
    #felhasznaloAdat = {};
    #jelszo

    constructor(szuloElem, leiro) {
        this.#leiro = leiro;
        this.letrehozz(szuloElem);
        this.osszeRak();
        this.adatFeltolt();


    }

    letrehozz(szuloElem) {
        this.#szuloElem = szuloElem;
        this.#szuloElem.append('<div class="fAdat">')
        this.#fElem = this.#szuloElem.children(".fAdat");
        this.#fElem.append('<h2>Felhasznalói adatok</h2>')
        this.#szuloElem.append('<div class="szAdat">')
        this.#szElem = this.#szuloElem.children(".szAdat");
        this.#szElem.append('<div class="lAdat">')
        this.#lElem = this.#szElem.children(".lAdat");
        this.#lElem.append('<h2>Lakcim</h2>')
        this.#szElem.append('<h2>Személyes adatok</h2>')
        this.#szuloElem.append('<button class="kuld">Regisztráció elküldése</button>')
    }

    osszeRak() {
        for (const key in this.#leiro) {
            switch (this.#leiro[key].id) {
                case "fadat":
                    this.#urlapElemLista.push(new UrlapElem(key, this.#leiro[key], this.#fElem))
                    break
                case "fadat2":
                    this.#urlapElemLista.push(new UrlapElem(key, this.#leiro[key], this.#fElem))
                    this.#leiro[key].megjelenes = "Jelszó megerősítése:"
                    this.#jelszo = (new UrlapElem(key + "2", this.#leiro[key], this.#fElem))
                    break
                case "szadat":
                    this.#urlapElemLista.push(new UrlapElem(key, this.#leiro[key], this.#szElem))
                    break
                case "ladat":
                    this.#urlapElemLista.push(new UrlapElem(key, this.#leiro[key], this.#lElem))
                    break
                default:
            }
        }
    }

    adatFeltolt() {
        this.submitElem = $(".kuld");
        this.submitElem.on("click", (event) => {
            event.preventDefault();
            this.#osszesElemValidE = true;
            this.#urlapElemLista.forEach(elem => {
                this.#osszesElemValidE = this.#osszesElemValidE && elem.valid;
            })
            if (this.#osszesElemValidE) {
                this.#urlapElemLista.forEach((elem) => {
                    if(elem.id == "fadat" || elem.id == "fadat2"){
                        this.#felhasznaloAdat[elem.key] = elem.value;
                    }
                    else{
                        this.#szuloAdat[elem.key] = elem.value;
                    }
                })
                if (this.#felhasznaloAdat.jelszo == this.#jelszo.value) {
                    console.log("Valid az űrlap")
                    this.#esemenyTrigger(this.#felhasznaloAdat);
                    this.#esemenyTrigger(this.#szuloAdat);
                }
                else {
                    alert("Nem egyforma a jelszó!")
                }
            } else {
                console.log("Nem valid az űrlap");
            }
        });
    }

    #esemenyTrigger(adat) {
        const E = new CustomEvent("feltolt", { detail: adat });
        window.dispatchEvent(E);
    }

}

export default UrlapView;

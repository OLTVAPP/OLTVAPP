import TextUrlapElem from "./TextUrlapElem.js";
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
    #boolean = false;

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
        for (const key in this.#leiro.felhasznalo) {
            switch (this.#leiro.felhasznalo[key].tipus) {
                case "text":
                    this.#urlapElemLista.push(new TextUrlapElem(key, this.#leiro.felhasznalo[key], this.#fElem))
                    break
                case "email":
                    this.#urlapElemLista.push(new TextUrlapElem(key, this.#leiro.felhasznalo[key], this.#fElem))
                    break
                case "password":
                    this.#urlapElemLista.push(new TextUrlapElem(key, this.#leiro.felhasznalo[key], this.#fElem))
                    this.#leiro.felhasznalo[key].megjelenes = "Jelszó megerősítése:"
                    this.#jelszo = (new TextUrlapElem(key + "2", this.#leiro.felhasznalo[key], this.#fElem))
                    break
                default:
            }
        }
        for (const key in this.#leiro.szulo) {
            switch (this.#leiro.szulo[key].id) {
                case "lakcim":
                    this.#urlapElemLista.push(new TextUrlapElem(key, this.#leiro.szulo[key], this.#lElem))
                    break;
                case "adat":
                    this.#urlapElemLista.push(new TextUrlapElem(key, this.#leiro.szulo[key], this.#szElem))
                    break;
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
                    if (this.#boolean == false) {
                        this.#felhasznaloAdat[this.#leiro.felhasznalo.aktiv.key] = this.#leiro.felhasznalo.aktiv.value;
                        this.#felhasznaloAdat[this.#leiro.felhasznalo.szerepkor.key] = this.#leiro.felhasznalo.szerepkor.value;
                        this.#boolean = true;
                    }
                    if (elem.id == "adat" || elem.id == "lakcim") {
                        this.#szuloAdat[elem.key] = elem.value;
                    }
                    else {
                        this.#felhasznaloAdat[elem.key] = elem.value;
                    }
                })
                if (this.#felhasznaloAdat.jelszo == this.#jelszo.value) {
                    this.#esemenyTrigger("felhasznalo", this.#felhasznaloAdat);
                    this.#esemenyTrigger("szulo", this.#szuloAdat);
                    alert("Sikeres regisztráció!")
                    location.replace("bejelentkezes.html");
                }
                else {
                    alert("Nem egyforma a jelszó!")
                }
            } else {
                console.log("Nem valid az űrlap");
            }
        });
    }

    #esemenyTrigger(esemenyNev, adat) {
        const E = new CustomEvent(esemenyNev, { detail: adat });
        window.dispatchEvent(E);
    }

}

export default UrlapView;

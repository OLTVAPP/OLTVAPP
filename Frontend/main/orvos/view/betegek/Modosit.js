import TextInput from "../input/Text.js";
import EmailInput from "../input/Email.js";
import NumberInput from "../input/Number.js";
import DateInput from "../input/Date.js";
import TextArea from "../input/TextArea.js";

class Modosit {
    #adat = [];
    #szuloElem;
    #leiro;
    #ujAdat = {};
    #felhasznalo_email
    #gyerek_taj

    #urlapElemLista = [];
    #osszesElemValidE = true;

    constructor(szuloElem, adat, leiro, felhasznalo_email) {
        console.log(leiro)
        for (const key in adat) {
            if (adat.gyerek_taj != null) {
                this.#gyerek_taj = adat.gyerek_taj
            }
            this.#adat.push(adat[key])
        }
        this.#szuloElem = szuloElem;
        this.#leiro = leiro;
        this.#felhasznalo_email = felhasznalo_email
        this.#sor();
        this.#kattintas();
    }

    #sor() {
        let i = 0;
        let txt = '<span class="close">&times;</span>';
        this.#szuloElem.append(txt);
        txt = "";
        txt += '<div class="mb-3">';
        for (let key in this.#leiro) {
            switch (this.#leiro[key].tipus) {
                case "text":
                    this.#urlapElemLista.push(
                        new TextInput(
                            key,
                            this.#leiro[key],
                            this.#szuloElem, this.#adat[i]
                        )
                    );
                    break;
                case "number":
                    this.#urlapElemLista.push(
                        new NumberInput(
                            key,
                            this.#leiro[key],
                            this.#szuloElem, this.#adat[i]
                        )
                    );
                    break;
                case "date":
                    this.#urlapElemLista.push(
                        new DateInput(
                            key,
                            this.#leiro[key],
                            this.#szuloElem, this.#adat[i]
                        )
                    );
                    break;
                case "textarea":
                    this.#urlapElemLista.push(
                        new TextArea(
                            key,
                            this.#leiro[key],
                            this.#szuloElem, this.#adat[i]
                        )
                    );
                    break;
                default:
            }
            i++;
        }
        txt += "</div>"
        txt += "<button class='btn btn-success' id='ment' type='button'>Mentés</button>"
        this.#szuloElem.append(txt);
    }

    #kattintas() {
        const mentesGomb = this.#szuloElem.children("#ment");
        mentesGomb.on("click", (event) => {
            event.preventDefault();
            this.#osszesElemValidE = false;
            let elemValid = true;
            this.#urlapElemLista.forEach(elem => {
                if (elem.key != "erzekenyseg") {
                    if (elem.value !== '') {
                        if (elem.valid === true && elemValid === true) {
                            this.#osszesElemValidE = true;
                        } else {
                            this.#osszesElemValidE = false;
                            elemValid = false;
                        }
                    }
                }
            })
            if (this.#osszesElemValidE) {
                let i = 0;
                this.#urlapElemLista.forEach((elem) => {
                    if (elem.value === "" || elem.value === null) {
                        this.#ujAdat[elem.key] = this.#adat[i]
                    } else {
                        this.#ujAdat[elem.key] = elem.value;
                    }
                    i++;
                })
                this.#esemenyTrigger("modositBeteg")
            } else {
                console.log("Nem valid az űrlap");
            }
        });
        $(".close").on("click", () => {
            $(".modal").remove();
        });
    }

    #esemenyTrigger(esemenyNev) {
        console.log(this.#ujAdat)
        const E = new CustomEvent(esemenyNev, { detail: [this.#ujAdat, this.#felhasznalo_email, this.#gyerek_taj] });
        window.dispatchEvent(E);
    }
}

export default Modosit;
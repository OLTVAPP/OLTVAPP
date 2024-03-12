class Modosit {
    #adat = [];
    #szuloElem;
    #leiro;
    #mentesGomb
    #ujAdat = {};
    #felhasznalo_email
    #gyerek_taj
    constructor(szuloElem, adat, leiro, felhasznalo_email) {
        for (const key in adat) {
            if(adat.gyerek_taj != null){
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
        let txt = '<div class="mb-3">';
        for (let key in this.#leiro) {
            txt += `<label class=cim for='fname'>${this.#leiro[key].megjelenes}</label>`

            txt += `<input class="form-control" type=${this.#leiro[key].tipus} id=${key} name="fname" placeholder=${this.#adat[i]}>`;
            i++;
        }
        txt += "</div>"
        txt += "<button class='ment' type='button'>Mentés</button>"
        this.#szuloElem.append(txt);
        this.#mentesGomb = this.#szuloElem.children(".ment");
    }

    #kattintas() {
        this.#mentesGomb.on("click", () => {
            let i = 0;
            for (let key in this.#leiro) {
                if ($(`#${key}`).val()) {
                    this.#ujAdat[key] = $(`#${key}`).val()
                }else{
                    this.#ujAdat[key] = this.#adat[i]
                }
                i++;
            }
            this.#esemenyTrigger("modositBeteg")
        });

    }

    #esemenyTrigger(esemenyNev){
        console.log("asd")
        const E = new CustomEvent(esemenyNev, { detail: [this.#ujAdat, this.#felhasznalo_email, this.#gyerek_taj] });
        window.dispatchEvent(E);
    }
}

export default Modosit;
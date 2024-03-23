class Modosit {
   #id;
   #tabla
    constructor(id, tabla) {
        this.#id = id;
        this.#tabla = tabla
       
       
      //  this.#sor();
      //  this.#kattintas();
    }
/*
    #sor() {
        let i = 0;
        let txt = '<span class="close">&times;</span>';
        txt += '<div class="mb-3">';
        for (let key in this.#leiro) {
            txt += `<label class=cim for='fname'>${this.#leiro[key].megjelenes}</label>`

            txt += `<input class="form-control" type=${this.#leiro[key].tipus} id=${key} name="fname" placeholder=${this.#adat[i]}>`;
            i++;
        }
        txt += "</div>"
        txt += "<button class='btn btn-success' id='ment' type='button'>Mentés</button>"
        this.#szuloElem.append(txt);
        this.#mentesGomb = this.#szuloElem.children("#ment");
    }

    #kattintas() {
        this.#mentesGomb.on("click", () => {
            let i = 0;
            for (let key in this.#leiro) {
                if ($(`#${key}`).val()) {
                    this.#ujAdat[key] = $(`#${key}`).val()
                } else {
                    this.#ujAdat[key] = this.#adat[i]
                }
                i++;
            }
            this.#esemenyTrigger("modositBeteg")
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
    */
}

export default Modosit;
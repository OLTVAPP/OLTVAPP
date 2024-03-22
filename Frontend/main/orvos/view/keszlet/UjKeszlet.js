class UjKeszlet {
    #szuloElem
    #leiro
    #mentesGomb
    #vakcinaAdat
    #oltas_id
    #keszlet_adat = {};
    constructor(szuloElem, leiro, vakcinaAdat) {
        this.#szuloElem = szuloElem;
        this.#leiro = leiro;
        this.#vakcinaAdat = vakcinaAdat;
        console.log(vakcinaAdat)
        this.#select();
        this.#sor();
        this.#kattintas();
    }

    #select() {
        let txt = "<label for='oltas'>Válassz oltást: </label>"
        txt += '<select name="oltas" id="oltas">'
        txt += `<option>-- oltasok --</option>`
        for (let key in this.#vakcinaAdat) {
            txt += `<option value=${this.#vakcinaAdat[key].oltas_id}>${this.#vakcinaAdat[key].oltoanyag_neve}</option>`
        }
        txt += "</select>"
        txt += "<br><br>"

        this.#szuloElem.append(txt);
    }

    #sor() {
        let i = 0;
        let txt = '<div class="mb-3">';
        for (let key in this.#leiro) {
            txt += `<label class=cim for='fname'>${this.#leiro[key].megjelenes}</label>`

            txt += `<input class="form-control" type=${this.#leiro[key].tipus} id=${key} name="fname">`;
            i++;
        }
        txt += "</div>"
        txt += "<button class='btn btn-success' id='ment' type='button'>Mentés</button>"
        this.#szuloElem.append(txt);
        this.#mentesGomb = this.#szuloElem.children("#ment");
    }

    #kattintas() {
        this.#mentesGomb.on("click", () => {
            this.#oltas_id = $("#oltas option:selected").val()
            for (let key in this.#leiro) {
                this.#keszlet_adat[key] = $(`#${key}`).val()
            }
            console.log(this.#keszlet_adat)
            this.#esemenyTrigger("ujKeszlet")
        });
    }

    #esemenyTrigger(esemenyNev) {
        const E = new CustomEvent(esemenyNev, { detail: [this.#keszlet_adat, this.#oltas_id] });
        window.dispatchEvent(E);
    }
}

export default UjKeszlet;
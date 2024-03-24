class UjBeadott{
    #szuloElem
    #list
    #leiro
    #beadando_id
    #mentesGomb;
    #beszerzes_id;
    #beadas_adat = {};
    #oltas_id;

    constructor(szuloElem, list, leiro, beadando_id){
        this.#szuloElem = szuloElem
        this.#list = list;
        this.#leiro = leiro;
        this.#beadando_id = beadando_id;
        this.#select();
        this.#sor();
        this.#kattintas();
    }

    #select(){
        let txt = "<label for='oltas'>Válassz készletett: </label>"
        txt += '<select name="oltas" id="oltas">'
        txt += `<option>oltás neve | darab | beszerzés dátuma | lejárati dátuma</option>`
        for (let key in this.#list) {
            txt += `<option data-values=${this.#list[key].oltas_id},${this.#list[key].beszerzes_id}>${this.#list[key].oltoanyag_neve} | ${this.#list[key].darab} | ${this.#list[key].beszerzes_datuma} | ${this.#list[key].lejarati_datuma}</option>`
        }
        txt += "</select>"
        txt += "<br><br>"
        this.#szuloElem.append(txt);
    }

    #sor(){
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
            const ertekek = $("#oltas option:selected").data("values").split(",");
            this.#oltas_id = ertekek[0];
            this.#beszerzes_id = ertekek[1];
            for (let key in this.#leiro) {
                this.#beadas_adat[key] = $(`#${key}`).val()
            }
            console.log(this.#beadas_adat)
            this.#esemenyTrigger("ujBeadas")
        });
    }

    #esemenyTrigger(esemenyNev){
        const e = new CustomEvent(esemenyNev, { detail: [this.#oltas_id, this.#beadando_id, this.#beadas_adat, this.#beszerzes_id] });
        window.dispatchEvent(e);
    }

}
export default UjBeadott;
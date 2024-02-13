
class OltasView {

    #formElem;
    #key;
    #adatok;

    constructor(key, adatok, szuloElem){
        console.log("Bementem a GyerekView osztályba");
        this.#key = key;
        this.#adatok = adatok;
        this.#formElem = szuloElem;

        this.#tablaAdatai();
    }



    #tablaAdatai() {
        let txt = `<div >
        <ul>
            <li><p for="${this.#key}" class="form-label">Oltás típusa: ${this.#adatok.tipus_id}</p></li>
            <li><p for="${this.#key}" class="form-label">Forgalmazója: ${this.#adatok.forgalmazo_id}</p></li>
            <li><p for="${this.#key}" class="form-label">Jótékony hatásai: ${this.#adatok.jotekony_hatas}</p></li>
            <li><p for="${this.#key}" class="form-label">Mellék Hatásai: ${this.#adatok.mellek_hatas}</p></li>
        </ul>
      </div>`
        this.#formElem.append(txt);
    }

}
export default OltasView;
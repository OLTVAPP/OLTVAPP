
class GyerekView {

    #formElem;
    #key;
    #adatok;

    constructor(key, adatok, szuloElem){
        this.#key = key;
        this.#adatok = adatok;
        this.#formElem = szuloElem;

        this.#tablaAdatai();
    }



    #tablaAdatai() {
        let txt = `<div class="mb-3 mt-3">
        <p for="${this.#key}" class="form-label">${this.#adatok.vez_nev}, ${this.#adatok.ker_nev}, 
        ${this.#adatok.szul_datum}, ${this.#adatok.szul_hely}</p>
      </div>`
        this.#formElem.append(txt);
    }

}
export default GyerekView;

class OrvosView {

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
            <li><p for="${this.#key}" class="form-label">Vez_név: ${this.#adatok.vez_nev}</p></li>
            <li><p for="${this.#key}" class="form-label">Ker_név: ${this.#adatok.ker_nev}</p></li>
            <li><p for="${this.#key}" class="form-label">Telefon szám: ${this.#adatok.tel_szam}</p></li>
            <li><p for="${this.#key}" class="form-label">Publikus email:: ${this.#adatok.publikus_email}</p></li>
        </ul>
      </div>`
        this.#formElem.append(txt);
    }

}
export default OrvosView;
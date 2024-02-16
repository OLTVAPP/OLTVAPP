
class OrvosView {

    #formElem;
    #key;
    #adatok;

    constructor(key, adatok, szuloElem) {
        console.log("Bementem a GyerekView osztályba");
        this.#key = key;
        this.#adatok = adatok;
        this.#formElem = szuloElem;

        this.#tablaAdatai();
    }



    #tablaAdatai() {
        let txt = `<div >
        <table>
            <tr><td>Vez_név:</td><td>${this.#adatok.vez_nev}</td></tr>
            <tr><td>Ker_név:</td><td>${this.#adatok.ker_nev}</td></tr>
            <tr><td>Telefon szám:</td><td>${this.#adatok.tel_szam}</td></tr>
            <tr><td>Publikus email:</td><td>${this.#adatok.publikus_email}</td></tr>
        </table>
      </div>`
        this.#formElem.append(txt);
    }

}
export default OrvosView;
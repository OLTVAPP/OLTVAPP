
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
        let txt = `
        <div class="adatok">
        <h2>${this.#adatok.vez_nev} ${this.#adatok.ker_nev}</h2>
        <table>
        <tbody>
        <tr>
            <td>Születési dátum: ${this.#adatok.tel_szam}</td>
            <td>Születési hely: ${this.#adatok.publikus_email}</td>
        </tr>
        </tbody>
        </table>
      </div>`
        this.#formElem.append(txt);
    }

}
export default OrvosView;
class OrvosView {

    #formElem;
    #key;
    #adatok;

    constructor(key, adatok, szuloElem) {
        console.log("Bementem a OrvosView osztályba"+this.#adatok);
        this.#key = key;
        this.#adatok = adatok;
        this.#formElem = szuloElem;

        this.tablaAdatai();
    }

    tablaAdatai() {
        let txt = `
        <div class="adatok">
        <h2>${this.#adatok.vez_nev} ${this.#adatok.ker_nev}</h2>
        <table>
        <tbody>
        <tr>
            <td>Telefonszám: ${this.#adatok.tel_szam}</td>
            <td>Publikus e-mail: ${this.#adatok.publikus_email}</td>
        </tr>
        </tbody>
        </table>
      </div>`
        this.#formElem.append(txt);
    }
}

export default OrvosView;

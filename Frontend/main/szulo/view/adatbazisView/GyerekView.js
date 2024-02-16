class GyerekView {

    #formElem;
    #key;
    #adatok;

    constructor(key, adatok, szuloElem){
        console.log("Bementem a GyerekView osztályba");
        this.#key = key;
        this.#adatok = adatok;
        this.#formElem = szuloElem;
        this.#formElem.addClass("tablak");
        this.#tablaAdatai();
    }



    #tablaAdatai() {
        let txt = `<div >
        <table>
        <tr>
            <th>Vez_név</th>
            <th>Ker_név</th>
            <th>Szül_dátum</th>
            <th>Szül_hely</th>
        </tr>
        <tr>
            <td>${this.#adatok.vez_nev}</td>
            <td>${this.#adatok.ker_nev}</td>
            <td>${this.#adatok.szul_datum}</td>
            <td>${this.#adatok.szul_hely}</td>
        </tr>
        </table>
      </div>`
        this.#formElem.append(txt);
    }

}
export default GyerekView;
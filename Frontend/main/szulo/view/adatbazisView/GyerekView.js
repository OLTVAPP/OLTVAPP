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
        let txt = `
        
        <div class="adatok">
        <h2>${this.#adatok.vez_nev} ${this.#adatok.ker_nev}</h2>
        <table>
        <tbody>
        <tr>
            <td>Vezeték név: ${this.#adatok.vez_nev}</td>
            <td>Kereszt név: ${this.#adatok.ker_nev}</td>
            <td>Születési dátum: ${this.#adatok.szul_datum}</td>
            <td>Születési hely: ${this.#adatok.szul_hely}</td>
        </tr>
        </tbody>
        </table>
      </div>`
        this.#formElem.append(txt);
    }

}
export default GyerekView;
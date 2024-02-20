
class OltasView {

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
        let txt = `<div class="adatok">
        <h2>${this.#adatok.elnev}</h2>
        <table>
        <tbody>
        <tr>
            <td>Hatásai: ${this.#adatok.jotekony_hatas}</td>
            <td>Mellék hatásai: ${this.#adatok.mellek_hatas}</td>
            <td>Állapot: ${this.#adatok.beadando}</td>
            <td>Kötelező beadni: ${this.#adatok.kotelezo}</td>
      `

      if (this.#adatok.kotelezo === "igen") {
        txt += `
        <td></td>
        </tr>
        </tbody>
        </table>
        </div>`
      }
      else{
        txt += `
        </tr>
        </tbody>
        </table>
        </div>`
      }
        this.#formElem.append(txt);
    }

}
export default OltasView;
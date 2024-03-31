
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
        <h2>${this.#adatok.tipus_id}</h2>
        <table>
        <tbody>
        <tr>
            <td>Neve: ${this.#adatok.oltoanyag_neve}</td>
            <td>Forgalmazza: ${this.#adatok.forgalmazo}</td>
            <td>Leírása: ${this.#adatok.leiras}</td>
            <td>adagolása: ${this.#adatok.adagolas}</td>
            <td>Receptre kapható-e: ${this.#adatok.receptre}</td>
            <td>aktív: ${this.#adatok.aktiv}</td>
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
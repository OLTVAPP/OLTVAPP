
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
        <table>
            <tr><td>Oltás típusa:</td><td>${this.#adatok.tipus_id}</td></tr>
            <tr><td>Forgalmazója:</td><td>${this.#adatok.forgalmazo_id}</td></tr>
            <tr><td>Jótékony hatásai:</td><td>${this.#adatok.jotekony_hatas}</td></tr>
            <tr><td>Mellék Hatásai:</td><td>${this.#adatok.mellek_hatas}</td></tr>
        </table>
      </div>`
        this.#formElem.append(txt);
    }

}
export default OltasView;
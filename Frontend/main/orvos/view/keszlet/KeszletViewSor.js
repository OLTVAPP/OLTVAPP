class KeszletViewSor{
    
    #adat;
    #szuloElem;
    #index;
    #logikaiErtek

    constructor(adat, szuloElem, index, logikaiErtek){
        this.#adat = adat;
        this.#logikaiErtek = logikaiErtek
        this.#szuloElem = szuloElem;
        this.#index = index;
        this.#sor();
    }

    #sor() {
        let txt = "";
        txt += `<tr class=gyerek${this.#index}>`;
        for (let key in this.#adat) {
          txt += `<td>${this.#adat[key]}</td>`;
        }
        if(this.#logikaiErtek === false){
            txt += `<td><span class="reszletek${this.#index}">Megsemmisít</span></td>`;
        }
        txt += "</tr>";
    
        this.#szuloElem.append(txt);
      }
}

export default KeszletViewSor;
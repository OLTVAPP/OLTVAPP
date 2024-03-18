class OltasRegisztracioView {
    #formElem;
    #key;
    #adatok;

    constructor(key, adatok, szuloElem) {
        console.log("Bementem a GyerekView osztályba");
        this.#key = key;
        this.#adatok = adatok || {}; // vagy inicializáld üres objektummal, ha nincs megfelelő érték
        this.#formElem = szuloElem;
        this.#formElem.addClass("tablak");
    }

    regisztracioFelvetel(betegNeve, idopont, valasztas) {
        this.#adatok.betegNeve = betegNeve;
        this.#adatok.idopont = idopont;
        this.#adatok.valasztas = valasztas;
        
        // Új sor létrehozása
        let ujSor = "<div><table><tbody><tr><td>" + betegNeve + "</td><td>" + idopont + "</td><td>" + valasztas + "</td></tr></tbody></table></div>";
        
        // Az adatokat a szülő elemhez adja hozzá
        this.#formElem.append(ujSor);
    
        // A modal bezárása
        $("#myModal").css("display", "none");
    }
    

    
    //______________________________________________
    //MODAL MINTA, NYUGODTAN HASZNÁLJÁTOK!!!
    /*
      #adatok;
      #divElem;
  
      constructor(divElem) {
          console.log("Bementem");
          this.#divElem = divElem;
      }
  
      regisztracioFelvetel(betegNeve, idopont, valasztas) {
          let ujSor = "<tr><td>" + betegNeve + "</td><td>" + idopont + "</td><td>" + valasztas + "</td></tr>";
          
          $("#oltasokTabla tbody").append(ujSor);
          $("#myModal").css("display", "none");
          this.#divElem.append(ujSor);
      }*/
    //______________________________________________
    //MODAL MINTA, NYUGODTAN HASZNÁLJÁTOK!!!
}

export default OltasRegisztracioView;

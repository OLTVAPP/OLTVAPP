class OltasRegisztracioView {
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
    }
}

export default OltasRegisztracioView;

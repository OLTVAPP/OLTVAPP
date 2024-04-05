import Xyoldal from "./adatbazisView/Xyoldal.js";

class Xyegyedul {
    constructor(szuloElem, osztaly) {
        this.szuloElem = szuloElem;
        this.osztaly = osztaly;
    }

    megjelenitXy(data) {
            this.osztaly.push(new Xyoldal(data, this.szuloElem));
        
    }

   
}

export default Xyegyedul;

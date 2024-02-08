class Felhasznalo{
    #id;
    #adatok;
    constructor(id){
      this.setId(id);
    }


    setId(id){
        this.#id = id;
    }

    getId(){
        return this.#id
    }

   



}
export default Felhasznalo
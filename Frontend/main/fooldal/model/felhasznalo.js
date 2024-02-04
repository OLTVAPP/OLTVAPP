class Felhasznalo{
    #id;
    #adatok;
    constructor(){
      
    }


    getId(){
        return this.#id
    }

    setAdatok(adatok){
        console.log("hello")
        console.log(adatok)
        this.#adatok = adatok;
        console.log(this.#adatok)
    }



}
export default Felhasznalo
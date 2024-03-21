import DataService from "../modell/data.js";

class Modosit {
    #id;
    #tabla
     constructor(id, tabla) {
         this.#id = id;
         this.#tabla = tabla;

        
        
       //  this.#sor();
       //  this.#kattintas();
     }

     modositMezoKiiras(){
       return`<td><span class="modosit" id="modosit_${this.#id}">📝</span></td>`;
     }

     modositasParancs(){
        $(`#modosit_${this.#id}`).on("click", () => {
            const data = new DataService();
            let url;
            console.log(this.#id)
            switch (this.#tabla) {
                case "osszes_felhasznalo":
                    url = `http://localhost:8000/api/felhasznalo_szerep/${this.#id}`
                    break;
            
                default:
                    break;
            }
            data.getDataModosit(url, this.#modositAblak)
        /*    let txt = "";
            txt +=
                `
            <div class="modal">
            <div class="modal-content">
            </div>
            </div>
            `
            this.#szuloElem.append(txt);
            $(".modal").css("display", "block");
            console.log(this.#szulo_email)
            new Modosit($(".modal-content"), this.#adat, this.#leiro, this.#szulo_email);*/
          });
        }


        #modositAblak(obj){
            console.log(obj);
            let txt = "";
            txt +=
                `
            <div class="modal">
            <div class="modal-content">
            </div>
            </div>
            `
            $("article").append(txt);
            $(".modal").css("display", "block");



        }


     


 /*
     #sor() {
         let i = 0;
         let txt = '<span class="close">&times;</span>';
         txt += '<div class="mb-3">';
         for (let key in this.#leiro) {
             txt += `<label class=cim for='fname'>${this.#leiro[key].megjelenes}</label>`
 
             txt += `<input class="form-control" type=${this.#leiro[key].tipus} id=${key} name="fname" placeholder=${this.#adat[i]}>`;
             i++;
         }
         txt += "</div>"
         txt += "<button class='btn btn-success' id='ment' type='button'>Mentés</button>"
         this.#szuloElem.append(txt);
         this.#mentesGomb = this.#szuloElem.children("#ment");
     }
 
     */
  /*   #kattintas() {
         $(ZZZZzz).on("click", () => {
             let i = 0;
             for (let key in this.#leiro) {
                 if ($(`#${key}`).val()) {
                     this.#ujAdat[key] = $(`#${key}`).val()
                 } else {
                     this.#ujAdat[key] = this.#adat[i]
                 }
                 i++;
             }
             this.#esemenyTrigger("modositBeteg")
         });
         $(".close").on("click", () => {
             $(".modal").remove();
         });
     }
 
     #esemenyTrigger(esemenyNev) {
         console.log(this.#ujAdat)
         const E = new CustomEvent(esemenyNev, { detail: [this.#ujAdat, this.#felhasznalo_email, this.#gyerek_taj] });
         window.dispatchEvent(E);
     } 
     */
 }
 
 export default Modosit;
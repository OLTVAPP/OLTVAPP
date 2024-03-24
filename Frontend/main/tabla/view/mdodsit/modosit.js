import DataService from "../../modell/data.js";
import { modosit_felhasznalo } from "../../modell/modositLeiro.js";
import Modosit_mezo from "./modosit_mezo.js";

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
            $("article").append(`<div class="modal"></div>`)
            $(".modal").css("display", "block");
            const data = new DataService();
            let url;
            let adatHalamzok;
            console.log(this.#id)
            switch (this.#tabla) {
                case "osszes_felhasznalo":
                    url = `http://localhost:8000/api/felhasznalo_szerep/${this.#id}`;
                   adatHalamzok = modosit_felhasznalo;
                    break;
            
                default:
                    break;
            }
            data.getDataTabla(url, adatHalamzok, this.#modositAblak)
          });
        }


        #modositAblak(obj, leiro){
            console.log(obj)
            let txt =`<div class="modal-content" id="felhasznalo_${obj[0].atadas}>grgeg</div>`;
            console.log(obj[0].atadas)
            $(".modal").append(`<div class="modal-content" id="felhasznalo_${obj[0].atadas}"></div>`);
            
            new Modosit_mezo($(".modal-content"), obj, leiro);
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
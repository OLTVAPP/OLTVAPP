import Bejelentkezes from "./controller/bejelentkezes.js";
import ElfelejtettJelszo from "./controller/elfelejtettJelszo.js";

$(function(){
    console.log("hello")
    const articleElem = $("article");
    new Bejelentkezes(articleElem);
    new ElfelejtettJelszo(articleElem);




});
import Regisztracio from "./controller/regisztracio.js";
import Bejelentkezes from "./controller/bejelentkezes.js";
import ElfelejtettJelszo from "./controller/elfelejtettJelszo.js";

$(function () {
    
    let header = $('header');
    let title = header.find('h1');
    let message = title.text();
    const articleElem = $("article");
    if (message === "Regisztráció") {
        new Regisztracio();
    }
    if (message === "Belépés") {
        
        new Bejelentkezes(articleElem);
        new ElfelejtettJelszo(articleElem);
    }

});
import Hozzaad from "./controller/Hozzaad.js";
import Betegek from "./controller/Betegek.js";
import Keszlet from "./controller/Keszlet.js";

$(function () {

    let header = $('header');
    let title = header.find('h1');
    let message = title.text();

    if (message === "Szülő hozzáadása a gyerekhez") {
        new Hozzaad();
    }
    if(message === "Betegek" || message === "Beteg"){
        new Betegek();
    }
    if(message === "Készlet"){
        new Keszlet();
    }
    /*
    if(message === "Profil Beálitások"){
        new Bealitasok();
    }
    */


});
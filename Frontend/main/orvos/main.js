import Hozzaad from "./controller/Hozzaad.js";

$(function () {

    let header = $('header');
    let title = header.find('h1');
    let message = title.text();

    if (message === "Szülő hozzáadása a gyerekhez") {
        new Hozzaad();
    }


});
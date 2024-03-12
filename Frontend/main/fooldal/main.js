import Regisztracio from "./controller/regisztracio.js";
import Bejelentkezes from "./controller/bejelentkezes.js";
$(function () {

    let header = $('header');
    let title = header.find('h1');
    let message = title.text();

    if (message === "Regisztráció") {
        new Regisztracio();
    }
    if (message === "Belépés") {
        new Bejelentkezes();
    }

});
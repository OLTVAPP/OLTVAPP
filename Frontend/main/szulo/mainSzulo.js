import Bealitasok from "../szulo/controller/Bealitasok.js";
import Controller from "./controller/Controller.js";

$(function () {
    let header = $("header");
    let title = header.find("h1");
    let message = title.text();
    new Controller();
    if (message === "Profil Beálitások") {
        new Bealitasok();
    }
});
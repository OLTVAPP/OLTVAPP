import HozzaAd_Controller from "./controller/hozaAd_controller.js";

$(function () {
  const buttonElem = $(".ujAdat")
  console.log(buttonElem[0].id)
  for (let index = 0; index < buttonElem.length; index++) {
    new HozzaAd_Controller(buttonElem[index].id)
  }

  });
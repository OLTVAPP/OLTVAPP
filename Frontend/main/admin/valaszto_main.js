$(function () {
   
    $("#felhasznalo_valaszt").on("change", (e) => {
        let optionSelected = $(e.target);
        console.log(optionSelected.val())
        $(".hozzaAd").attr('id', `${optionSelected.val()}`)
        window.dispatchEvent(new CustomEvent("divValtas", { detail: optionSelected.val()}));
    });
    //new Tabla_main($("table").attr("id"))
  
   
  });
import Tabla_main from "../tabla/tabla_main.js";

$(function () {
  const tabla = new Tabla_main($("table").attr("id"));
  tabla.tabla_futtato();

  $("#felhasznalo_valaszt").on("change", (e) => {
    let optionSelected = $(e.target);
    console.log(optionSelected.val());
    $(".hozzaAd").attr("id", `${optionSelected.val()}`);
    window.dispatchEvent(
      new CustomEvent("divValtas", { detail: optionSelected.val() })
    );
  });

  $("#oltas_tipus_kivalasztas").on("click", () => {
    window.location.assign("/main/admin/oltas_tipusok_kezelese.html");
  });

  $("#beadando_kivalasztas").on("click", () => {
    window.location.assign("/main/admin/beadandok_kezelese.html");
  });
});

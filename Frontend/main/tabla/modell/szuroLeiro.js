export const felhasznalo_szuro = [
  {
    key: "felhasznalo_nev",
    megjelenes: "Felhasználó név",
    tipus: "select",
    value: "",
    url: "http://localhost:8000/api/felhasznalo_id",
    valaszto: [{
      value: "",
      kiiras: "Válasz nevet",
    },]
  },
  {
    key: "felhasznalo_email",
    megjelenes: "Felhasználó email",
    tipus: "text",
    value: "",
    placeholder: "felhasználó név",
  },
  {
    key: "vez_nev",
    megjelenes: "Vezeték név",
    tipus: "text",
    value: "",
    placeholder: "felhasználó név",
  },
  {
    key: "ker_nev",
    megjelenes: "Kereszt név",
    tipus: "text",
    value: "",
    placeholder: "felhasználó név",
  },
  {
    key: "aktiv",
    megjelenes: "Felhasználó név",
    tipus: "select",
    value: "",
    url: "nincs",
    valaszto: [
      { value: "", kiiras: "Összes" },
      { value: true, kiiras: "Aktív" },
      { value: false, kiiras: "Inaktív" },
    ],
  },
  {
    key: "kereses",
    value: "Keresés",
    tipus: "button",
  }
];
export const felhasznalo_szuro_proba = {
  felhasznalo_nev: {
    megjelenes: "Felhasználó név",
    tipus: "text",
    value: "",
    placeholder: "felhasználó név",
  },
  felhasznalo_email: {
    megjelenes: "Felhasználó név",
    tipus: "text",
    value: "",
    placeholder: "felhasználó név",
  },
  vez_nev: {
    megjelenes: "Felhasználó név",
    tipus: "text",
    value: "",
    placeholder: "felhasználó név",
  },
  ker_nev: {
    megjelenes: "Felhasználó név",
    tipus: "text",
    value: "",
    placeholder: "felhasználó név",
  },
  aktiv: {
    megjelenes: "Felhasználó név",
    tipus: "select",
    url: "http://localhost:8000/api/felhasznalo_id",
    valaszto: [{ value: "üres", kiiras: "Válasz nevet" }],
  },
};

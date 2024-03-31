export const admin_hozzAd = [
    {
      key: "felhasznalo_nev",
      megjelenes: "Felhasználó neve",
      tipus: "text",
      value: "",
      placeholder: "név",
      regex: /^.{6,15}$/,
      validalas: "legalább 6 karakter!",

    },
    {
      key: "felhasznalo_email",
      megjelenes: "Felhasználó email",
      tipus: "text",
      value: "",
      placeholder: 'felhasználó email',
      regex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      validalas: "Adjon meg az email cím megadásához szükséges karaktereket!",
      maxLength: 40

    },
    {
        key: "jelszo",
        megjelenes: "Jelszó",
        tipus: "text",
        value: "",
        placeholder: "Jelszó",
        regex: /^(?=.*[A-Z])(?=.*\d).{6,20}$/,
        validalas: "1 Nagy betű és szám illetve 8-20 közötti karakter kell",
        maxLength: 20

      },
    
    {
      key: "vez_nev",
      megjelenes: "Vezeték név",
      tipus: "text",
      value: "",
      placeholder: "vezeték név",
      regex: "[A-Z][a-z]{2,15}",
      validalas: "Név nagybetűvel kezdődik, legalább 3 karakter!",

    },
    {
      key: "ker_nev",
      megjelenes: "Kereszt név",
      tipus: "text",
      value: "",
      placeholder: "kereszt név",
      regex: "[A-Z][a-z]{2,15}",
      validalas: "Név nagybetűvel kezdődik, legalább 3 karakter!",

    },

  
  ];

  export const orvos_hozzAd = [
    {
      key: "felhasznalo_nev",
      megjelenes: "Felhasználó neve",
      tipus: "text",
      value: "",
      placeholder: "",
      regex: /^.{6,15}$/,
      validalas: "legalább 6 karakter!",
    },
    {
      key: "felhasznalo_email",
      megjelenes: "Felhasználó email",
      tipus: "text",
      value: "",
      placeholder: '',
      regex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      validalas: "Adjon meg az email cím megadásához szükséges karaktereket!",
      maxLength: 40
    },
    {
        key: "jelszo",
        megjelenes: "Jelszó",
        tipus: "text",
        value: "",
        placeholder: "",
        regex: /^(?=.*[A-Z])(?=.*\d).{6,20}$/,
        validalas: "1 Nagy betű és szám illetve 8-20 közötti karakter kell",
        maxLength: 20
      },
    
    {
      key: "vez_nev",
      megjelenes: "Vezeték név",
      tipus: "text",
      value: "",
      placeholder: "",
      regex: "[A-Z][a-z]{2,15}",
      validalas: "Név nagybetűvel kezdődik, legalább 3 karakter!",
    },
    {
      key: "ker_nev",
      megjelenes: "Kereszt név",
      tipus: "text",
      value: "",
      placeholder: "",
      regex: "[A-Z][a-z]{2,15}",
      validalas: "Név nagybetűvel kezdődik, legalább 3 karakter!",
    },
    {
      key: "tel_szam",
      megjelenes: "telefonszám",
      tipus: "text",
      value: "",
      placeholder: "",
      regex:  "[0-9]{11}[\+]*$",
      validalas: "Csak számokat, + jelet tartalmazhat és 12 hosszúságúnak kell lennie!",
    
  },
  {
      key: "publikus_email",
      megjelenes: "publikus emai cím",
      tipus: "text",
      value: "",
      placeholder: "",
      regex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      validalas: "Adjon meg az email cím megadásához szükséges karaktereket!",
      maxLength: 40
  },
  {
      key: "rendelo_ajto_szam",
      megjelenes: "rendelő ajtó száma",
      tipus: "text",
      value: "",
      placeholder: "",
      regex:  "[0-9]+$",
      validalas: "Csak szám karakter!",
  },

  
  ];


  export const oltas_tipus_hozzaAd = [
    {
      key: "tipus_elnev",
      megjelenes: "Oltás tipus neve",
      tipus: "text",
      value: "",
      placeholder: "",
      regex: /^.{6,15}$/,
      validalas: "legalább 6 karakter!",
    },
    {
      key: "kotelezo",
      megjelenes: "Kötelezetség",
      tipus: "select",
      value: "",
      url: "nincs",
      placeholder: '',
      valaszto: [
        { value: 1, kiiras: "Kötelező" },
        { value: 0, kiiras: "Nem kötelező" },
      ],
    },
    {
        key: "leiras",
        megjelenes: "Leírás",
        tipus: "text",
        value: "",
        placeholder: "",
      },
  ];

  export const beadando_hozzaAd = [
    {
      key: "tipus_id",
      megjelenes: "Oltás tipus neve",
      tipus: "select",
      value: "",
      placeholder: "",
      url: "http://localhost:8000/api/oltas_tipus",
      valaszto: [  { value: "", kiiras: "Válasz oltás tipust" },]
    },
    {
      key: "ev",
      megjelenes: "Beadás kor (év)",
      tipus: "text",
      value: "",
      placeholder: '',
      regex:  "[0-9]+$",
      validalas: "Csak szám karakter!",
    },
    {
        key: "honap",
        megjelenes: "Beadás kor (hónap)",
        tipus: "text",
        value: "",
        placeholder: "",
        regex:  "[0-9]+$",
        validalas: "Csak szám karakter!",
      },
      {
        key: "hanyadik",
        megjelenes: "Hanyadik",
        tipus: "text",
        value: "",
        placeholder: "",
        regex:  "^(?:1[0-1]|[1-9]|0)+$",
        validalas: "Csak szám karakter!",
      },
  ];


  export const oltas_hozzaAd = [
    {
      key: "tipus_id",
      megjelenes: "Oltóanyag neve",
      tipus: "select",
      value: "",
      placeholder: "",
      url: "http://localhost:8000/api/oltas_tipus",
      valaszto: [  { value: "", kiiras: "Válasz oltás tipust" },]
    },
    {
      key: "oltoanyag_neve",
      megjelenes: "Oltás tipuúsa",
      tipus: "text",
      value: "",
      placeholder: '',
    },
    {
        key: "forgalmazo",
        megjelenes: "Forgalmazó",
        tipus: "text",
        value: "",
        placeholder: "",
      },
      {
        key: "receptre",
        megjelenes: "Receptre",
        tipus: "select",
      value: "",
      url: "nincs",
      placeholder: '',
      valaszto: [
        { value: 1, kiiras: "Receptes" },
        { value: 0, kiiras: "Nem Receptes" },
      ],
      },
      {
        key: "leiras",
        megjelenes: "Információk",
        tipus: "text",
        value: "",
        placeholder: "",
      },
      {
        key: "adagolas",
        megjelenes: "Adagolás leírás",
        tipus: "text",
        value: "",
        placeholder: "",
      },
  ];
  
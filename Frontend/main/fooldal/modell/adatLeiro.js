/*Bejelentkezés*/

export const bejelentKezesLeiro = {
  bejelentkezes: {
    felhasznalo_nev: {
      megjelenes: "Felhasználónév",
      tipus: "text",
      value: "",
      placeholder: "felhasználónév",
      regex: /^.{5,15}$/,
      validalas: "Minimum 5 és maximum 15 karakter lehet!",
    },
    jelszo: {
      megjelenes: "Jelszó",
      tipus: "password",
      value: "",
      placeholder: "jelszó",
      regex: "[A-Z][a-z]{2,15}",
      validalas: "1 Nagy betű és szám illetve 8-20 közötti karakter kell",
    },
  },
  gombok: {
    belepes: {
      tipus: "submit",
      value: "Log In",
    },
  },
};

export const bejelentKezesElfelejtLeiro = {
  elfelejtett: {
    email: {
      megjelenes: "E-mail cím",
      tipus: "text",
      value: "",
      placeholder: "email cím",
      regex: "[A-Z][a-z]{2,15}",
      validalas: "Név nagybetűvel kezdődik, legalább 3 karakter!",
    },
    felhasznaloNev: {
      megjelenes: "Felhasználónév",
      tipus: "text",
      value: "",
      placeholder: "felhasználónév",
      regex: "[A-Z][a-z]{2,15}",
      validalas: "Név nagybetűvel kezdődik, legalább 3 karakter!",
    },
  },
  gombok: {
    megse: {
      tipus: "submit",
      value: "Mégse",
    },
    megerosit: {
      tipus: "submit",
      value: "Megerősít",
    },
  },
};

export const urlapLeiro = {
  felhasznalo: {
    felhasznalo_nev: {
      megjelenes: "Felhasználói név:",
      tipus: "text",
      value: "",
      regex: /^.{5,15}$/,
      validalas: "Minimum 5 és maximum 15 karakter lehet!",
      ellenorzes: "Foglalt a felhasználó név!",
      maxLength: 15
    },
    szerepkor: {
      key: "szerepkor",
      value: "S"
    },
    felhasznalo_email: {
      megjelenes: "Email cím:",
      tipus: "email",
      value: "",
      regex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      validalas: "Nem megfelelő email cim!",
      ellenorzes: "Foglalt az email cím!",
      maxLength: 40
    },
    jelszo: {
      megjelenes: "Jelszó:",
      tipus: "password",
      value: "",
      regex: /^(?=.*[A-Z])(?=.*\d).{8,20}$/,
      validalas: "1 Nagy betű és szám illetve 8-20 közötti karakter kell",
      ellenorzes: "Nem egyforma a jelszó!",
      maxLength: 20
    },
    aktiv: {
      key: "aktiv",
      value: true
    },
  },
  szulo: {
    szemelyes_adatok: {
      vez_nev: {
        megjelenes: "Vezetéknév:",
        tipus: "text",
        value: "",
        regex: /^[A-Z].{1,14}$/,
        validalas: "Nagy betűvel kezdődjön!",
        id: "adat",
        maxLength: 20
      },
      ker_nev: {
        megjelenes: "Keresztnév:",
        tipus: "text",
        value: "",
        regex: /^[A-Z].{1,14}$/,
        validalas: "Nagy betűvel kezdődjön!",
        id: "adat",
        maxLength: 20
      },
      szemelyi_igazolvany_szam: {
        megjelenes: "Személyi igazolvány szám:",
        tipus: "text",
        value: "",
        regex: /^\d{6}[A-Z]{2}$/,
        validalas: "6 számot és 2 betűt kell tartalmaznia!",
        ellenorzes: "Foglalt személyi igazolvány szám",
        id: "adat",
        maxLength: 8
      },
      telefonszam: {
        megjelenes: "Telefonszám:",
        tipus: "text",
        value: "",
        regex: "^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$",
        validalas: "+-al kell kezdődnie (pl.: +36)",
        ellenorzes: "Foglalt telefonszám!",
        id: "adat",
        maxLength: 12
      },
    },
    lakcim: {
      lakcim_varos: {
        megjelenes: "Város:",
        tipus: "text",
        value: "",
        regex: /^[A-Z].{2,19}$/,
        validalas: "Minimum 3 és maximum 20 karakter lehet!",
        id: "lakcim",
        maxLength: 20
      },
      lakcim_irSzam: {
        megjelenes: "Irányítószám:",
        tipus: "number",
        value: "",
        regex: /^\d{4}$/,
        validalas: "4 számot kell tartalmaznia!",
        id: "lakcim",
      },
      lakcim_utca: {
        megjelenes: "Utca:",
        tipus: "text",
        value: "",
        regex: /^[A-Z].{2,19}$/,
        validalas: "Minimum 3 és maximum 20 karakter lehet!",
        id: "lakcim",
        maxLength: 20
      },
    },
  },
};


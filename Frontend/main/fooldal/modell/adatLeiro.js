/*Bejelentkezés*/

export const bejelentKezesLeiro = {
  bejelentkezes: {
    felhasznalo_nev: {
      megjelenes: "Felhasználó név",
      tipus: "text",
      value: "",
      placeholder: "felhasználó név",
      regex: "[A-Z][a-z]{2,15}",
      validalas: "Név nagybetűvel kezdődik, legalább 3 karakter!",
    },
    jelszo: {
      megjelenes: "Jelszó",
      tipus: "password",
      value: "",
      placeholder: "jelszó",
      regex: "[A-Z][a-z]{2,15}",
      validalas: "Név nagybetűvel kezdődik, legalább 3 karakter!",
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
      megjelenes: "Felhasználó név",
      tipus: "text",
      value: "",
      placeholder: "felhasználó név",
      regex: "[A-Z][a-z]{2,15}",
      validalas: "Név nagybetűvel kezdődik, legalább 3 karakter!",
    },
  },
};

export const urlapLeiro = {
  felhasznalo_nev: {
      megjelenes: "Felhasználói név:",
      id: "fadat",
      tipus: "text",
      value: "",
      regex: /^.{5,15}$/,
      validalas: "Minimum 5 és maximum 15 karakter lehet!"
  },
  felhasznalo_email: {
      megjelenes: "Email cím:",
      id: "fadat",
      tipus: "email",
      value: "",
      regex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      validalas: "Nem megfelelő email cim"
  },
  jelszo: {
      megjelenes: "Jelszó:",
      id: "fadat2",
      tipus: "password",
      value: "",
      regex: /^(?=.*[A-Z])(?=.*\d).{8,20}$/,
      validalas: "1 Nagy betű és szám illetve 8-20 közötti karakter kell"
  },
  vez_nev: {
      megjelenes: "Vezeték név:",
      id: "szadat",
      tipus: "text",
      value: "",
      regex: /^[A-Z].{1,14}$/,
      validalas: "Nagy betűvel kezdődjön!"
  },
  ker_nev: {
      megjelenes: "Kereszt név:",
      id: "szadat",
      tipus: "text",
      value: "",
      regex: /^[A-Z].{1,14}$/,
      validalas: "Nagy betűvel kezdődjön!"
  },
  szemelyi_igazolvany_szam: {
      megjelenes: "Személyi igazolvány szám:",
      id: "szadat",
      tipus: "text",
      value: "",
      regex: /^\d{6}[A-Z]{2}$/,
      validalas: "6 számot és 2 betűt kell tartalmaznia!"
  },
  lakcim_varos: {
      megjelenes: "Város:",
      id: "ladat",
      tipus: "text",
      value: "",
      regex: /^[A-Z].{2,19}$/,
      validalas: "Minimum 3 és maximum 20 karakter lehet!"
  },
  lakcim_irSzam: {
      megjelenes: "Irányítószám:",
      id: "ladat",
      tipus: "number",
      value: "",
      regex: /^\d{4}$/,
      validalas: "4 számot kell tartalmaznia!"
  },
  lakcim_utca: {
      megjelenes: "Utca",
      id: "ladat",
      tipus: "text",
      value: "",
      validalas: ""
  },
};



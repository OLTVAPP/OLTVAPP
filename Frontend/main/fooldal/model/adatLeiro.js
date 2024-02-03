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

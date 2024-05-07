export const gyerekLeiro = {
  gyerek_taj: {
    megjelenes: "Tajszám"
  },
  vez_nev: {
    megjelenes: "Vezetéknév"
  },
  ker_nev: {
    megjelenes: "Keresztnév"
  },
  szul_datum: {
    megjelenes: "Születési dátum"
  },
  szul_hely: {
    megjelenes: "Születési hely"
  },
  lakcim_varos: {
    megjelenes: "Lakhely"
  },
  lakcim_irSzam: {
    megjelenes: "Irányítószám"
  },
  lakcim_utca: {
    megjelenes: "Utca"
  },
};

export const reszletesAdatok = {
  adatok: {
    gyerek_taj: {
      megjelenes: "Gyerek tajszám",
      tipus: "number",
      value: "",
      regex: /^\d{9}$/,
      validalas: "9 számot kell tartalmaznia!",
    },
    vez_nev: {
      megjelenes: "Vezetéknév",
      tipus: "text",
      value: "",
      regex: /^[A-Z].{1,14}$/,
      validalas: "Nagy betűvel kezdődjön!",
      maxLength: 20,
    },
    ker_nev: {
      megjelenes: "Keresztnév",
      tipus: "text",
      value: "",
      regex: /^[A-Z].{1,14}$/,
      validalas: "Nagy betűvel kezdődjön!",
      maxLength: 20,
    },
    szul_datum: {
      megjelenes: "Születési dátum",
      tipus: "date",
      value: "",
      regex: "",
      validalas: "Nem lehet nagyobb mint a mai dátum és kisebb mint 18 év!",
    },
    szul_hely: {
      megjelenes: "Születési hely",
      tipus: "text",
      value: "",
      regex: /^[A-Z].{2,19}$/,
      validalas: "Minimum 3 és maximum 20 karakter lehet!",
      maxLength: 20,
    },
    lakcim_varos: {
      megjelenes: "Város",
      tipus: "text",
      value: "",
      regex: /^[A-Z].{2,19}$/,
      validalas: "Minimum 3 és maximum 20 karakter lehet!",
      maxLength: 20,
    },
    lakcim_irSzam: {
      megjelenes: "Irányítószám",
      tipus: "number",
      value: "",
      regex: /^\d{4}$/,
      validalas: "4 számot kell tartalmaznia!",
    },
    lakcim_utca: {
      megjelenes: "Utca",
      tipus: "text",
      value: "",
      regex: /^[A-Z].{2,19}$/,
      validalas: "Minimum 3 és maximum 20 karakter lehet!",
      maxLength: 20,
    },
    erzekenyseg: {
      megjelenes: "Érzékenység",
      tipus: "textarea",
      maxLength: 400,
    },
  },
  szulo_adatok: {
    vez_nev: {
      megjelenes: "Vezetéknév"
    },
    ker_nev: {
      megjelenes: "Keresztnév"
    },
    telefonszam: {
      megjelenes: "Telefonszám"
    },
    lakcim_varos: {
      megjelenes: "Lakhely",
    },
    lakcim_irSzam: {
      megjelenes: "Irányítószám"
    },
    lakcim_utca: {
      megjelenes: "Utca",
    },
    felhasznalo_nev: {
      megjelenes: "Felhasználónév"
    },
    felhasznalo_email: {
      megjelenes: "Felhasználói email"
    },
  },
  beadott_oltas: {
    oltas_tipus: {
      megjelenes: "Oltás tipus"
    },
    oltoanyag_neve: {
      megjelenes: "Oltás neve"
    },
    hanyadik: {
      megjelenes: "Hányadik"
    },
    beadas_datum: {
      megjelenes: "Beadás dátuma"
    },
    ker_nev: {
      megjelenes: "Orvos keresztneve"
    },
    vez_nev: {
      megjelenes: "Orvos vezetékneve"
    },
    megjegyzes: {
      megjelenes: "Megjegyzés"
    },
  },
  beadando_oltas: {
    oltas_tipus: {
      megjelenes: "Oltás tipus"
    },
    ev: {
      megjelenes: "Év"
    },
    honap: {
      megjelenes: "Hónap"
    },
    hanyadik: {
      megjelenes: "Hányadik"
    },
    beadva: {
      megjelenes: "Beadva"
    }
  }
};

export const keszletLeiro = {
  tipus_elnev: {
    megjelenes: "Oltás neve"
  },
  darab: {
    megjelenes: "Darab száma",
    tipus: "number",
    value: "",
    regex: /^(?:[1-9]|[1-9][0-9]{1,2}|999)$/,
    validalas: "Túl kevés vagy túl sok darab van megadva!",
  },
  beszerzes_datuma: {
    megjelenes: "Beszerzés dátuma",
    tipus: "date",
    value: "",
    regex: "",
    validalas: "Túl nagy vagy túl kicsi a dátum",
  },
  lejarati_datuma: {
    megjelenes: "Lejárati dátuma",
    tipus: "date",
    value: "",
    regex: "",
    validalas: "Nem lehet kisebb dátum mint a beszerzés dátuma!",
  },
  oltoanyag_neve: {
    megjelenes: "Oltóanyag neve"
  },
  megsemmisitett_datum: {
    megjelenes: "Megsemmisítés dátuma"
  },
};

export const ujBeteg = {
  szulo_adatok: {
    email: {
      megjelenes: "E-mail cím:",
      tipus: "email",
      value: "",
      placeholder: "email cím",
      regex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      validalas: "Nem megfelelő email cim",
    },
  },
  gyerek_adatok: {
    szemelyes_adatok: {
      gyerek_taj: {
        megjelenes: "Gyerek tajszám:",
        tipus: "number",
        value: "",
        regex: /^\d{9}$/,
        validalas: "9 számot kell tartalmaznia!",
      },
      vez_nev: {
        megjelenes: "Vezetéknév:",
        tipus: "text",
        value: "",
        regex: /^[A-Z].{1,14}$/,
        validalas: "Nagy betűvel kezdődjön!",
        maxLength: 20,
      },
      ker_nev: {
        megjelenes: "Keresztnév:",
        tipus: "text",
        value: "",
        regex: /^[A-Z].{1,14}$/,
        validalas: "Nagy betűvel kezdődjön!",
        maxLength: 20,
      },
      szul_datum: {
        megjelenes: "Születési dátum:",
        tipus: "date",
        value: "",
        regex: "",
        validalas: "Nem lehet nagyobb mint a mai dátum és kisebb mint 18 év!",
      },
      szul_hely: {
        megjelenes: "Születési hely:",
        tipus: "text",
        value: "",
        regex: /^[A-Z].{2,19}$/,
        validalas: "Minimum 3 és maximum 20 karakter lehet!",
        maxLength: 20,
      },
      erzekenyseg: {
        megjelenes: "Érzékenység (Nem kötelező!):",
        tipus: "textarea",
        maxLength: 400,
      },
    },
    lakcim: {
      lakcim_varos: {
        megjelenes: "Város:",
        tipus: "text",
        value: "",
        regex: /^[A-Z].{2,19}$/,
        validalas: "Minimum 3 és maximum 20 karakter lehet!",
        maxLength: 20,
      },
      lakcim_irSzam: {
        megjelenes: "Irányítószám:",
        tipus: "number",
        value: "",
        regex: /^\d{4}$/,
        validalas: "4 számot kell tartalmaznia!",
      },
      lakcim_utca: {
        megjelenes: "Utca:",
        tipus: "text",
        value: "",
        regex: /^[A-Z].{2,19}$/,
        validalas: "Minimum 3 és maximum 20 karakter lehet!",
        maxLength: 20,
      },
    },
  },
};

export const ujBeadott = {
  beadas_datuma: {
    megjelenes: "Beadás dátuma:",
    tipus: "date",
    value: "",
    placeholder: "",
    regex: "",
    validalas: "Túl nagy vagy túl kicsi a dátum",
  },
  megjegyzes: {
    megjelenes: "Megjegyzés:",
    tipus: "textarea",
    value: "",
    placeholder: "",
    regex: "",
    validalas: "",
  },
}

export const ujBeadando = {
  ev: {
    megjelenes: "Év",
    tipus: "number",
    value: "",
    regex: /^(20[0-4][0-9]|2050)$/,
    validalas: "Túl nagy vagy túl kicsi az év!",
  },
  honap: {
    megjelenes: "Honap",
    tipus: "number",
    value: "",
    regex: /^(1[0-2]|[1-9])$/,
    validalas: "1-12 közötti szám lehet csak!",
  },
  hanyadik: {
    megjelenes: "Hányadik",
    tipus: "number",
    value: "",
    regex: /^(?:[1-9]|[1-9][0-9])$/,
    validalas: "Túl nagy vagy túl kicsi számot adtál meg!",
  }
}

export const profilModositas = {
  adatok: {
    felhasznalo_nev: {
      megjelenes: "Felhasználónév:",
      tipus: "text",
      value: "",
      regex: /^.{5,15}$/,
      validalas: "Minimum 5 és maximum 15 karakter lehet!",
      maxLength: 15
    },
    felhasznalo_email: {
      megjelenes: "Email cím:",
      tipus: "email",
      value: "",
      regex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      validalas: "Nem megfelelő email cim",
      maxLength: 40
    },
  },
  jelszo: {
    regi_jelszo: {
      megjelenes: "Régi jelszó:",
      tipus: "password",
      value: "",
      regex: /^(?=.*[A-Z])(?=.*\d).{8,20}$/,
      validalas: "1 Nagy betű és szám illetve 8-20 közötti karakter kell",
      maxLength: 20
    },
    uj_jelszo: {
      megjelenes: "Új jelszó:",
      tipus: "password",
      value: "",
      regex: /^(?=.*[A-Z])(?=.*\d).{8,20}$/,
      validalas: "1 Nagy betű és szám illetve 8-20 közötti karakter kell",
      ellenorzes: "Nem egyforma a jelszó!",
      maxLength: 20
    },
    uj_jelszo2: {
      megjelenes: "Új jelszó még egyszer:",
      tipus: "password",
      value: "",
      regex: /^(?=.*[A-Z])(?=.*\d).{8,20}$/,
      validalas: "1 Nagy betű és szám illetve 8-20 közötti karakter kell",
      ellenorzes: "Nem egyforma a jelszó!",
      maxLength: 20
    },
  },
  orvos_adatok: {
    vez_nev: {
      megjelenes: "Vezetéknév:",
      tipus: "text",
      value: "",
      regex: /^[A-Z].{1,14}$/,
      validalas: "Nagy betűvel kezdődjön!",
      maxLength: 20
    },
    ker_nev: {
      megjelenes: "Keresztnév:",
      tipus: "text",
      value: "",
      regex: /^[A-Z].{1,14}$/,
      validalas: "Nagy betűvel kezdődjön!",
      maxLength: 20
    },
    tel_szam: {
      megjelenes: "Telefonszám:",
      tipus: "text",
      value: "",
      regex: "^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$",
      validalas: "+-al kell kezdődnie (pl.: +36)",
      maxLength: 12
    },
    publikus_email: {
      megjelenes: "Email cím:",
      tipus: "email",
      value: "",
      regex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      validalas: "Nem megfelelő email cim",
      maxLength: 40
    },
    rendelo_ajto_szam: {
      megjelenes: "Rendelő ajtó száma:",
      tipus: "number",
      value: "",
      regex: /^(?:[1-9]|[1-9][0-9])$/,
      validalas: "Túl nagy vagy túl kicsi számot adtál meg!",
    }
  }
}

export const urlapLeiro = {
  szulo: {
    felhasznalo_nev: {
      megjelenes: "Felhasználói név:",
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
  gyerek: {
    szemelyes_adatok: {
      gyerek_taj: {
        megjelenes: "Tajszám:",
        tipus: "number",
        value: "",
        regex: /^\d{9}$/,
        validalas: "9 számot kell tartalmaznia!",
      },
      vez_nev: {
        megjelenes: "Vezeték név:",
        tipus: "text",
        value: "",
        regex: /^[A-Z].{1,14}$/,
        validalas: "Nagy betűvel kezdődjön!",
        maxLength: 20
      },
      ker_nev: {
        megjelenes: "Kereszt név:",
        tipus: "text",
        value: "",
        regex: /^[A-Z].{1,14}$/,
        validalas: "Nagy betűvel kezdődjön!",
        maxLength: 20
      },
      szul_datum: {
        megjelenes: "Születési dátum:",
        tipus: "date",
        value: "",
        regex: "",
        validalas: "",
        maxLength: 20
      },
      szul_hely: {
        megjelenes: "Születési hely:",
        tipus: "text",
        value: "",
        regex: /^[A-Z].{2,19}$/,
        validalas: "Minimum 3 és maximum 20 karakter lehet!",
        maxLength: 20
      },
    },
    lakcim: {
      lakcim_varos: {
        megjelenes: "Város:",
        tipus: "text",
        value: "",
        regex: /^[A-Z].{2,19}$/,
        validalas: "Minimum 3 és maximum 20 karakter lehet!",
        maxLength: 20
      },
      lakcim_irSzam: {
        megjelenes: "Irányítószám:",
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
        maxLength: 20
      },
    },
  },
};


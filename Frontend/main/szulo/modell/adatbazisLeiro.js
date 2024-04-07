export const adatbazis = {
    gyerekek: [
        {
            vez_nev: "Kovács",
            ker_nev: "Péter",
            szul_datum: "2005.05.15",
            szul_hely: "Budapest"
        },

        {
            vez_nev: "K",
            ker_nev: "P",
            szul_datum: "2005",
            szul_hely: "Bp"
        },

        {
            vez_nev: "A",
            ker_nev: "B",
            szul_datum: "2005",
            szul_hely: "Bp"
        },
        {
            vez_nev: "Q",
            ker_nev: "W",
            szul_datum: "2005",
            szul_hely: "Bp"
        },
        {
            vez_nev: "L",
            ker_nev: "PW",
            szul_datum: "2005",
            szul_hely: "Bp"
        },
    ],
    oltasok: [
        {
            elnev: "Bárány hímlő elleni oltás",
            jotekony_hatas: "Jó hatás",
            mellek_hatas: "Nincs mellékhatás",
            beadando: "beadva",
            kotelezo: "nem",
        },

        {
            elnev: "Kanyaró",
            jotekony_hatas: "Jó hatás",
            mellek_hatas: "Nincs mellékhatás",
            beadando: "beadandó",
            kotelezo: "igen",
        },

    ],
    orvosok: [
        {
            vez_nev: "Nagy",
            ker_nev: "Anna",
            tel_szam: "123456789",
            publikus_email: "anna@orvos.hu"
        },
    ],

    jelentkezettOltasok: [
        {
            betegNeve: "Kovács Péter",
            idopont: "Bárány hímlő elleni oltás",
            valasztas: "2024.02.20"
        },
        {
            betegNeve: "Nagy Anna",
            idopont: "Kanyaró elleni oltás",
            valasztas: "2024.02.22"
        },

    ]
};

export const jelentkezettOltasok = [
    {
        betegNeve: "Kovács Péter",
        idopont: "Bárány hímlő elleni oltás",
        valasztas: "2024.02.20"
    },
    {
        betegNeve: "Nagy Anna",
        idopont: "Kanyaró elleni oltás",
        valasztas: "2024.02.22"
    },

];
export const gombok=["Gyerek", "Orvos", "Oltás"];

export const profilModositas = {
    adatok: {
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
        maxLength: 20
      },
      uj_jelszo2: {
        megjelenes: "Új jelszó még egyszer:",
        tipus: "password",
        value: "",
        regex: /^(?=.*[A-Z])(?=.*\d).{8,20}$/,
        validalas: "1 Nagy betű és szám illetve 8-20 közötti karakter kell",
        maxLength: 20
      },
    },
    orvos_adatok: {
      vez_nev: {
        megjelenes: "Vezeték név:",
        tipus: "text",
        value: "",
        regex: /^[A-Z].{1,14}$/,
        validalas: "Nagy betűvel kezdődjön!",
        id: "adat",
        maxLength: 20
      },
      ker_nev: {
        megjelenes: "Kereszt név:",
        tipus: "text",
        value: "",
        regex: /^[A-Z].{1,14}$/,
        validalas: "Nagy betűvel kezdődjön!",
        id: "adat",
        maxLength: 20
      },
      tel_szam: {
        megjelenes: "Telefonszám:",
        tipus: "text",
        value: "",
        regex: "^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$",
        validalas: "+-al kell kezdődnie (pl.: +36)",
        id: "adat",
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
      szemelyi_igazolvany_szam: {
        megjelenes: "Személyi igazolvány szám: ",
        tipus: "number",
        value: "",
        regex: /^(?:[1-9]|[1-9][0-9])$/,
        validalas: "Túl nagy vagy túl kicsi számot adtál meg!",
      },
      lakcim_varos: {
        megjelenes: "Lakcím Város neve: ",
        tipus: "text",
        value: "",
        regex: /^[A-Z].{1,14}$/,
        validalas: "Nagy betűvel kezdődjön!",
      },
      lakcim_irSzam: {
        megjelenes: "Lakcím szám: ",
        tipus: "number",
        value: "",
        regex: /^(?:[1-9]|[1-9][0-9])$/,
        validalas: "Túl nagy vagy túl kicsi számot adtál meg!",
      },
      lakcim_utca: {
        megjelenes: "Lakcím utca neve: ",
        tipus: "text",
        value: "",
        regex: /^[A-Z].{1,14}$/,
        validalas: "Nagy betűvel kezdődjön!",
      }
    }
}
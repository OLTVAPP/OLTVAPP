export const urlapLeiro = {
    felhasznalo: {
        felhasznalo_nev: {
            megjelenes: "Felhasználói név:",
            tipus: "text",
            value: "",
            regex: /^.{5,15}$/,
            validalas: "Minimum 5 és maximum 15 karakter lehet!",
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
            validalas: "Nem megfelelő email cim",
            maxLength: 40
        },
        jelszo: {
            megjelenes: "Jelszó:",
            tipus: "password",
            value: "",
            regex: /^(?=.*[A-Z])(?=.*\d).{8,20}$/,
            validalas: "1 Nagy betű és szám illetve 8-20 közötti karakter kell",
            maxLength: 20
        },
        aktiv: {
            key: "aktiv",
            value: true
        },
    },
    szulo: {
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
        szemelyi_igazolvany_szam: {
            megjelenes: "Személyi igazolvány szám:",
            tipus: "text",
            value: "",
            regex: /^\d{6}[A-Z]{2}$/,
            validalas: "6 számot és 2 betűt kell tartalmaznia!",
            id: "adat",
            maxLength: 8
        },
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
            megjelenes: "Utca",
            tipus: "text",
            value: "",
            regex: /^[A-Z].{2,19}$/,
            validalas: "Minimum 3 és maximum 20 karakter lehet!",
            id: "lakcim",
            maxLength: 20
        },
    },
};

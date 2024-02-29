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
export const gombok = ["Gyerek", "Orvos", "Oltás", "Jelentkezett oltások"];
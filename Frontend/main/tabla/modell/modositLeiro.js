export const modosit_felhasznalo = [
    {
        key: "felhasznalo_nev",
        megjelenes: "Felhasználó neve",
        tipus: "text",
        value: "",
        placeholder: "felhasználó név",
    },
    {
        key: "felhasznalo_email",
        megjelenes: "Felhasználó email",
        tipus: "text",
        value: "",
        placeholder: "felhasználó név",
    },
 
    {
        key: "plusz",
        pluszAdatok: [{
            atadas: 'A',
            plusz_adatok: [
                {
                    key: "vez_nev",
                    megjelenes: "Vezetéknév",
                    tipus: "text",
                    value: "",
                    placeholder: "felhasználó név",
                },
                {
                    key: "ker_nev",
                    megjelenes: "Keresztnév",
                    tipus: "text",
                    value: "",
                    placeholder: "felhasználó név",
                },

            ]

        }, {
            atadas: 'O',
            plusz_adatok: [
                {
                    key: "vez_nev",
                    megjelenes: "Vezetéknév",
                    tipus: "text",
                    value: "",
                    placeholder: "felhasználó név",
                },
                {
                    key: "ker_nev",
                    megjelenes: "Keresztnév",
                    tipus: "text",
                    value: "",
                    placeholder: "felhasználó név",
                },
                {
                    key: "tel_szam",
                    megjelenes: "Telefonszám",
                    tipus: "text",
                    value: "",
                    placeholder: "felhasználó név",
                },
                {
                    key: "publikus_email",
                    megjelenes: "Publikus emai cím",
                    tipus: "text",
                    value: "",
                    placeholder: "felhasználó név",
                },
                {
                    key: "rendelo_ajto_szam",
                    megjelenes: "Rendelő ajtó száma",
                    tipus: "text",
                    value: "",
                    placeholder: "felhasználó név",
                },
               

            ]

        },{
            atadas: 'S',
            plusz_adatok: [
                {
                    key: "vez_nev",
                    megjelenes: "Vezetéknév",
                    tipus: "text",
                    value: "",
                    placeholder: "felhasználó név",
                },
                {
                    key: "ker_nev",
                    megjelenes: "Keresztnév",
                    tipus: "text",
                    value: "",
                    placeholder: "felhasználó név",
                },
                {
                    key: "szemelyi_igazolvany_szam",
                    megjelenes: "Személyi igazolvány szám",
                    tipus: "text",
                    value: "",
                    placeholder: "felhasználó név",
                },
                {
                    key: "lakcim_varos",
                    megjelenes: "Város",
                    tipus: "text",
                    value: "",
                    placeholder: "felhasználó név",
                },
                {
                    key: "lakcim_irSzam",
                    megjelenes: "Irányitószám",
                    tipus: "text",
                    value: "",
                    placeholder: "felhasználó név",
                },
                {
                    key: "lakcim_utca",
                    megjelenes: "Utca",
                    tipus: "text",
                    value: "",
                    placeholder: "felhasználó név",
                },

            ]

        }
    
    ],
    },
        {
            key: "aktiv",
            megjelenes: "Aktív",
            tipus: "select",
            value: "",
            placeholder: "felhasználó név",
            url: "nincs",
            valaszto: [
              { value: 1, kiiras: "Aktív" },
              { value: 0, kiiras: "Inaktív" },
            ], 
        },
 
    
]

export const oltas_modosit = [
    {
        key: "oltoanyag_neve",
        megjelenes: "Oltóanyag neve",
        tipus: "text",
        value: "",
        placeholder: '',
      },
    {
      key: "tipus_id",
      megjelenes: "Oltás típusa",
      tipus: "select",
      value: "",
      placeholder: "",
      url: "http://localhost:8000/api/oltas_tipus",
      valaszto: [  { value: "", kiiras: "Válasz oltás tipust" },]
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
        megjelenes: "Receptköteles",
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
        tipus: "extended_text",
        value: "",
        placeholder: "",
      },
      {
        key: "adagolas",
        megjelenes: "Adagolás leírás",
        tipus: "extended_text",
        value: "",
        placeholder: "",
      },
      {
        key: "aktiv",
        megjelenes: "Forgalomban",
        tipus: "select",
      value: "",
      url: "nincs",
      placeholder: '',
      valaszto: [
        { value: 1, kiiras: "Forgalomban" },
        { value: 0, kiiras: "Nincs forgalomban" },
      ], 
      },
  ];

  export const beadando_mododsit = [
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


  export const oltas_tipus_modosit = [
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

export const felhasznalo_adatok_modosit = {
    url: "http://localhost:8000/api/felhasznalo",
    szuksegesAdatok: {
      felhasznalo_nev: "",
      szerepkor: "",
      felhasznalo_email: "",
      aktiv: ""
    },
  };



  export const admin_adatok_modosit = {
    url: "http://localhost:8000/api/admin",
    szuksegesAdatok: {
    vez_nev: "",
    ker_nev: "",
    }
  };


  export const orvos_adatok_modosit = {
    url: "http://localhost:8000/api/orvos",
    szuksegesAdatok: {
    vez_nev: "",
    ker_nev: "",
    tel_szam: "",
    publikus_email: "",
    rendelo_ajto_szam: "",
  }
}

export const szulo_adatok_modosit = {
    url: "http://localhost:8000/api/szulo",
    szuksegesAdatok: {
    vez_nev: "",
    ker_nev: "",
    szemelyi_igazolvany_szam: "",
    lakcim_varos: "",
    lakcim_irSzam: "",
    lakcim_utca: "",
  }
}
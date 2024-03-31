export const felhasznalo_adatok_hozzaAd = {
  url: "http://localhost:8000/api/felhasznalo",
  szuksegesAdatok: {
    felhasznalo_nev: "",
    jelszo: "",
    szerepkor: "",
    felhasznalo_email: "",
  },
};
export const admin_adatok_hozzaAd = {
  felhasznalo_id: "",
  vez_nev: "",
  ker_nev: "",
};

export const orvos_adatok_hozzaAd = {
  felhasznalo_id: "",
  vez_nev: "",
  ker_nev: "",
  tel_szam: "",
  publikus_email: "",
  rendelo_ajto_szam: "",
};


export const oltas_tipus_hozzaAd = {
  url: "http://localhost:8000/api/oltas_tipus",
  szuksegesAdatok: {
  tipus_elnev: "",
  kotelezo: "",
  leiras: ""
  }
};

export const beadando_hozzaAd = {
  url: "http://localhost:8000/api/beadando",
  szuksegesAdatok: {
  tipus_id: "",
  ev: "",
  honap: "",
  hanyadik: ""
  }
};



export const oltas_hozzaAd = {
  url: "http://localhost:8000/api/oltas",
  szuksegesAdatok: {
  tipus_id: "",
  oltoanyag_neve: "",
  forgalmazo: "",
  leiras: "",
  adagolas: "",
  receptre: ""
  }
};


<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use App\Models\Beadando;
use App\Models\Beadas;
use App\Models\Beszerzes;
use App\Models\Felhasznalo;
use App\Models\Gyerek;
use App\Models\Oltas;
use App\Models\Oltas_tipus;
use App\Models\Orvos;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class OrvosController extends Controller
{

    //lekérdezések
    public function betegek($orvos_id)
    {

        $betegek = Gyerek::where('orvos_id', $orvos_id)
            ->select('gyerek_taj', 'vez_nev', 'ker_nev', 'szul_datum', 'szul_hely', 'lakcim_varos', 'lakcim_irSzam', 'lakcim_utca')
            ->get();

        return $betegek;
    }

    public function oltasTipusNev()
    {
        $oltasTipus = Oltas_tipus::select("tipus_id", "tipus_elnev")
            ->get();

        return $oltasTipus;
    }

    public function oltasNev()
    {
        $oltas = Oltas::select("oltas_id", 'oltoanyag_neve')
            ->get();

        return $oltas;
    }

    public function keszletOltasId($orvos_id, $tipus_id)
    {
        $oltas_tipusid = Oltas::where("tipus_id", $tipus_id)
            ->join("beszerzes", "beszerzes.oltas_id", "=", "oltas.oltas_id")
            ->where("beszerzes.orvos_id", $orvos_id)
            ->whereNull('beszerzes.megsemmesites_datuma')
            ->select("beszerzes.beszerzes_id", 'beszerzes.oltas_id', 'oltas.oltoanyag_neve', "beszerzes.darab", "beszerzes.beszerzes_datuma", "beszerzes.lejarati_datuma")
            ->get();

        return $oltas_tipusid;
    }


    public function beteg($gyerek_taj)
    {
        $beteg = Gyerek::where('gyerek_taj', $gyerek_taj)
            ->select('gyerek_taj', 'vez_nev', 'ker_nev', 'szul_datum', 'szul_hely', 'lakcim_varos', 'lakcim_irSzam', 'lakcim_utca', 'erzekenyseg')
            ->get();

        $betegSzulo = DB::table('gyereks')
            ->join('szulos', 'gyereks.szulo_id', '=', 'szulos.felhasznalo_id')
            ->join('felhasznalos', 'szulos.felhasznalo_id', '=', 'felhasznalos.id')
            ->where('gyerek_taj', $gyerek_taj)
            ->select('szulos.vez_nev', 'szulos.ker_nev', 'szulos.telefonszam', 'szulos.lakcim_varos', 'szulos.lakcim_irSzam', 'szulos.lakcim_utca', 'felhasznalos.felhasznalo_nev', 'felhasznalos.felhasznalo_email')
            ->get();

        $beadottVakcina = DB::table('beadandos')
            ->join('beadas', 'beadas.beadando_id', '=', "beadandos.beadando_id")
            ->join('oltas_tipuses', 'beadandos.tipus_id', '=', 'oltas_tipuses.tipus_id')
            ->join('orvos', 'beadas.orvos_id', '=', 'orvos.felhasznalo_id')
            ->join('oltas', 'oltas.oltas_id', '=', 'beadas.oltas_id')
            ->where('beadandos.gyerek_id', $gyerek_taj)
            ->select('oltas_tipuses.tipus_elnev', 'oltas.oltoanyag_neve', 'beadandos.hanyadik', 'beadas.beadas_datuma', 'orvos.vez_nev', 'orvos.ker_nev', 'beadas.megjegyzes')
            ->get();

        $beadandoVakcina = DB::table('beadandos')
            ->join('oltas_tipuses', 'beadandos.tipus_id', '=', 'oltas_tipuses.tipus_id')
            ->select('oltas_tipuses.tipus_id', 'beadandos.beadando_id', 'oltas_tipuses.tipus_elnev', 'beadandos.ev', 'beadandos.honap', 'beadandos.hanyadik', 'beadandos.beadva')
            ->where('beadandos.gyerek_id', $gyerek_taj)
            ->get();


        return [$beteg,  $betegSzulo, $beadottVakcina, $beadandoVakcina];
    }

    public function orvos($orvos_id)
    {

        $orvos = DB::table('felhasznalos')
            ->join('orvos', 'orvos.felhasznalo_id', '=', 'felhasznalos.id')
            ->where('felhasznalos.id', $orvos_id)
            ->where('felhasznalos.szerepkor', '=', 'O')
            ->select('felhasznalos.felhasznalo_nev', 'felhasznalos.felhasznalo_email', 'orvos.vez_nev', 'orvos.ker_nev', 'orvos.tel_szam', 'orvos.publikus_email', 'orvos.rendelo_ajto_szam')
            ->get();



        return $orvos;
    }



    public function keszlet($orvos_id)
    {
        $keszlet = Beszerzes::where('orvos_id', $orvos_id)
            ->join('oltas', 'beszerzes.oltas_id', '=', 'oltas.oltas_id')
            ->join('oltas_tipuses', 'oltas.tipus_id', '=', 'oltas_tipuses.tipus_id')
            ->whereNull('beszerzes.megsemmesites_datuma')
            ->select(['beszerzes.beszerzes_id', 'oltas.oltoanyag_neve', 'beszerzes.darab', 'beszerzes.beszerzes_datuma', 'beszerzes.lejarati_datuma',  'oltas_tipuses.tipus_elnev'])
            ->get();

        return $keszlet;
    }

    public function megsemmisitettKeszlet($orvos_id)
    {
        $keszlet = Beszerzes::where('orvos_id', $orvos_id)
            ->join('oltas', 'beszerzes.oltas_id', '=', 'oltas.oltas_id')
            ->join('oltas_tipuses', 'oltas.tipus_id', '=', 'oltas_tipuses.tipus_id')
            ->whereNotNull('beszerzes.megsemmesites_datuma')
            ->select('oltas.oltoanyag_neve', 'beszerzes.darab', 'beszerzes.beszerzes_datuma', 'beszerzes.lejarati_datuma', 'oltas_tipuses.tipus_elnev', 'beszerzes.megsemmesites_datuma')
            ->get();

        return $keszlet;
    }

    //Modositások


    public function betegModosit(Request $request, $gyerek_taj, $orvos_id, $felhasznalo_email)
    {

        $szulo_id = Felhasznalo::where('felhasznalo_email', $felhasznalo_email)
            ->where('szerepkor', '=', 'S')
            ->value('id');


        $gyerek = Gyerek::find($gyerek_taj);
        $gyerek->gyerek_taj = $request->gyerek_taj;
        $gyerek->vez_nev = $request->vez_nev;
        $gyerek->ker_nev = $request->ker_nev;
        $gyerek->szul_datum = $request->szul_datum;
        $gyerek->szul_hely = $request->szul_hely;
        $gyerek->orvos_id = $orvos_id;
        $gyerek->szulo_id = $szulo_id;
        $gyerek->lakcim_varos = $request->lakcim_varos;
        $gyerek->lakcim_irSzam = $request->lakcim_irSzam;
        $gyerek->lakcim_utca = $request->lakcim_utca;
        $gyerek->erzekenyseg = $request->erzekenyseg;
        $gyerek->save();

        Beadando::where('gyerek_id', $gyerek_taj)
            ->update(['gyerek_id' => $request->gyerek_taj]);
    }

    public function keszletModosit($keszlet_id)
    {
    }

    public function orvosModosit(Request $request, $orvos_id)
    {

        DB::table('felhasznalos')
            ->where('id', $orvos_id)
            ->update(['felhasznalo_nev' => $request->felhasznalo_nev, 'felhasznalo_email' => $request->felhasznalo_email]);

        DB::table('orvos')
            ->where('orvos.felhasznalo_id', $orvos_id)
            ->update(['vez_nev' => $request->vez_nev, 'ker_nev' => $request->ker_nev, 'tel_szam' => $request->tel_szam, 'publikus_email' => $request->publikus_email, 'rendelo_ajto_szam' => $request->rendelo_ajto_szam]);
    }


    public function keszletMegsemmisitese($beszerzes_id)
    {
        DB::table('beszerzes')
            ->where('beszerzes_id', $beszerzes_id)
            ->update(['megsemmesites_datuma' => date(now())]);
    }


    //létrehozások

    public function ujBeteg(Request $request, $orvos_id, $felhasznalo_email)
    {

        $szulo_id = Felhasznalo::where('felhasznalo_email', $felhasznalo_email)
            ->where('szerepkor', '=', 'S')
            ->value('id');

        $record = new Gyerek();
        $record->gyerek_taj = $request->gyerek_taj;
        $record->vez_nev = $request->vez_nev;
        $record->ker_nev = $request->ker_nev;
        $record->szul_datum = $request->szul_datum;
        $record->szul_hely = $request->szul_hely;
        $record->orvos_id = $orvos_id;
        $record->szulo_id = $szulo_id;
        $record->lakcim_varos = $request->lakcim_varos;
        $record->lakcim_irSzam = $request->lakcim_irSzam;
        $record->lakcim_utca = $request->lakcim_utca;
        $record->erzekenyseg = $request->erzekenyseg;

        $record->save();

        return Gyerek::find($record->gyerek_taj);
    }

    public function ujKeszlet(Request $request, $orvos_id, $oltas_id)
    {
        $record = new Beszerzes();
        $record->oltas_id = $oltas_id;
        $record->orvos_id = $orvos_id;
        $record->darab = $request->darab;
        $record->beszerzes_datuma = $request->beszerzes_datuma;
        $record->lejarati_datuma = $request->lejarati_datuma;

        $record->save();

        return Beszerzes::find($record->$oltas_id);
    }

    public function ujBeadas(Request $request, $orvos_id, $oltas_id, $beadando_id, $beszerzes_id)
    {
        $record = new Beadas();
        $record->orvos_id = $orvos_id;
        $record->oltas_id = $oltas_id;
        $record->beadando_id = $beadando_id;
        $record->beadas_datuma = $request->beadas_datuma;
        $record->megjegyzes = $request->megjegyzes;

        $record->save();

        Beadando::where('beadando_id', $beadando_id)
            ->update(['beadva' => true]);


        $darab = Beszerzes::where('orvos_id', $orvos_id)
            ->where('beszerzes_id', $beszerzes_id)
            ->value('darab');
        if ($darab != 1) {
            DB::table('beszerzes')
                ->where('orvos_id', $orvos_id)
                ->where('beszerzes_id', $beszerzes_id)
                ->where('darab', '>', 0)
                ->update(['darab' => $darab - 1]);
        } else {
            DB::table('beszerzes')
                ->where('orvos_id', $orvos_id)
                ->where('beszerzes_id', $beszerzes_id)
                ->where('darab', '=', 1)
                ->delete();
        }
    }

    public function ujBeadando(Request $request, $gyerek_id, $tipus_id)
    {
        $record = new Beadando();
        $record->gyerek_id = $gyerek_id;
        $record->tipus_id = $tipus_id;
        $record->ev = $request->ev;
        $record->honap = $request->honap;
        $record->hanyadik = $request->hanyadik;
        $record->beadva = false;

        $record->save();
    }
}

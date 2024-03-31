<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use App\Models\Beadando;
use App\Models\Beadas;
use App\Models\Beszerzes;
use App\Models\Felhasznalo;
use App\Models\Gyerek;
use App\Models\Oltas;
use App\Models\Orvos;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class OrvosController extends Controller
{

    
    public function orvosIndex()
    {
        $orvosok = Orvos::all();
        return view('orvos.index', ['orvosok' => $orvosok]);
    }

    public function orvosShow()
    {
        $orvosok = Orvos::all();
        return response()->json($orvosok);
    }


 

    
    public function update(Request $request, $id)
    {
        $record = Orvos::find($id);
        $record->vez_nev = $request->vez_nev;
        $record->ker_nev = $request->ker_nev;
        $record->tel_szam = $request->tel_szam;
        $record->publikus_email = $request->publikus_email;
        $record->rendelo_ajto_szam = $request->rendelo_ajto_szam;
        $record->save();
        return Orvos::find($record->felhasznalo_id);
    }
    public function store(Request $request)
    {
        $record = new Orvos();
        $record->felhasznalo_id = $request->felhasznalo_id;
        $record->vez_nev = $request->vez_nev;
        $record->ker_nev = $request->ker_nev;
        $record->tel_szam = $request->tel_szam;
        $record->publikus_email = $request->publikus_email;
        $record->rendelo_ajto_szam = $request->rendelo_ajto_szam;
        $record->save();
    }
    

    //lekérdezések
    public function betegek($orvos_id)
    {

        $betegek = Gyerek::where('orvos_id', $orvos_id)
            ->select('gyerek_taj', 'vez_nev', 'ker_nev', 'szul_datum', 'szul_hely', 'lakcim_varos', 'lakcim_irSzam', 'lakcim_utca')
            ->get();

        return $betegek;
    }

    public function oltasNev()
    {
        $oltas = Oltas::select("oltas_id", 'forgalmazo')
            ->get();

        return $oltas;
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
            ->select('szulos.vez_nev', 'szulos.ker_nev', 'szulos.lakcim_varos', 'szulos.lakcim_irSzam', 'szulos.lakcim_utca', 'felhasznalos.felhasznalo_nev', 'felhasznalos.felhasznalo_email')
            ->get();

        //megkapott oltások
        $beadottVakcina = DB::table('beadas')
            ->join('beadandos', 'beadas.beadando_id', '=', "beadandos.beadando_id")
            ->join('oltas_tipuses', 'beadandos.tipus_id', '=', 'oltas_tipuses.tipus_id')
            ->where('beadas.gyerek_id', $gyerek_taj)
            ->select('oltas_tipuses.tipus_elnev', 'beadas.beadas_datuma')
            ->get();

        //később megkell kapnia oltások
        /*
        $beadandoVakcina = DB::table('beadando')
        ->join('beadandos', 'beadas.beadando_id', '=', "beadandos.beadando_id")
        ->join('oltas_tipuses', 'beadandos.tipus_id', '=', 'oltas_tipuses.tipus_id')
        ->where('beadas.gyerek_id', $gyerek_taj)
        ->select('oltas_tipuses.tipus_elnev', 'beadando.ev', 'beadando.honap', 'beadando.hanyadik')
        ->get();
        */



        return [$beteg,  $betegSzulo, $beadottVakcina];
    }


    public function keszlet($orvos_id)
    {
        $keszlet = Beszerzes::where('orvos_id', $orvos_id)
            ->join('oltas', 'beszerzes.oltas_id', '=', 'oltas.oltas_id')
            ->join('oltas_tipuses', 'oltas.tipus_id', '=', 'oltas_tipuses.tipus_id')
            ->whereNull('beszerzes.megsemmesites_datuma')
            ->select(['oltas_tipuses.tipus_elnev', 'beszerzes.darab', 'beszerzes.beszerzes_datuma', 'beszerzes.lejarati_datuma', 'beszerzes.beszerzes_id'])
            ->get();

        return $keszlet;
    }

    public function megsemmisitettKeszlet($orvos_id)
    {
        $keszlet = Beszerzes::where('orvos_id', $orvos_id)
            ->join('oltas', 'beszerzes.oltas_id', '=', 'oltas.oltas_id')
            ->join('oltas_tipuses', 'oltas.tipus_id', '=', 'oltas_tipuses.tipus_id')
            ->whereNotNull('beszerzes.megsemmesites_datuma')
            ->select('oltas_tipuses.tipus_elnev', 'beszerzes.darab', 'beszerzes.beszerzes_datuma', 'beszerzes.lejarati_datuma', 'beszerzes.megsemmesites_datuma')
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

        Beadas::where('gyerek_id', $gyerek_taj)
            ->update(['gyerek_id' => $request->gyerek_taj]);
    }

    public function keszletModosit($keszlet_id)
    {
    }

    public function keszletMegsemmisitese($beszerzes_id)
    {
        DB::table('beszerzes')
            ->where('beszerzes_id', $beszerzes_id)
            ->update(['megsemmesites_datuma' => date(now())]);
    }


    public function keszletLevon($beszerzes_id, $orvos_id)
    {

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
        $record->ker_nev = $request->szul_datum;
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

    public function ujBeadas(Request $request, $orvos_id)
    {
        $record = new Beadas();
        $record->orvos_id = $orvos_id;
        $record->gyerek_id = $request->gyerek_id;
        $record->oltas_id = $request->oltas_id;
        $record->beadando_id = $request->beadando_id;
        $record->beadas_datuma = $request->beadas_datuma;
        $record->megjegyzes = $request->megjegyzes;

        $record->save();
    }

    public function ujBeadando(Request $request, $tipus_id)
    {
        $record = new Beadando();
        $record->tipus_id = $tipus_id;
        $record->ev = $request->ev;
        $record->honap = $request->honap;
        $record->hanyadik = $request->hanyadik;

        $record->save();
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\Felhasznalo;
use App\Models\Orvos;
use App\Models\Szulo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\QueryException;

class SzuloController extends Controller
{
    public function szuloIndex()
    {
        $szulok = Szulo::all();
        return view('szulo.index', ['szulok' => $szulok]);
    }

    public function szuloShow($id)
    {
        $szulo = Szulo::find($id);
        return view('szulo.show', ['szulo' => $szulo]);
    }

    public function store(Request $request)
    {
        $record = new Szulo();
        $record->vez_nev = $request->vez_nev;
        $record->ker_nev = $request->ker_nev;
        $record->szemelyi_igazolvany_szam = $request->szemelyi_igazolvany_szam;
        $record->lakcim_varos = $request->lakcim_varos;
        $record->lakcim_irSzam = $request->lakcim_irSzam;
        $record->lakcim_utca = $request->lakcim_utca;
        $record->save();
    }


    public function atmasol($felhasznalo_id)
    {
        $szulo = Felhasznalo::find($felhasznalo_id);
        $idValtozo = $szulo->felhasznalo_id;
        return response()->json($idValtozo);
    }


    public function update(Request $request, $id)
    {
        DB::update('UPDATE szulos SET vez_nev = ?, ker_nev = ?, szemelyi_igazolvany_szam = ?, lakcim_varos = ?, lakcim_irSzam = ?, lakcim_utca = ? WHERE felhasznalo_id = ?', [$request->vez_nev, $request->ker_nev, $request->szemelyi_igazolvany_szam, $request->lakcim_varos, $request->lakcim_irSzam, $request->lakcim_utca,   $id]);
        $user = Szulo::where('felhasznalo_id', $id)->first();
        return $user;
    }

   

    public function szuloModosit(Request $request, $szulo_id)
    {

        DB::table('felhasznalos')
            ->where('id', $szulo_id)
            ->update(['felhasznalo_nev' => $request->felhasznalo_nev, 'felhasznalo_email' => $request->felhasznalo_email]);

        DB::table('szulos')
            ->where('szulos.felhasznalo_id', $szulo_id)
            ->update(['vez_nev' => $request->vez_nev, 'ker_nev' => $request->ker_nev, 'telefonszam' => $request->telefonszam, 'szemelyi_igazolvany_szam' => $request->szemelyi_igazolvany_szam, 'lakcim_varos' => $request->lakcim_varos, 'lakcim_irSzam' => $request->lakcim_irSzam, 'lakcim_utca' => $request->lakcim_utca]);
    }

    public function szulo($szulo_id)
    {

        $szulo = DB::table('felhasznalos')
            ->join('szulos', 'szulos.felhasznalo_id', '=', 'felhasznalos.id')
            ->where('felhasznalos.id', $szulo_id)
            ->where('felhasznalos.szerepkor', '=', 'S')
            ->select('felhasznalos.felhasznalo_nev', 'felhasznalos.felhasznalo_email', 'szulos.vez_nev', 'szulos.ker_nev', 'szulos.szemelyi_igazolvany_szam', 'szulos.telefonszam', 'szulos.lakcim_varos', 'szulos.lakcim_irSzam', 'szulos.lakcim_utca')
            ->get();



        return $szulo;
    }
}

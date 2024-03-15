<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Models\Felhasznalo;
use App\Http\Controllers\SearchController;
use Illuminate\Contracts\View\View;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

class FelhasznaloController extends Controller
{

    /*
    public function felhasznaloIndex()
    {
        $felhasznalok = Felhasznalo::all();
        return view('felhasznalo.index', ['felhasznalok' => $felhasznalok]);
    }

    public function felhasznaloShow($id)
    {
        $felhasznalo =Felhasznalo::find($id);
        return view('felhasznalo.show', ['felhasznalo' => $felhasznalo]);
    }
    */
    //felhasználók

    public function index()
    {
        $felhasznalok = Felhasznalo::all();
        return response()->json($felhasznalok);
    }

    public function update(Request $request, $id)
    {
        $user = Felhasznalo::find($id);
        $user->felhasznalo_nev = $request->felhasznalo_nev;
        $user->jelszo = $request->jelszo;
        $user->szerepkor = $request->szerepkor;
        $user->felhasznalo_email = $request->felhasznalo_email;
        $user->aktiv = $request->aktiv;
        $user->save();

        return Felhasznalo::find($user->felhasznalo_id);
    }

    public function store(Request $request)
    {
        $record = new Felhasznalo();
        $record->felhasznalo_nev = $request->felhasznalo_nev;
        $record->jelszo = $request->jelszo;
        $record->szerepkor = $request->szerepkor;
        $record->felhasznalo_email = $request->felhasznalo_email;
        $record->aktiv = true;
        $record->save();
    }

    public function show($id)
    {
        return response()->json(Felhasznalo::find($id));
    }


    public function felhasznaloKeres_by_name($felhasznalo_nev)
    {
        $user = (DB::table('felhasznalos as f')
            ->selectRaw('*')
            ->where('f.felhasznalo_nev', $felhasznalo_nev)
            ->get());
        return $user;
    }

    public function bejelentkezes_ellenorzes($tabla, $felhasznalo_nev, $megfelelo_jelszo)
    {
        if ("" == $felhasznalo_nev) {
            $tabla = ["Nincs ilyen felhasználó"];
            return ($tabla);
        } else {
            if ($megfelelo_jelszo) {
                return ($tabla);
            } else {
                $tabla = ["helytelen jelszó"];
                return ($tabla);
            }
        }
    }


    public function bejelentkezett_felhasznalo(){
        return response()->json(Auth::user());	
    }






    public function bejelentkezes($felhasznalo_nev, $jelszo)
    {
        $felhasznalo = FelhasznaloController::felhasznaloKeres_by_name($felhasznalo_nev);
        $keresett_jelszo = "";
        $talalt_felhasznalo_nev = "";
        $tabla = [];
        foreach ($felhasznalo as $keresett) {
            $keresett_jelszo = $keresett->jelszo;
            $tabla = ["Helyes jelszó", $keresett];
            $talalt_felhasznalo_nev = $keresett->felhasznalo_nev;
        }
        return response()->json(FelhasznaloController::bejelentkezes_ellenorzes($tabla, $talalt_felhasznalo_nev, $jelszo == $keresett_jelszo));
    }

    public function felhasznaloAdatok($join){
        $aktiv = DB::table('felhasznalos as f')
        ->join($join, $join.'.felhasznalo_id', '=','f.id')
        ->selectRaw('f.id, f.felhasznalo_nev, f.felhasznalo_email,  vez_nev, ker_nev, "aktív" as aktiv')
        ->where('f.aktiv', 1);
        $inaktiv = DB::table('felhasznalos as f')
        ->join($join, $join.'.felhasznalo_id', '=','f.id')
        ->selectRaw('f.id, f.felhasznalo_nev, f.felhasznalo_email,  vez_nev, ker_nev, "ínaktív" as aktiv')
        ->where('f.aktiv', 0);
        return $aktiv->union($inaktiv);
        }


    public function osszes_felhasznalo(){
        $szulo = FelhasznaloController::felhasznaloAdatok('szulos');
        $orvos = FelhasznaloController::felhasznaloAdatok('orvos');
        $admin = FelhasznaloController::felhasznaloAdatok('admins');
        return  response()->json($szulo->union($orvos)->union($admin)->get());
    }

    public function filterBySzulo(){
        $user = DB::table('felhasznalos as f')
        ->join('szulos', 'szulos.felhasznalo_id', '=','f.id')
        ->selectRaw('f.id, f.felhasznalo_nev, f.felhasznalo_email,  szulos.vez_nev, szulos.ker_nev, szulos.szemelyi_igazolvany_szam, "aktív" as aktiv')
        ->get();
        return  response()->json($user);
    }

    public function filterByOrvos(){
        $user_true = DB::table('felhasznalos as f')
        ->join('orvos', 'orvos.felhasznalo_id', '=','f.id')
       // ->select('*')
        ->selectRaw('f.id, f.felhasznalo_nev, f.felhasznalo_email,  orvos.vez_nev, orvos.ker_nev, "aktív" as aktiv')
        ->where('f.aktiv', '=', true);
        $user_false = DB::table('felhasznalos as f')
        ->join('orvos', 'orvos.felhasznalo_id', '=','f.id')
     //   ->select('*')
        ->selectRaw('id, felhasznalo_nev, felhasznalo_email,  vez_nev, ker_nev, "inaktív" as aktiv')
        ->where('f.aktiv', '=', false);
        return  response()->json($user_true->union($user_false)->get());
    }

    public function filterByAdmin(){
        $user_true = DB::table('felhasznalos as f')
        ->join('admins', 'admins.felhasznalo_id', '=','f.id')
       // ->select('*')
        ->selectRaw('f.id, f.felhasznalo_nev, f.felhasznalo_email,  admins.vez_nev, admins.ker_nev, "aktív" as aktiv')
        ->where('f.aktiv', '=', true);
        $user_false = DB::table('felhasznalos as f')
        ->join('admins', 'admins.felhasznalo_id', '=','f.id')
     //   ->select('*')
        ->selectRaw('id, felhasznalo_nev, felhasznalo_email,  vez_nev, ker_nev, "inaktív" as aktiv')
        ->where('f.aktiv', '=', false);
        return  response()->json($user_true->union($user_false)->get());
       // return  response()->json($user_true);
    }


    public function felhasznalo_id(){
        return  response()->json(DB::table('felhasznalos')->selectRaw('id as value, felhasznalo_nev as kiiras')->get());
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\Felhasznalo;
use Illuminate\Contracts\View\View;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

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
              //  return(  $jelszo == $keresett_jelszo);
                return ($tabla);
            } else {
                $tabla = ["helytelen jelszó"];
                return ($tabla);
            }
        }
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
        return response()->json(FelhasznaloController::bejelentkezes_ellenorzes($tabla, $talalt_felhasznalo_nev, $jelszo == $keresett_jelszo ));
    }
}

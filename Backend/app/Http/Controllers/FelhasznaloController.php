<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Models\Felhasznalo;
use App\Http\Controllers\SearchController;
use App\Models\Szulo;
use Illuminate\Contracts\View\View;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

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
        $record->jelszo = Hash::make($request->jelszo);
        $record->szerepkor = $request->szerepkor;
        $record->felhasznalo_email = $request->felhasznalo_email;
        $record->aktiv = true;
        $record->save();
    }

    public function idKeres($email)
    {
        $user = (DB::table('felhasznalos as f')
            ->select('f.id', 'f.szerepkor')
            ->where('f.felhasznalo_email', $email)
            ->get());
        return $user;
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


    public function bejelentkezett_felhasznalo()
    {
        return response()->json(Auth::user());
    }



    public function teszt()
    {
        $felhasznalo_nev = "kovacsBela";
        $jelszo = "ABCabc123";
        $felhasznalo = DB::table('felhasznalos')
            ->select("jelszo", "szerepkor", "aktiv")
            ->where('felhasznalo_nev', '=', $felhasznalo_nev)
            ->get();
        if (Hash::check($jelszo, $felhasznalo[0]->jelszo)) {
            return ["Helyes jelszó", $felhasznalo[0]->szerepkor, $felhasznalo[0]->aktiv];
        } else {
            return "Helytelen jelszó";
        };
    }


    public function bejelentkezes($felhasznalo_nev, $jelszo)
    {
        $felhasznalo = DB::table('felhasznalos')
            ->select("jelszo", "szerepkor", "aktiv", "id")
            ->where('felhasznalo_nev', '=', $felhasznalo_nev)
            ->get();
        if (Hash::check($jelszo, $felhasznalo[0]->jelszo)) {
            return ["Helyes jelszó", $felhasznalo[0]->aktiv, $felhasznalo[0]->szerepkor, $felhasznalo[0]->id];
        } else {
            return "Helytelen jelszó";
        };
    }

    public function felhasznaloAdatok($join)
    {
        $aktiv = DB::table('felhasznalos as f')
            ->join($join, $join . '.felhasznalo_id', '=', 'f.id')
            ->selectRaw('f.id, f.felhasznalo_nev, f.felhasznalo_email,  vez_nev, ker_nev, "aktív" as aktiv')
            ->where('f.aktiv', 1);
        $inaktiv = DB::table('felhasznalos as f')
            ->join($join, $join . '.felhasznalo_id', '=', 'f.id')
            ->selectRaw('f.id, f.felhasznalo_nev, f.felhasznalo_email,  vez_nev, ker_nev, "ínaktív" as aktiv')
            ->where('f.aktiv', 0);
        return $aktiv->union($inaktiv);
    }


    public function osszes_felhasznalo()
    {
        $szulo = FelhasznaloController::felhasznaloAdatok('szulos');
        $orvos = FelhasznaloController::felhasznaloAdatok('orvos');
        $admin = FelhasznaloController::felhasznaloAdatok('admins');
        return  response()->json($szulo->union($orvos)->union($admin)->get());
    }

    public function filterBySzulo()
    {
        $user = DB::table('felhasznalos as f')
            ->join('szulos', 'szulos.felhasznalo_id', '=', 'f.id')
            ->selectRaw('f.id, f.felhasznalo_nev, f.felhasznalo_email,  szulos.vez_nev, szulos.ker_nev, szulos.szemelyi_igazolvany_szam, "aktív" as aktiv')
            ->get();
        return  response()->json($user);
    }

    public function filterByOrvos()
    {
        $user_true = DB::table('felhasznalos as f')
            ->join('orvos', 'orvos.felhasznalo_id', '=', 'f.id')
            // ->select('*')
            ->selectRaw('f.id, f.felhasznalo_nev, f.felhasznalo_email,  orvos.vez_nev, orvos.ker_nev, "aktív" as aktiv')
            ->where('f.aktiv', '=', true);
        $user_false = DB::table('felhasznalos as f')
            ->join('orvos', 'orvos.felhasznalo_id', '=', 'f.id')
            //   ->select('*')
            ->selectRaw('id, felhasznalo_nev, felhasznalo_email,  vez_nev, ker_nev, "inaktív" as aktiv')
            ->where('f.aktiv', '=', false);
        return  response()->json($user_true->union($user_false)->get());
    }

    public function filterByAdmin()
    {
        $user_true = DB::table('felhasznalos as f')
            ->join('admins', 'admins.felhasznalo_id', '=', 'f.id')
            // ->select('*')
            ->selectRaw('f.id, f.felhasznalo_nev, f.felhasznalo_email,  admins.vez_nev, admins.ker_nev, "aktív" as aktiv')
            ->where('f.aktiv', '=', true);
        $user_false = DB::table('felhasznalos as f')
            ->join('admins', 'admins.felhasznalo_id', '=', 'f.id')
            //   ->select('*')
            ->selectRaw('id, felhasznalo_nev, felhasznalo_email,  vez_nev, ker_nev, "inaktív" as aktiv')
            ->where('f.aktiv', '=', false);
        return  response()->json($user_true->union($user_false)->get());
        // return  response()->json($user_true);
    }


    public function felhasznalo_id()
    {
        return  response()->json(DB::table('felhasznalos')->selectRaw('id as value, felhasznalo_nev as kiiras')->get());
    }


    public function admin_id()
    {
    }


    public function felhasznaloSzuloAdatok()
    {
        $felhasznalo = Felhasznalo::select("felhasznalo_nev", 'felhasznalo_email',)
            ->get();

        $szulo = Szulo::select("szemelyi_igazolvany_szam", "telefonszam")
            ->get();

        return [$felhasznalo, $szulo];
    }

    public function jelszoModositas($id, $regiJelszo, $ujJelszo)
    {
        $felhasznalo = DB::table('felhasznalos')
            ->select("jelszo")
            ->where('id', $id)
            ->get();
        if (Hash::check($regiJelszo, $felhasznalo[0]->jelszo)) {
            $felhasznalo = DB::table('felhasznalos')
                ->where('id', $id)
                ->update(['jelszo' => Hash::make($ujJelszo)]);
            return "Sikerült";
        }else{
            return "Hiba";
        }
    }
}

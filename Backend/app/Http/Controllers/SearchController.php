<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Felhasznalo;
use Illuminate\Contracts\View\View;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

class SearchController extends Controller
{
  /*  
    $szulo = DB::table('felhasznalos as f')
    ->join('szulos', 'szulos.felhasznalo_id', '=','f.id')
    ->selectRaw('f.id, f.felhasznalo_nev, f.felhasznalo_email,  szulos.vez_nev, szulos.ker_nev, "aktív" as aktiv');

*/



  public function aktiv_felhasznalok($join)
  {
    $felhasznalok = DB::table('felhasznalos as f')
      ->join($join, $join . '.felhasznalo_id', '=', 'f.id')
      ->select('f.id', 'f.felhasznalo_nev', 'f.felhasznalo_email', 'vez_nev', 'ker_nev', DB::raw('"aktív" as aktiv'))
      ->where('f.aktiv', '=', true);
      return $felhasznalok;
  }

  public function inaktiv_felhasznalok($join)
  {
    $felhasznalok = DB::table('felhasznalos as f')
      ->join($join, $join . '.felhasznalo_id', '=', 'f.id')
      ->select('f.id', 'f.felhasznalo_nev', 'f.felhasznalo_email', 'vez_nev', 'ker_nev', DB::raw('"inaktív" as aktiv'))
      ->where('f.aktiv', '=', false);
      return $felhasznalok;
  }
  public function felhasznaloAdatok($join, $adatok)
  {
    $felhasznalo_nev = $adatok->felhasznalo_nev;
    $felhasznalo_email = $adatok->felhasznalo_email;
    $vez_nev = $adatok->vez_nev;
    $ker_nev = $adatok->ker_nev;
    $aktivitas = $adatok->aktiv;
    if ($aktivitas !== null) {
      if ($aktivitas == 0) {
        $felhasznalok = SearchController::inaktiv_felhasznalok($join);
      } else {
        $felhasznalok = SearchController::aktiv_felhasznalok($join);
    }
      }
     else {
      $felhasznalok = SearchController::aktiv_felhasznalok($join)->union(SearchController::inaktiv_felhasznalok($join));
     }
     if($felhasznalo_nev !== null){
      $felhasznalok->where('f.felhasznalo_nev', 'LIKE', "%$felhasznalo_nev%");;
    }
    if($felhasznalo_email !== null){
      $felhasznalok->where('f.felhasznalo_email', 'LIKE', "%$felhasznalo_email%");;
    }
    if($vez_nev !== null){
      $felhasznalok->where( 'vez_nev', 'LIKE', "%$vez_nev%");;
    } 
    if($ker_nev !== null){
      $felhasznalok->where('ker_nev', 'LIKE', "%$ker_nev%");;
    }
    return $felhasznalok;
  
  }

  public function felhasznalo_nev_szuro(Request $adat)
  {
    $felhasznalo_nev = $adat->felhasznalo_nev;

    $felhasznalok = DB::table('felhasznalos as f')
      ->select('f.id', 'f.felhasznalo_nev', 'f.felhasznalo_email',  DB::raw('"inaktív" as aktiv'));
    if ($felhasznalo_nev !== 'null') {
      $felhasznalok->where('f.felhasznalo_nev', 'LIKE', "%$felhasznalo_nev%");
    }

    return $felhasznalok->get();
  }


  public function osszes_felhasznalo(Request $adatok)
  {
    $szulo = SearchController::felhasznaloAdatok('szulos', $adatok);
    $orvos = SearchController::felhasznaloAdatok('orvos', $adatok);
    $admin = SearchController::felhasznaloAdatok('admins', $adatok);
    return  response()->json($szulo->union($orvos)->union($admin)->get());
   // return $adatok;
  }




  public function search(Request $request)
  {
    $firstName = $request->input('firstName');
    $lastName = $request->input('lastName');
    $position = $request->input('position');

    // Itt dolgozd fel a kapott adatokat (például, futtasd le a keresést az adatbázisban)

    return response()->json($request);
  }
}

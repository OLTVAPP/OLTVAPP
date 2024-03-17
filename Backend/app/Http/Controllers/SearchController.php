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


/*
  public function aktiv_felhasznalok($join, $adatok)
  {
    $felhasznalo_nev = $adatok->felhasznalo_nev;
    $felhasznalo_email = $adatok->felhasznalo_email;
    $vez_nev = $adatok->vez_nev;
    $ker_nev = $adatok->ker_nev;
    $felhasznalok = DB::table('felhasznalos as f')
      ->join($join, $join . '.felhasznalo_id', '=', 'f.id')
      ->select('f.id', 'f.felhasznalo_nev', 'f.felhasznalo_email', 'vez_nev', 'ker_nev', DB::raw('"aktív" as aktiv'))
      ->where('f.aktiv', '=', true);
      return $felhasznalok;
  }
 */
  public function ertekKeresesek($kod, $ertek, $mezo){
    if($ertek !== null){
      $kod->where($mezo, 'LIKE', "%$ertek%");;
    }
    return $kod;
  }


  public function aktiv_felhasznalok($join, $adatok, $szoveg, $aktiv)
  {
    $felhasznalo_nev = $adatok->felhasznalo_nev;
    $felhasznalo_email = $adatok->felhasznalo_email;
    $vez_nev = $adatok->vez_nev;
    $ker_nev = $adatok->ker_nev;
    $felhasznalok = DB::table('felhasznalos as f')
      ->join($join, $join . '.felhasznalo_id', '=', 'f.id')
      ->select('f.id', 'f.felhasznalo_nev', 'f.felhasznalo_email', 'vez_nev', 'ker_nev', DB::raw('"'.$szoveg.'" as aktiv'))
      ->where('f.aktiv', '=', $aktiv);
      $felhasznalok = SearchController::ertekKeresesek($felhasznalok, $felhasznalo_nev, "f.felhasznalo_nev");
      $felhasznalok = SearchController::ertekKeresesek($felhasznalok, $felhasznalo_email, "f.felhasznalo_email");
      $felhasznalok = SearchController::ertekKeresesek($felhasznalok, $vez_nev, "vez_nev");
      $felhasznalok = SearchController::ertekKeresesek($felhasznalok, $ker_nev, "ker_nev"); 
      return $felhasznalok;
  }
  public function felhasznaloAdatok($join, $adatok)
  {
    $aktivitas = $adatok->aktiv;
    if ($aktivitas !== null) {
      if ($aktivitas == false) {
        $felhasznalok = SearchController::aktiv_felhasznalok($join, $adatok, "inaktív", false);
      } else {
        $felhasznalok = SearchController::aktiv_felhasznalok($join, $adatok, "aktív", true);
    }
      }
     else {
      $felhasznalo_1 = SearchController::aktiv_felhasznalok($join, $adatok, "inaktív", false);
      $felhasznalo_2 = SearchController::aktiv_felhasznalok($join, $adatok, "aktív", true);
      $felhasznalok = $felhasznalo_1->union($felhasznalo_2);
     }
    return $felhasznalok;
  
  }




  public function osszes_felhasznalo(Request $adatok)
  {
    $szulo = SearchController::felhasznaloAdatok('szulos', $adatok);
    $orvos = SearchController::felhasznaloAdatok('orvos', $adatok);
    $admin = SearchController::felhasznaloAdatok('admins', $adatok);
    return  response()->json($szulo->union($orvos)->union($admin)->get());
   // return $szulo;
  }




 
}

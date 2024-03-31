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




  public function admin_felhasznalo($id){
    $admin = (DB::table('felhasznalos as f')->join('admins','admins.felhasznalo_id', '=', 'f.id')
    ->select('f.id', 'f.felhasznalo_nev', 'f.felhasznalo_email', 'f.jelszo', 'f.szerepkor', 'f.aktiv', 'vez_nev', 'ker_nev', 'f.szerepkor as atadas')
    ->where('f.id', '=', $id)
    ->get());
    return $admin;
  }

  public function szulo_felhasznalo($id){
    $felhasznalo = (DB::table('felhasznalos as f')->join('szulos','szulos.felhasznalo_id', '=', 'f.id')
    ->select('f.id', 'f.felhasznalo_nev', 'f.felhasznalo_email', 'f.jelszo', 'f.szerepkor', 'f.aktiv', 'vez_nev', 'ker_nev', 'szemelyi_igazolvany_szam', 'lakcim_varos', 'lakcim_irSzam', 'lakcim_utca', 'f.szerepkor as atadas')
    ->where('f.id', '=', $id)
    ->get());
    return $felhasznalo;
  }

  public function orvos_felhasznalo($id){
    $felhasznalo = (DB::table('felhasznalos as f')->join('orvos','orvos.felhasznalo_id', '=', 'f.id')
    ->select('f.id', 'f.felhasznalo_nev', 'f.felhasznalo_email', 'f.jelszo', 'f.szerepkor', 'f.aktiv', 'vez_nev', 'ker_nev', 'tel_szam', 'publikus_email', 'rendelo_ajto_szam', 'f.szerepkor as atadas')
    ->where('f.id', '=', $id)
    ->get());
    return $felhasznalo;
  }

  public function kivalasztott_felhasznalo($id){
    $felhasznalo = DB::table('felhasznalos as f')->select('f.szerepkor')->where('f.id', '=', $id)->get();
    foreach ($felhasznalo as $keresett) {
    if($keresett->szerepkor == 'A'){
      return  response()->json(SearchController::admin_felhasznalo($id));
    }
    elseif($keresett->szerepkor == 'O'){
      return  response()->json(SearchController::orvos_felhasznalo($id));
    }
    elseif($keresett->szerepkor == 'S'){
    
    return  response()->json(SearchController::szulo_felhasznalo($id));
    } 
  }
  }


  public function aktiv_felhasznalok($join, $adatok, $szoveg, $aktiv, $szereplo)
  {
    $felhasznalo_nev = $adatok->felhasznalo_nev;
    $felhasznalo_email = $adatok->felhasznalo_email;
    $szerepkor = $adatok->szerepkor;
    $vez_nev = $adatok->vez_nev;
    $ker_nev = $adatok->ker_nev;
    $felhasznalok = DB::table('felhasznalos as f')
      ->join($join, $join . '.felhasznalo_id', '=', 'f.id')
      ->select('f.id', 'f.felhasznalo_nev', 'f.felhasznalo_email', 'vez_nev', 'ker_nev', DB::raw('"'.$szoveg.'" as aktiv, "'.$szereplo.'" as szereplo', ))
      ->where('f.aktiv', '=', $aktiv);
      $felhasznalok = SearchController::ertekKeresesek($felhasznalok, $felhasznalo_nev, "f.felhasznalo_nev");
      $felhasznalok = SearchController::ertekKeresesek($felhasznalok, $felhasznalo_email, "f.felhasznalo_email");
      $felhasznalok = SearchController::ertekKeresesek($felhasznalok, $szerepkor, "f.szerepkor");
      $felhasznalok = SearchController::ertekKeresesek($felhasznalok, $vez_nev, "vez_nev");
      $felhasznalok = SearchController::ertekKeresesek($felhasznalok, $ker_nev, "ker_nev"); 
      return $felhasznalok;
  }
  public function felhasznaloAdatok($join, $adatok, $szereplo)
  {
    $aktivitas = $adatok->aktiv;
    if ($aktivitas !== null) {
      if ($aktivitas == false) {
        $felhasznalok = SearchController::aktiv_felhasznalok($join, $adatok, "inaktív", false, $szereplo);
      } else {
        $felhasznalok = SearchController::aktiv_felhasznalok($join, $adatok, "aktív", true, $szereplo);
    }
      }
     else {
      $felhasznalo_1 = SearchController::aktiv_felhasznalok($join, $adatok, "inaktív", false, $szereplo);
      $felhasznalo_2 = SearchController::aktiv_felhasznalok($join, $adatok, "aktív", true, $szereplo);
      $felhasznalok = $felhasznalo_1->union($felhasznalo_2);
     }
    return $felhasznalok;
  
  }




  public function osszes_felhasznalo(Request $adatok)
  {
    $szulo = SearchController::felhasznaloAdatok('szulos', $adatok, "szülő");
    $orvos = SearchController::felhasznaloAdatok('orvos', $adatok, "orvos");
    $admin = SearchController::felhasznaloAdatok('admins', $adatok, "admin");
    return  response()->json($szulo->union($orvos)->union($admin)->get());
   // return $szulo;
  }




 
}

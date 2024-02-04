<?php

namespace App\Http\Controllers;

use App\Models\Felhasznalo;
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
        $record->aktiv = $request->aktiv;
        $record->save();
        
    }

    public function show($id){
        return response()->json(Felhasznalo::find($id));
    }

    public function bejelentkezes($felhasznalo_nev){
        $id = DB::table('felhasznalos as f')
        ->select('f.felhasznalo_id')
        ->where('f.felhasznalo_nev', $felhasznalo_nev)
        ->get();
        return $id;
    }
}

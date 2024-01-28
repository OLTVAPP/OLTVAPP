<?php

namespace App\Http\Controllers;

use App\Models\Oltas;
use Illuminate\Http\Request;

class OltasController extends Controller
{

    /*
    public function oltasIndex()
    {
        $oltasok = Oltas::all();
        return view('oltas.index', ['oltasok' => $oltasok]);
    }

    public function oltasShow($id)
    {
        $oltas = Oltas::find($id);
        return view('oltas.show', ['oltas' => $oltas]);
    }
    */

    public function index()
    {
        $oltasok = Oltas::all();
        return response()->json($oltasok);
    }

    public function update(Request $request, $id)
    {
        $user = Oltas::find($id);
        $user->felhasznalo_nev = $request->felhasznalo_nev;
        $user->jelszo = $request->jelszo;
        $user->szerepkor = $request->szerepkor;
        $user->felhasznalo_email = $request->felhasznalo_email;
        $user->aktiv = $request->aktiv;
        $user->save();

        return Oltas::find($user->id);
    }

    public function store(Request $request)
    {
        $record = new Oltas();
        $record->tipus_id = $request->tipus_id;
        $record->forgalmazo_id = $request->forgalmazo_id;
        $record->szuksegessege = $request->szuksegessege;
        $record->mellek_hatasa = $request->mellek_hatasa;
        $record->adagolas = $request->adagolas;
        $record->receptre = $request->receptre;
        $record->save();

        return Oltas::find($record->id);
    }
}

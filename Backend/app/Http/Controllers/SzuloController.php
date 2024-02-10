<?php

namespace App\Http\Controllers;

use App\Models\Szulo;
use Illuminate\Http\Request;

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
}

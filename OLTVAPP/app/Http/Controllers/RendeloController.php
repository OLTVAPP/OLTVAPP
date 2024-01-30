<?php

namespace App\Http\Controllers;

use App\Models\Rendelo;
use Illuminate\Http\Request;

class RendeloController extends Controller
{
    public function index()
    {
        $felhasznalok = Rendelo::all();
        return response()->json($felhasznalok);
    }

    public function update(Request $request, $id)
    {
        $user = Rendelo::find($id);
        $user->rendelo_cim = $request->rendelo_cim;
        $user->ajto_szam = $request->ajto_szam;
        $user->save();

        return Rendelo::find($user->rendelo_id);
    }

    public function store(Request $request)
    {
        $record = new Rendelo();
        $record->rendelo_cim = $request->rendelo_cim;
        $record->ajto_szam = $request->ajto_szam;
        $record->save();

    }
}

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
}

<?php

namespace App\Http\Controllers;

use App\Models\Oltas;
use Illuminate\Http\Request;

class OltasController extends Controller
{
    public function oltasIndex()
    {
        $oltasok = Oltas::all();
        return view('oltvapp.oltas.index', ['oltasok' => $oltasok]);
    }

    public function oltasShow($id)
    {
        $oltas = Oltas::find($id);
        return view('oltvapp.oltas.show', ['oltas' => $oltas]);
    }
}

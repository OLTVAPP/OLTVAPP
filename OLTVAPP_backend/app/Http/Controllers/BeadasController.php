<?php

namespace App\Http\Controllers;

use App\Models\Beadas;
use Illuminate\Http\Request;

class BeadasController extends Controller
{
    public function beadasIndex()
    {
        $beadasok = Beadas::all();
        return view('oltvapp.beadas.index', ['beadasok' => $beadasok]);
    }

    public function beadasShow($id)
    {
        $beadas = Beadas::find($id);
        return view('oltvapp.beadas.show', ['beadas' => $beadas]);
    }
}

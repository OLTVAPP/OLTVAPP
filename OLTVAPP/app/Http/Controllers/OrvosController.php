<?php

namespace App\Http\Controllers;

use App\Models\Orvos;
use Illuminate\Http\Request;

class OrvosController extends Controller
{
    public function orvosIndex()
    {
        $orvosok = Orvos::all();
        return view('oltvapp.orvos.index', ['orvosok' => $orvosok]);
    }

    public function orvosShow($id)
    {
        $orvos = Orvos::find($id);
        return view('oltvapp.orvos.show', ['orovos' => $orvos]);
    }
}
<?php

namespace App\Http\Controllers;

use App\Models\Orvos;
use Illuminate\Http\Request;

class OrvosController extends Controller
{
    public function orvosIndex()
    {
        $orvosok = Orvos::all();
        return view('orvos.index', ['orvosok' => $orvosok]);
    }

    public function orvosShow()
    {
        $orvosok = Orvos::all();
        return view('orvos.index', compact('orvosok'));
    }

}

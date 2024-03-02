<?php

namespace App\Http\Controllers;

use App\Models\Gyerek;
use App\Models\Orvos;
use Illuminate\Http\Request;

class OrvosController extends Controller
{
    public function orvosIndex()
    {
        $orvosok = Orvos::all();
        return view('orvos.index', ['orvosok' => $orvosok]);
    }

    public function orvosShow($id)
    {
        $orvos = Orvos::find($id);
        return view('orvos.show', ['orvos' => $orvos]);
    }

    public function betegek($orvos_id){

        $beteg = Gyerek::where('orvos_id', $orvos_id)
        ->select('gyerek_taj', 'vez_nev', 'ker_nev', 'szul_datum', 'szul_hely', 'lakcim_varos', 'lakcim_irSzam', 'lakcim_utca', 'erzekenyseg')
        ->get();

        return $beteg;
    }
}

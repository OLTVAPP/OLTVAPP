<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CsaladController extends Controller
{
    public function getCsalad()
    {
        $csalad = DB::table('csalads as cs')
        ->join('szulos as sz', 'cs.szulo_id','=','sz.felhasznalo_id')
        ->join('gyereks as gy', 'cs.gyerek_id', '=', 'gy.gyerek_taj')
        ->get();

        return $csalad;
    }
}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CsaladController extends Controller
{
    public function getCsalad($id)
    {
        $copies = DB::table('csalads as cs')
        ->join('szulos as sz', 'cs.szulo_id','=','sz.felhasznalo_id')
        ->where('cs.szulo_id', $id);

        return $copies;
    }
}

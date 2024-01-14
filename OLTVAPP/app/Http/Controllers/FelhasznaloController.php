<?php

namespace App\Http\Controllers;

use App\Models\Felhasznalo;
use Illuminate\Http\Request;

class FelhasznaloController extends Controller
{
    public function felhasznaloIndex()
    {
        $felhasznalok = Felhasznalo::all();
        return view('oltvapp.felhasznalo.index', ['felhasznalok' => $felhasznalok]);
    }

    public function felhasznaloShow($id)
    {
        $felhasznalo =Felhasznalo::find($id);
        return view('oltvapp.felhasznalo.show', ['felhasznalo' => $felhasznalo]);
    }
}

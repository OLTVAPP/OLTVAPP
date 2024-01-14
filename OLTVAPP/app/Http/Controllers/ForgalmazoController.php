<?php

namespace App\Http\Controllers;

use App\Models\Forgalmazo;
use Illuminate\Http\Request;

class ForgalmazoController extends Controller
{
    public function forgalmazoIndex()
    {
        $forgalmazok = Forgalmazo::all();
        return view('oltvapp.forgalmazo.index', ['forgalmazok' => $forgalmazok]);
    }

    public function forgalmazoShow($id)
    {
        $forgalmazo = Forgalmazo::find($id);
        return view('oltvapp.forgalmazo.show', ['forgalmazo' => $forgalmazo]);
    }
}

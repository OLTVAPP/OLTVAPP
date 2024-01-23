<?php

namespace App\Http\Controllers;

use App\Models\Forgalmazo;
use Illuminate\Http\Request;

class ForgalmazoController extends Controller
{
    public function forgalmazoIndex()
    {
        $forgalmazok = Forgalmazo::all();
        return view('forgalmazo.index', ['forgalmazok' => $forgalmazok]);
    }

    public function forgalmazoShow($id)
    {
        $forgalmazo = Forgalmazo::find($id);
        return view('forgalmazo.show', ['forgalmazo' => $forgalmazo]);
    }
}

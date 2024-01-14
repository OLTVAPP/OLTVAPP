<?php

namespace App\Http\Controllers;

use App\Models\Gyerek;
use Illuminate\Http\Request;

class GyerekController extends Controller
{
    public function gyerekIndex()
    {
        $gyerekek = Gyerek::all();
        return view('oltvapp.gyerek.index', ['gyerekek' => $gyerekek]);
    }

    public function gyerekShow($id)
    {
        $gyerek =Gyerek::find($id);
        return view('oltvapp.gyerek.show', ['gyerek' => $gyerek]);
    }
}
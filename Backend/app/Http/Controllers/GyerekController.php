<?php

namespace App\Http\Controllers;

use App\Models\Gyerek;
use Illuminate\Http\Request;

class GyerekController extends Controller
{

    
    public function gyerekIndex()
    {
        $gyerekek = Gyerek::all();
        return response()->json($gyerekek);
    }

    public function gyerekShow($id)
    {
        $gyerek =Gyerek::find($id);
        return view('gyerek.show', ['gyerek' => $gyerek]);
    }
    

    public function gyerekSzulo(){
        
    }
}

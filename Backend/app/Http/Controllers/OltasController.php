<?php

namespace App\Http\Controllers;

use App\Models\Beadando;
use App\Models\Oltas;
use App\Models\Oltas_tipus;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class OltasController extends Controller
{

  

    public function index()
    {
        $oltasok = Oltas::all();
        return response()->json($oltasok);
    }

    public function update(Request $request, $id)
    {
        $user = Oltas::find($id);
        $user->tipus_id = $request->tipus_id;
        $user->oltoanyag_neve = $request->oltoanyag_neve;
        $user->forgalmazo = $request->forgalmazo;
        $user->leiras = $request->leiras;
        $user->adagolas = $request->adagolas;
        $user->receptre = $request->receptre;
        $user->aktiv = $request->aktiv;;
        $user->save();
        return Oltas::find($user->id);
    }

    public function store(Request $request)
    {
        $record = new Oltas();
        $record->tipus_id = $request->tipus_id;
        $record->oltoanyag_neve = $request->oltoanyag_neve;
        $record->forgalmazo = $request->forgalmazo;
        $record->leiras = $request->leiras;
        $record->adagolas = $request->adagolas;
        $record->receptre = $request->receptre;
        $record->aktiv = true;
        $record->save();
    }

    public function store_tipus(Request $request)
    {
        $record = new Oltas_tipus();
        $record->tipus_elnev = $request->tipus_elnev;
        $record->kotelezo = $request->kotelezo;
        $record->leiras = $request->leiras;
        $record->save();
    }

    public function update_tipus(Request $request, $id)
    {
        $user = Oltas_tipus::find($id);
        $user->tipus_elnev = $request->tipus_elnev;
        $user->kotelezo = $request->kotelezo;
        $user->leiras = $request->leiras;
        $user->save();
        return Oltas_tipus::find($user->id);
    }

    public function store_beadando(Request $request)
    {
        $record = new Beadando();
        $record->tipus_id = $request->tipus_id;
        $record->ev = $request->ev;
        $record->honap = $request->honap;
        $record->hanyadik = $request->hanyadik;
        $record->save();
    }

    public function update_beadando(Request $request, $id)
    {
        $user = Beadando::find($id);
        $user->tipus_id = $request->tipus_id;
        $user->ev = $request->ev;
        $user->honap = $request->honap;
        $user->hanyadik = $request->hanyadik;
        $user->save();
        return Beadando::find($user->id);
    }


    public function oltas_tipus()
    {
        $oltas_tipus = (DB::table('oltas_tipuses as o')
        ->select('tipus_id as value', 'tipus_elnev as kiiras')
        ->get());
        return response()->json($oltas_tipus);
    }

    public function ertekKeresesek($kod, $ertek, $mezo){
        if($ertek !== null){
          $kod->where($mezo, 'LIKE', "%$ertek%");;
        }
        return $kod;
      }


    public function beadando_tabla(Request $request){
        $oltas_tipus = (DB::table('oltas_tipuses as o')
        ->join('beadandos as b','b.tipus_id', '=','o.tipus_id')
        ->select('beadando_id as id','tipus_elnev','ev', 'honap', 'hanyadik'));
        $oltas_tipus = OltasController::ertekKeresesek($oltas_tipus, $request->tipus_elnev, "tipus_elnev");
        return response()->json($oltas_tipus->get());
    }

    public function oltas_tipus_tabla(Request $request){
        $oltas_tipus = (DB::table('oltas_tipuses as o')
        ->select('tipus_id as id','tipus_elnev', 'kotelezo', 'leiras'));
        $oltas_tipus = OltasController::ertekKeresesek($oltas_tipus, $request->tipus_elnev, "tipus_elnev");
        return response()->json($oltas_tipus->get());
    }
    public function kivalasztott_oltas_tipus($id){
        $oltas_tipus = (DB::table('oltas_tipuses as o')
        ->select('tipus_id as id','tipus_elnev', 'kotelezo', 'leiras')
        ->where('tipus_id', '=', $id));
        return response()->json($oltas_tipus->get());
    }


    public function kivalaszott_beadando($id){
        $oltas_tipus = (DB::table('oltas_tipuses as o')
        ->join('beadandos as b','b.tipus_id', '=','o.tipus_id')
        ->select('beadando_id as id','tipus_elnev', 'kotelezo', 'ev', 'honap', 'hanyadik')
        ->where('beadando_id', '=', $id));
        return response()->json($oltas_tipus->get());
     
    }

    public function oltas_tabla(){
        $oltas = (DB::table('oltas as o')
        ->join('oltas_tipuses as t','t.tipus_id', '=','o.tipus_id')
        ->select('oltas_id as id','tipus_elnev', 'oltoanyag_neve', 'forgalmazo', 'receptre', 'aktiv')
        ->get());
        return response()->json($oltas);
    }


    public function oltas_kivalasztott($id){
        $oltas = (DB::table('oltas as o')
        ->join('oltas_tipuses as t','t.tipus_id', '=','o.tipus_id')
        ->select('oltas_id as id','tipus_elnev', 'oltoanyag_neve', 'forgalmazo', 'o.leiras', 'adagolas', 'receptre', 'aktiv')
        ->where('oltas_id', '=', $id)
        ->get());
        return response()->json($oltas);
    }


    
}

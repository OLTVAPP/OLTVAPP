<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AdminController extends Controller
{
    public function adminIndex()
    {
        $admins = Admin::all();
        return view('admin.index', ['admins' => $admins]);
    }

    public function adminShow($id)
    {
        $admin = Admin::find($id);
        return view('admin.show', ['admin' => $admin]);
    }


    public function update(Request $request, $id)
    {
     
        DB::update('UPDATE admins SET vez_nev = ?, ker_nev = ? WHERE felhasznalo_id = ?', [$request->vez_nev, $request->ker_nev, $id]);
        $user = Admin::where('felhasznalo_id', $id)->first();
        return $user;
    }




    public function store(Request $request)
    {
        $record = new Admin();
        $record->felhasznalo_id = $request->felhasznalo_id;
        $record->vez_nev = $request->vez_nev;
        $record->ker_nev = $request->ker_nev;
        $record->save();
    }
}

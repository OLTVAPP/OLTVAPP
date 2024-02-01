<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use Illuminate\Http\Request;

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


}

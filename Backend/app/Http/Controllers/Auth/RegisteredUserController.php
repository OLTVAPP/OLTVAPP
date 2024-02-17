<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Felhasznalo;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;

class RegisteredUserController extends Controller
{
    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): Response
    {
        /*
        $request->validate([
            'felhasznalo_nev' => ['required', 'string', 'max:255'],
            'felhasznalo_email' => ['required', 'string', 'lowercase', 'email', 'max:255', 'unique:'.Felhasznalo::class],
            'jelszo' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);
        */

        $user = Felhasznalo::create([
            'felhasznalo_nev' => $request->felhasznalo_nev,
            'jelszo'=> Hash::make($request->jelszo),
            'felhasznalo_email' => $request->felhasznalo_email,
            'szerepkor' => 'S',
            'aktiv' => true
        ]);

        

        event(new Registered($user));

        Auth::login($user);

        return response()->noContent();
    }

}

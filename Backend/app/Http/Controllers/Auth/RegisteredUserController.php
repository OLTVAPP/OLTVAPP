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
            'jelszo' => Hash::make($request->jelszo),
            'felhasznalo_email' => $request->felhasznalo_email,
            'szerepkor' => 'S',
            'aktiv' => true
        ]);


        $user->szulo()->create([
            'felhasznalo_id' => $user->id,
            'vez_nev' => $request->vez_nev,
            'ker_nev' => $request->ker_nev,
            'szemelyi_igazolvany_szam' => $request->szemelyi_igazolvany_szam,
            'lakcim_varos' => $request->lakcim_varos,
            'lakcim_irSzam' => $request->lakcim_irSzam,
            'lakcim_utca' => $request->lakcim_utca
        ]);



        event(new Registered($user));

        //Auth::login($user);

        return response()->noContent();
    }
}

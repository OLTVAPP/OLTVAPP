<?php

use App\Models\Felhasznalo;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('felhasznalos', function (Blueprint $table) {
            $table->id('id');
            $table->string('felhasznalo_nev', 30)->unique();
            $table->string('jelszo', 30);
            $table->string('felhasznalo_email', 254)->unique();
            $table->char('szerepkor', 1);
            $table->boolean('aktiv');
            $table->rememberToken();
            $table->timestamps();
        });


        Felhasznalo::create([
            'felhasznalo_nev' => "balazsmogyorodi",
            'jelszo' => "123Abc",
            'felhasznalo_email' => "bal@gmail.com",
            'szerepkor' => "A",
            'aktiv' => true   
        ]);   
        Felhasznalo::create([
            'felhasznalo_nev' => "kovacsBela",
            'jelszo' => "123Abc",
            'felhasznalo_email' => "rgrg@gmail.com",
            'szerepkor' => "S",
            'aktiv' => true
        ]);
        
        Felhasznalo::create([
            'felhasznalo_nev' => "kovacsBela",
            'jelszo' => "Gerle0104",
            'felhasznalo_email' => "kov@gmail.com",
            'szerepkor' => "O",
            'aktiv' => true
        ]);

        Felhasznalo::create([
            'felhasznalo_nev' => "JoskaSanyi",
            'jelszo' => "Gerle0104",
            'felhasznalo_email' => "kodsfv@gmail.com",
            'szerepkor' => "O",
            'aktiv' => false
        ]);
        Felhasznalo::create([
            'felhasznalo_nev' => "balazsmogyorodi",
            'jelszo' => "123Abc",
            'felhasznalo_email' => "bal@gmail.com",
            'szerepkor' => "A",
            'aktiv' => true
        ]);
    }







    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('felhasznalos');
    }
};

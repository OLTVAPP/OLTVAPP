<?php

use App\Models\Felhasznalo;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

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
            $table->string('jelszo');
            $table->string('felhasznalo_email', 254)->unique();
            $table->char('szerepkor', 1);
            $table->boolean('aktiv');
            $table->rememberToken();
            $table->timestamps();
        });


        DB::statement("ALTER TABLE felhasznalos ADD CONSTRAINT szerepkor_check CHECK (szerepkor IN('A', 'S', 'O'))");



        Felhasznalo::create([
            'id' => 1,
            'felhasznalo_nev' => "rozsaSandor",
            'jelszo' => Hash::make("123Abc"),
            'felhasznalo_email' => "sandor@gmail.com",
            'szerepkor' => "S",
            'aktiv' => true
        ]);

        Felhasznalo::create([
            'id' => 2,
            'felhasznalo_nev' => "martonkavok",
            'jelszo' => Hash::make("123cbaCBA"),
            'felhasznalo_email' => "marton@gmail.com",
            'szerepkor' => "S",
            'aktiv' => true
        ]);

        Felhasznalo::create([
            'id' => 3,
            'felhasznalo_nev' => "rozineni",
            'jelszo' => Hash::make("123Abc"),
            'felhasznalo_email' => "rozika@gmail.com",
            'szerepkor' => "S",
            'aktiv' => false
        ]);
        Felhasznalo::create([
            'id' => 4,
            'felhasznalo_nev' => "balazs Admin",
            'jelszo' => Hash::make("123Abc"),
            'felhasznalo_email' => "bal@gmail.com",
            'szerepkor' => "A",
            'aktiv' => true
        ]);

        Felhasznalo::create([
            'id' => 5,
            'felhasznalo_nev' => "petikavok Admin",
            'jelszo' => Hash::make("123Abc"),
            'felhasznalo_email' => "peti@gmail.com",
            'szerepkor' => "A",
            'aktiv' => true
        ]);

        Felhasznalo::create([
            'id' => 6,
            'felhasznalo_nev' => "jakabPtr Admin",
            'jelszo' => Hash::make("123456789ABCabc"),
            'felhasznalo_email' => "jakab@gmail.com",
            'szerepkor' => "A",
            'aktiv' => false
        ]);

        Felhasznalo::create([
            'id' => 7,
            'felhasznalo_nev' => "kovacsBela",
            'jelszo' => Hash::make("ABCabc123"),
            'felhasznalo_email' => "kov@gmail.com",
            'szerepkor' => "O",
            'aktiv' => true
        ]);

        Felhasznalo::create([
            'id' => 8,
            'felhasznalo_nev' => "Sandas",
            'jelszo' => Hash::make("Gerle0104"),
            'felhasznalo_email' => "somogyiandraska@gmail.com",
            'szerepkor' => "O",
            'aktiv' => true
        ]);

        Felhasznalo::create([
            'id' => 9,
            'felhasznalo_nev' => "JoskaSanyi",
            'jelszo' => Hash::make("Gerle0104"),
            'felhasznalo_email' => "joska@gmail.com",
            'szerepkor' => "O",
            'aktiv' => false
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

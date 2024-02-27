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
            $table->string('felhasznalo_nev')->unique();
            $table->string('jelszo');
            $table->string('felhasznalo_email')->unique();
            $table->char('szerepkor');
            $table->boolean('aktiv');
            $table->rememberToken();
            $table->timestamps();
        });
        
        
        Felhasznalo::create([
            'felhasznalo_nev' => "balazsmogyorodi",
            'jelszo' => "123ab",
            'felhasznalo_email' => "bal@gmail.com",
            'szerepkor' => "S",
            'aktiv' => true   
        ]);   
        Felhasznalo::create([
            'felhasznalo_nev' => "kovacsBela",
            'jelszo' => "123ab",
            'felhasznalo_email' => "kov@gmail.com",
            'szerepkor' => "O",
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

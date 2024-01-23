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
            $table->id('felhasznalo_id');
            $table->string('felhasznalo_nev');
            $table->string('jelszo');
            $table->char('szerepkor');
            $table->string('felhasznalo_email')->unique();
            $table->rememberToken();
            $table->timestamps();
        });

        Felhasznalo::create([
            'felhasznalo_nev' => "martonmarton",
            'jelszo' => "almaalma1",
            'szerepkor' => 0,
            'felhasznalo_email' => "martonvagyok@gmail.com"
        ]);

        Felhasznalo::create([
            'felhasznalo_nev' => "andrashalacska",
            'jelszo' => "almaalma1",
            'szerepkor' => 0,
            'felhasznalo_email' => "andrasvagyok@gmail.com"
        ]);

        Felhasznalo::create([
            'felhasznalo_nev' => "balazsbalazs",
            'jelszo' => "almaalma1",
            'szerepkor' => 0,
            'felhasznalo_email' => "balazasvagyok@gmail.com"
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

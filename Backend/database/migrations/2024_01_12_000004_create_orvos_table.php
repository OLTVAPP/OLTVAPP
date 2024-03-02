<?php

use App\Models\Orvos;
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
        Schema::create('orvos', function (Blueprint $table) {
            $table->id('felhasznalo_id');
            $table->foreign('felhasznalo_id')->references('id')->on('felhasznalos');
            $table->string('vez_nev', 50);
            $table->string('ker_nev', 50);
            $table->string('tel_szam', 30);
            $table->string('publikus_email', 254);
            $table->integer('rendelo_ajto_szam');
            $table->timestamps();
        });

        Orvos::create([
            'felhasznalo_id' => 2,
            'vez_nev' => "asdf",
            'ker_nev' => "dgfdm",
            'tel_szam' => "+36209432",
            'publikus_email' => "kov@gmail.com",
            'rendelo_ajto_szam' => 2
        ]);

        Orvos::create([
            'felhasznalo_id' => 3,
            'vez_nev' => "asdfgdfdf",
            'ker_nev' => "dgfdgdffdm",
            'tel_szam' => "+3620439432",
            'publikus_email' => "kogfhgfv@gmail.com",
            'rendelo_ajto_szam' => 4
        ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orvos');
    }
};

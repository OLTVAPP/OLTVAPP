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
            $table->foreign('felhasznalo_id')->references('felhasznalo_id')->on('felhasznalos');
            $table->string('vez_nev');
            $table->string('ker_nev');
            $table->foreignId('rendelo_id')->references('rendelo_id')->on('rendelos');
            $table->integer('tel_szam');
            $table->string('publikus_email');
            $table->timestamps();
        });

        Orvos::create([
            'vez_nev' => "A",
            'ker_nev' => "a",
            'rendelo_id' => 1,
            'tel_szam' => 12345678,
            'publikus_email' => "a@gmail.com",
            
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

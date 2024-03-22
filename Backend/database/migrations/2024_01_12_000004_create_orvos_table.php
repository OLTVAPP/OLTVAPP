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
            'vez_nev' => 'Mogyoródi',
            'ker_nev' => 'Balázs',
            'tel_szam' => '+3453454',
            'publikus_email' => 'kocvagydr@gmail.com',
            'rendelo_ajto_szam' => 12
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

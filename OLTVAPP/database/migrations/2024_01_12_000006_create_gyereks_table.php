<?php

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
        Schema::create('gyereks', function (Blueprint $table) {
            $table->id('gyerek_taj');
            $table->foreignId('orvos_id')->references('felhasznalo_id')->on('orvos');
            $table->string('vez_nev');
            $table->string('ker_nev');
            $table->string('lakcim_varos');
            $table->integer('lakcim_irSzam');
            $table->string('lakcim_utca');
            $table->string('erzekenyseg');
            $table->date('szul_datum');
            $table->string('szul_hely');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('gyereks');
    }
};

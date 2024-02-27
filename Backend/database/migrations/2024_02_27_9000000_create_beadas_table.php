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
        Schema::create('beadas', function (Blueprint $table) {
            $table->foreignId('orvos_id')->references('felhasznalo_id')->on('orvos');
            $table->foreignId('gyerek_id')->references('gyerek_taj')->on('gyereks');
            $table->foreignId('oltas_id')->references('oltas_id')->on('oltas');
            $table->date('tervezett_beadas',);
            $table->date('beadas_datuma');
            $table->string('megjegyzes');
            $table->foreignId('beadando_id')->references('beadando_id')->on('beadandos');
            $table->timestamps();
        });
        
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('beadas');
    }
};

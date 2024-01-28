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
            $table->date('idopont');
            $table->date('beadas_datuma');
            $table->string('megjegyzes');
            $table->date('tervezett_ido');
            $table->foreignId('oltas_id')->references('id')->on('oltas');
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

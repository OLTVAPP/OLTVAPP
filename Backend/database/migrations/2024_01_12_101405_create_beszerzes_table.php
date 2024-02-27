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
        Schema::create('beszerzes', function (Blueprint $table) {
            $table->id('beszerzes_id');
            $table->foreignId('oltas_id')->references('oltas_id')->on('oltas');
            $table->foreignId('orvos_id')->references('felhasznalo_id')->on('orvos');
            $table->integer('darab');
            $table->date('beszerzes_datuma');
            $table->date('lejarati_datuma');
            $table->date('megsemessites_datuma');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('beszerzes');
    }
};

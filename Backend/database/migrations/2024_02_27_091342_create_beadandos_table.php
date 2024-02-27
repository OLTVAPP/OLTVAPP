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
        Schema::create('beadandos', function (Blueprint $table) {
            $table->id('beadando_id');
            $table->foreignId('tipus_id')->references('tipus_id')->on('oltas_tipuses');
            $table->integer('ev');
            $table->integer('honap');
            $table->integer('hanyadik');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('beadandos');
    }
};

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
        Schema::create('levels', function (Blueprint $table) {
            $table->id("level_id");
            $table->foreignId('gyerek_taj')->references('gyerek_taj')->on('gyereks');
            $table->foreignId('tipus_id')->references('tipus_id')->on('oltas_tipuses');
            $table->date('kikuldes_datuma');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('levels');
    }
};

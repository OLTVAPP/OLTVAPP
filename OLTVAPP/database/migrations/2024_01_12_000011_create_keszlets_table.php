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
        Schema::create('keszlets', function (Blueprint $table) {
            $table->id('keszlet_id');
            $table->foreignId('oltas_id')->references('oltas_id')->on('oltas');
            $table->integer('darab');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('keszlets');
    }
};

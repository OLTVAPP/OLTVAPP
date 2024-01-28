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
        Schema::create('megsemisites', function (Blueprint $table) {
            $table->primary('keszlet_id');
            $table->foreignId('keszlet_id')->references('keszlet_id')->on('keszlets');
            $table->boolean('megsemisitve');
            $table->date('megsemmisitve_d');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('megsemisites');
    }
};

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
            $table->id('keszlet_id');
            $table->foreign('keszlet_id')->references('keszlet_id')->on('keszlets');
            $table->boolean('megsemisitve');
            $table->date('megsemisitve_d');
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

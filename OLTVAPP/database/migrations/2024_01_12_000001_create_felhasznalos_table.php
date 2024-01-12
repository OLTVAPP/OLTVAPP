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
        Schema::create('felhasznalos', function (Blueprint $table) {
            $table->id('felhasznalo_id');
            $table->string('felhasznalo_nev');
            $table->string('jelszo');
            $table->char('szerepkor');
            $table->string('felhasznalo_email')->unique();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('felhasznalos');
    }
};

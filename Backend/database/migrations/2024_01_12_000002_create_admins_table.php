<?php

use App\Models\Admin;
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
        Schema::create('admins', function (Blueprint $table) {
            $table->id('felhasznalo_id');
            $table->foreign('felhasznalo_id')->references('id')->on('felhasznalos');
            $table->string('vez_nev', 50);
            $table->string('ker_nev', 50);
            $table->timestamps();
        });

        Admin::create([
            'felhasznalo_id' => 1,
            'vez_nev' => "Mogyoródi",
            'ker_nev' => "Balázs",
        ]);  
        Admin::create([ 
            'felhasznalo_id' => 4,
            'vez_nev' => "Mogyoródi",
            'ker_nev' => "Balázs",
        ]);

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('admins');
    }
};

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
            $table->id('admin_id');
            $table->foreignId('felhasznalo_id')->references('felhasznalo_id')->on('felhasznalos');
            $table->string('vez_nev');
            $table->string('ker_nev');
            $table->timestamps();
        });

        Admin::create([
            'felhasznalo_id' => 1,
            'vez_nev' => "Somogyvári",
            'ker_nev' => "Márton",
        ]);

        Admin::create([
            'felhasznalo_id' => 2,
            'vez_nev' => "Somogyi",
            'ker_nev' => "András",
        ]);

        Admin::create([
            'felhasznalo_id' => 3,
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

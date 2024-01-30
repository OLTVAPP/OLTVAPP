<?php

use App\Models\Szulo;
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
        Schema::create('szulos', function (Blueprint $table) {
            $table->id('felhasznalo_id');
            $table->foreign('felhasznalo_id')->references('felhasznalo_id')->on('felhasznalos');
            $table->string('vez_nev');
            $table->string('ker_nev');
            $table->string('lakcim_varos');
            $table->integer('lakcim_irSzam');
            $table->string('lakcim_utca');
            $table->timestamps();
        });

        Szulo::create([
            'vez_nev' => "asd",
            'ker_nev' => "almaalma1",
            'lakcim_varos' => "szennylőrinc",
            'lakcim_irSzam' => 7940,
            'lakcim_utca' => "dfghkdj"
        ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('szulos');
    }
};

<?php

use App\Models\Gyerek;
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
        Schema::create('gyereks', function (Blueprint $table) {
            $table->id('gyerek_taj');
            $table->foreignId('orvos_id')->references('felhasznalo_id')->on('orvos');
            $table->string('vez_nev');
            $table->string('ker_nev');
            $table->string('lakcim_varos');
            $table->integer('lakcim_irSzam');
            $table->string('lakcim_utca');
            $table->string('erzekenyseg');
            $table->date('szul_datum');
            $table->string('szul_hely');
            $table->timestamps();
        });

        Gyerek::create([
            'orvos_id' => 1,
            'vez_nev' => "aghsd",
            'ker_nev' => "almfghaalma1",
            'lakcim_varos' => "szennylőrinc",
            'lakcim_irSzam' => 7940,
            'lakcim_utca' => "dfghkdj",
            'erzekenyseg' => "gdhkj",
            'szul_datum' => 20020103,
            'szul_hely' => "gjdk"
        ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('gyereks');
    }
};

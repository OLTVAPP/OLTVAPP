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
            $table->string('vez_nev', 50);
            $table->string('ker_nev', 50);
            $table->date('szul_datum');
            $table->string('szul_hely', 50);
            $table->foreignId('orvos_id')->references('felhasznalo_id')->on('orvos');
            $table->foreignId('szulo_id')->references('felhasznalo_id')->on('szulos');
            $table->string('lakcim_varos', 50);
            $table->integer('lakcim_irSzam');
            $table->string('lakcim_utca', 100);
            $table->string('erzekenyseg', 400)->nullable();
            $table->timestamps();
        });
        Gyerek::create([
            'gyerek_taj' => 325245267,
            'vez_nev' => "Somogyi",
            'ker_nev' => "Gödör",
            'szul_datum' => "2010-02-13",
            'szul_hely' => "Pécs",
            'orvos_id' => 7,
            'szulo_id' => 1,
            'lakcim_varos' => "Pécs",
            'lakcim_irSzam' => 4535,
            'lakcim_utca' => "Rántott utca 2.",
            'erzekenyseg' => "Bolha allergia"
        ]);

        Gyerek::create([
            'gyerek_taj' => 452645123,
            'vez_nev' => "Somogyi",
            'ker_nev' => "Pince",
            'szul_datum' => "2020-02-13",
            'szul_hely' => "Pécs",
            'orvos_id' => 7,
            'szulo_id' => 1,
            'lakcim_varos' => "Pécs",
            'lakcim_irSzam' => 4535,
            'lakcim_utca' => "Rántott utca 2.",
        ]);

        Gyerek::create([
            'gyerek_taj' => 938472345,
            'vez_nev' => "Somogyi",
            'ker_nev' => "Gaspar",
            'szul_datum' => "2022-12-13",
            'szul_hely' => "Pécs",
            'orvos_id' => 7,
            'szulo_id' => 1,
            'lakcim_varos' => "Pécs",
            'lakcim_irSzam' => 4535,
            'lakcim_utca' => "Rántott utca 2.",
            'erzekenyseg' => "laktózérzékeny"
        ]);

        Gyerek::create([
            'gyerek_taj' => 432354345,
            'vez_nev' => "Vicc",
            'ker_nev' => "Elek",
            'szul_datum' => "2015-06-27",
            'szul_hely' => "Budapest",
            'orvos_id' => 7,
            'szulo_id' => 2,
            'lakcim_varos' => "Budapest",
            'lakcim_irSzam' => 3525,
            'lakcim_utca' => "Szent jakab utca 23.",
        ]);

        Gyerek::create([
            'gyerek_taj' => 232354346,
            'vez_nev' => "Botond",
            'ker_nev' => "Rodond",
            'szul_datum' => "2009-10-16",
            'szul_hely' => "Érd",
            'orvos_id' => 8,
            'szulo_id' => 3,
            'lakcim_varos' => "Kacsóta",
            'lakcim_irSzam' => 3438,
            'lakcim_utca' => "Földes utca 56.",
            'erzekenyseg' => "Fény allergia"
        ]);

        Gyerek::create([
            'gyerek_taj' => 457584854,
            'vez_nev' => "Botond",
            'ker_nev' => "Fotond",
            'szul_datum' => "2013-12-29",
            'szul_hely' => "Érd",
            'orvos_id' => 8,
            'szulo_id' => 3,
            'lakcim_varos' => "Kacsóta",
            'lakcim_irSzam' => 3438,
            'lakcim_utca' => "Földes utca 56.",
        ]);

        Gyerek::create([
            'gyerek_taj' => 342342334,
            'vez_nev' => "Botond",
            'ker_nev' => "Docond",
            'szul_datum' => "2008-03-03",
            'szul_hely' => "Érd",
            'orvos_id' => 9,
            'szulo_id' => 3,
            'lakcim_varos' => "Kacsóta",
            'lakcim_irSzam' => 3438,
            'lakcim_utca' => "Földes utca 56.",
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

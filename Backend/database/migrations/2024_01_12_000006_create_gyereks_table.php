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
            $table->string('erzekenyseg');
            $table->timestamps();
        });
        Gyerek::create([
            'gyerek_taj' => 345232232,
            'vez_nev' => "asfgdgdf",
            'ker_nev' => "dgffdgdm",
            'szul_datum' => "2002-02-13",
            'szul_hely' => "Pecs",
            'orvos_id' => 3,
            'szulo_id' => 1,
            'lakcim_varos' => "Pécs",
            'lakcim_irSzam' => 4535,
            'lakcim_utca' => "hgfskjd",
            'erzekenyseg' => "fghdkd"
        ]);

        Gyerek::create([
            'gyerek_taj' => 432354345,
            'vez_nev' => "asfgdgfdgdf",
            'ker_nev' => "dgffdfgdgdm",
            'szul_datum' => "2002-02-16",
            'szul_hely' => "Pecs",
            'orvos_id' => 4,
            'szulo_id' => 1,
            'lakcim_varos' => "Pécs",
            'lakcim_irSzam' => 4535,
            'lakcim_utca' => "hgfskjd",
            'erzekenyseg' => "fgfdgdhdkd"
        ]);

        Gyerek::create([
            'gyerek_taj' => 232354346,
            'vez_nev' => "asfgdgfdgdf",
            'ker_nev' => "dgffdfgdgdm",
            'szul_datum' => "2002-02-16",
            'szul_hely' => "Pecs",
            'orvos_id' => 3,
            'szulo_id' => 1,
            'lakcim_varos' => "Pécs",
            'lakcim_irSzam' => 4535,
            'lakcim_utca' => "hgfskjd",
            'erzekenyseg' => "fgfdgdhdkd"
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

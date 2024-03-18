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
            'vez_nev' => 'Kovács',
            'ker_nev' => 'J',
            'szul_datum' => '2000-01-01',
            'szul_hely' => 'anyádban',
            'lakcim_varos' => "dqwefwq",
            'lakcim_irSzam' => 1000,
            'lakcim_utca' => "safdwa",
            'erzekenyseg' => "LEVEGŐ",
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

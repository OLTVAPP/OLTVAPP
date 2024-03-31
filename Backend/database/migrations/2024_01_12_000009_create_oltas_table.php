<?php

use App\Models\Oltas;
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
        Schema::create('oltas', function (Blueprint $table) {
            $table->id('oltas_id');
            $table->foreignId('tipus_id')->references('tipus_id')->on('oltas_tipuses');
            $table->string('oltoanyag_neve', 50);
            $table->string('forgalmazo', 50);
            $table->string('leiras');
            $table->string('adagolas');
            $table->boolean('receptre');
            $table->boolean('aktiv');
            $table->timestamps();
        });

        Oltas::create([
            'tipus_id' => 1,
            'oltoanyag_neve' => 'Valneva',
            'forgalmazo' => "AstraZeneca",
            'leiras' => "blabla",
            'adagolas' => "egyszeri adagolas",
            'receptre' => true,
            'aktiv' => true
        ]);

        Oltas::create([
            'tipus_id' => 1,
            'oltoanyag_neve' => "sputnyik",
            'forgalmazo' => "Novavax",
            'leiras' => "blabla",
            'adagolas' => "kettő adag",
            'receptre' => true,
            'aktiv' => true
        ]);
        
        Oltas::create([
            'tipus_id' => 2,
            'oltoanyag_neve' => 'Vidprev',
            'forgalmazo' => "Novavax",
            'leiras' => "blabla",
            'adagolas' => "napi 3x",
            'receptre' => true,
            'aktiv' => true
        ]);
        
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('oltas');
    }
};

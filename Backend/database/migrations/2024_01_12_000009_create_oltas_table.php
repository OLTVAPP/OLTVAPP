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
            'oltoanyag_neve' => "Sputnyik",
            'forgalmazo' => "Novavax",
            'leiras' => "blabla",
            'adagolas' => "kettő adag",
            'receptre' => true,
            'aktiv' => true
        ]);

        Oltas::create([
            'tipus_id' => 1,
            'oltoanyag_neve' => "Hungavirus",
            'forgalmazo' => "Magyar gyógyszerészet",
            'leiras' => "blabla",
            'adagolas' => "három adag",
            'receptre' => true,
            'aktiv' => false
        ]);

        Oltas::create([
            'tipus_id' => 2,
            'oltoanyag_neve' => 'Vidprev',
            'forgalmazo' => "Novavax",
            'leiras' => "blabla",
            'adagolas' => "három adag",
            'receptre' => false,
            'aktiv' => true
        ]);

        Oltas::create([
            'tipus_id' => 2,
            'oltoanyag_neve' => 'Vidrakosz',
            'forgalmazo' => "Leverkusen",
            'leiras' => "blabla",
            'adagolas' => "egyszeri adagolás",
            'receptre' => true,
            'aktiv' => true
        ]);

        Oltas::create([
            'tipus_id' => 3,
            'oltoanyag_neve' => 'Vödrös',
            'forgalmazo' => "Pfizer",
            'leiras' => "blabla",
            'adagolas' => "kettő adag",
            'receptre' => true,
            'aktiv' => true
        ]);

        Oltas::create([
            'tipus_id' => 3,
            'oltoanyag_neve' => 'Vödrös2',
            'forgalmazo' => "Pfizer",
            'leiras' => "blabla",
            'adagolas' => "egyszeri adagolás",
            'receptre' => false,
            'aktiv' => false
        ]);

        Oltas::create([
            'tipus_id' => 4,
            'oltoanyag_neve' => 'Pinces',
            'forgalmazo' => "Janssen",
            'leiras' => "blabla",
            'adagolas' => "egyszeri adagolás",
            'receptre' => True,
            'aktiv' => True
        ]);

        Oltas::create([
            'tipus_id' => 5,
            'oltoanyag_neve' => 'Sophiane',
            'forgalmazo' => "GSK-Sanofi",
            'leiras' => "blabla",
            'adagolas' => "három adag",
            'receptre' => True,
            'aktiv' => True
        ]);

        Oltas::create([
            'tipus_id' => 5,
            'oltoanyag_neve' => 'Sophratesz',
            'forgalmazo' => "GSK-Sanofi",
            'leiras' => "blabla",
            'adagolas' => "egyszeri adagolás",
            'receptre' => True,
            'aktiv' => True
        ]);

        Oltas::create([
            'tipus_id' => 6,
            'oltoanyag_neve' => 'Fureszpor',
            'forgalmazo' => "GSK-Sanofi",
            'leiras' => "blabla",
            'adagolas' => "kettő adag",
            'receptre' => True,
            'aktiv' => True
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

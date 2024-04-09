<?php


use App\Models\Oltas_tipus;
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
        Schema::create('oltas_tipuses', function (Blueprint $table) {
            $table->id('tipus_id');
            $table->string('tipus_elnev', 50);
            $table->boolean('kotelezo');
            $table->string('leiras');
            $table->timestamps();
        });

        Oltas_tipus::create([
            'tipus_elnev' => "Koronavirus",
            'kotelezo' => true,
            'leiras' => "Lorem ipsum dolor sit, amet consectetur adipisicing elit."
        ]);

        Oltas_tipus::create([
            'tipus_elnev' => "Rotavírus",
            'kotelezo' => false,
            'leiras' => "Quia quis voluptatum nulla natus, labore, ab excepturi rerum"
        ]);
        
        Oltas_tipus::create([
            'tipus_elnev' => "HPV",
            'kotelezo' => false,
            'leiras' => "adipisci ut repellat atque autem"
        ]);
        
        Oltas_tipus::create([
            'tipus_elnev' => "BCG",
            'kotelezo' => true,
            'leiras' => "magnam itaque"
        ]);

        Oltas_tipus::create([
            'tipus_elnev' => "Varicella",
            'kotelezo' => true,
            'leiras' => "blablabla"
        ]);

        Oltas_tipus::create([
            'tipus_elnev' => "BAKTIT",
            'kotelezo' => true,
            'leiras' => "szerintem jó választás"
        ]);
    }
    

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('oltas_tipuses');
    }
};

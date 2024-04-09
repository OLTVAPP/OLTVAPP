<?php

use App\Models\Beadando;
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
        Schema::create('beadandos', function (Blueprint $table) {
            $table->id('beadando_id');
            $table->foreignId('gyerek_id')->references('gyerek_taj')->on('gyereks');
            $table->foreignId('tipus_id')->references('tipus_id')->on('oltas_tipuses');
            $table->integer('ev');
            $table->integer('honap');
            $table->integer('hanyadik');
            $table->boolean('beadva');
            $table->timestamps();
        });

        Beadando::create([
            'gyerek_id' => 325245267,
            'tipus_id' => 1,
            'ev' => 2024,
            'honap' => 12,
            'hanyadik' => 1,
            'beadva' => false
        ]);

        Beadando::create([
            'gyerek_id' => 325245267,
            'tipus_id' => 2,
            'ev' => 2025,
            'honap' => 12,
            'hanyadik' => 2,
            'beadva' => false
        ]);

        Beadando::create([
            'gyerek_id' => 325245267,
            'tipus_id' => 3,
            'ev' => 2023,
            'honap' => 12,
            'hanyadik' => 1,
            'beadva' => true
        ]);

        Beadando::create([
            'gyerek_id' => 452645123,
            'tipus_id' => 1,
            'ev' => 2024,
            'honap' => 4,
            'hanyadik' => 1,
            'beadva' => false
        ]);

        Beadando::create([
            'gyerek_id' => 452645123,
            'tipus_id' => 1,
            'ev' => 2024,
            'honap' => 5,
            'hanyadik' => 2,
            'beadva' => false
        ]);

        Beadando::create([
            'gyerek_id' => 432354345,
            'tipus_id' => 5,
            'ev' => 2024,
            'honap' => 6,
            'hanyadik' => 1,
            'beadva' => false
        ]);

        Beadando::create([
            'gyerek_id' => 432354345,
            'tipus_id' => 1,
            'ev' => 2023,
            'honap' => 2,
            'hanyadik' => 1,
            'beadva' => true
        ]);

        Beadando::create([
            'gyerek_id' => 432354345,
            'tipus_id' => 1,
            'ev' => 2023,
            'honap' => 3,
            'hanyadik' => 2,
            'beadva' => true
        ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('beadandos');
    }
};

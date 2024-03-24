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
            $table->timestamps();
        });

        Beadando::create([
            'gyerek_id' => 232354346,
            'tipus_id' => 1,
            'ev' => 2024,
            'honap' => 12,
            'hanyadik' => 1
        ]);

        Beadando::create([
            'gyerek_id' => 232354346,
            'tipus_id' => 1,
            'ev' => 2025,
            'honap' => 12,
            'hanyadik' => 2
        ]);

        Beadando::create([
            'gyerek_id' => 232354346,
            'tipus_id' => 2,
            'ev' => 2023,
            'honap' => 12,
            'hanyadik' => 1
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

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
            $table->id('id');
            $table->foreignId('tipus_id')->references('tipus_id')->on('oltas_tipuses');
            $table->foreignId('forgalmazo_id')->references('forgalmazo_id')->on('forgalmazos');
            $table->string('szuksegessege');
            $table->string('mellek_hatasa');
            $table->string('adagolas');
            $table->boolean('receptre');
            $table->timestamps();

        });

        Oltas::create([
            'tipus_id' => 1,
            'forgalmazo_id' => 1,
            'szuksegessege' => "igen",
            'mellek_hatasa' => "hanyinger",
            'adagolas' => "2 naponta",
            'receptre' => false
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

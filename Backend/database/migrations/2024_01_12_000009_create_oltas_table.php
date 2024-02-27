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
            $table->string('forgalmazo', 50);
            $table->string('leiras');
            $table->string('adagolas');
            $table->boolean('receptre');
            $table->boolean('aktiv');
            $table->timestamps();

        });

        
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('oltas');
    }
};

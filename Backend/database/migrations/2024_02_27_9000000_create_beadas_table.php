<?php

use App\Models\Beadas;
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
        Schema::create('beadas', function (Blueprint $table) {
            $table->foreignId('orvos_id')->references('felhasznalo_id')->on('orvos');
            $table->foreignId('oltas_id')->references('oltas_id')->on('oltas');
            $table->foreignId('beadando_id')->references('beadando_id')->on('beadandos');
            $table->date('beadas_datuma');
            $table->string('megjegyzes')->nullable();
            $table->timestamps();
        });
        
        Beadas::create([
            'orvos_id' => 3,
            'oltas_id' => 1,
            'beadando_id' => 2,
            'beadas_datuma' => "2024-12-11",
            'megjegyzes' => "blabla"
        ]);

        Beadas::create([
            'orvos_id' => 4,
            'oltas_id' => 2,
            'beadando_id' => 1,
            'beadas_datuma' => "2024-12-11"
        ]);
    }



    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('beadas');
    }
};

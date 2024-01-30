<?php

use App\Models\Csalad;
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
        Schema::create('csalads', function (Blueprint $table) {
                $table->foreignId('szulo_id')->references('felhasznalo_id')->on('szulos');
                $table->foreignId('gyerek_id')->references('gyerek_taj')->on('gyereks');
                $table->timestamps();
        });

        
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('csalads');
    }
};

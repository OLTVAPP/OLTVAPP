<?php

use App\Models\Rendelo;
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
        Schema::create('rendelos', function (Blueprint $table) {
            $table->id('rendelo_id');
            $table->string('rendelo_cim');
            $table->integer('ajto_szam');
            $table->timestamps();
        });

        Rendelo::create([
            'rendelo_cim' => "Sajtos utca",
            'ajto_szam' => 1
        ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('rendelos');
    }
};

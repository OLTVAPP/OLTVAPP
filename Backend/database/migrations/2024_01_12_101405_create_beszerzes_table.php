<?php

use App\Models\Beszerzes;
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
        Schema::create('beszerzes', function (Blueprint $table) {
            $table->id('beszerzes_id');
            $table->foreignId('oltas_id')->references('oltas_id')->on('oltas');
            $table->foreignId('orvos_id')->references('felhasznalo_id')->on('orvos');
            $table->integer('darab');
            $table->date('beszerzes_datuma');
            $table->date('lejarati_datuma');
            $table->date('megsemmesites_datuma')->nullable();
            $table->timestamps();
        });

        Beszerzes::create([
            'oltas_id' => 1,
            'orvos_id' => 7,
            'darab' => 5,
            'beszerzes_datuma' => "2023-12-10",
            'lejarati_datuma' => "2024-12-10"
        ]);

        Beszerzes::create([
            'oltas_id' => 4,
            'orvos_id' => 7,
            'darab' => 10,
            'beszerzes_datuma' => "2023-12-10",
            'lejarati_datuma' => "2024-12-10",
            'megsemmesites_datuma' => "2024-12-11"
        ]);

        Beszerzes::create([
            'oltas_id' => 6,
            'orvos_id' => 7,
            'darab' => 20,
            'beszerzes_datuma' => "2023-12-10",
            'lejarati_datuma' => "2024-12-10"
        ]);

        Beszerzes::create([
            'oltas_id' => 1,
            'orvos_id' => 8,
            'darab' => 10,
            'beszerzes_datuma' => "2023-12-10",
            'lejarati_datuma' => "2024-12-10",
            'megsemmesites_datuma' => "2024-12-11"
        ]);

        Beszerzes::create([
            'oltas_id' => 2,
            'orvos_id' => 8,
            'darab' => 30,
            'beszerzes_datuma' => "2023-12-10",
            'lejarati_datuma' => "2024-12-10",
        ]);

        Beszerzes::create([
            'oltas_id' => 7,
            'orvos_id' => 9,
            'darab' => 30,
            'beszerzes_datuma' => "2023-05-12",
            'lejarati_datuma' => "2024-12-12",
        ]);
        
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('beszerzes');
    }
};

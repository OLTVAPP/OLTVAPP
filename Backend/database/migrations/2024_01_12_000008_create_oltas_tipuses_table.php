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
            $table->string('kotelezo');
            $table->string('leiras');
            $table->timestamps();
        });

        Oltas_tipus::create([
            'tipus_elnev' => "Koronavirus",
            'kotelezo' => "igen",
            'leiras' => "blabla"
        ]);

        Oltas_tipus::create([
            'tipus_elnev' => "ADHD",
            'kotelezo' => "nem",
            'leiras' => "blabla"
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

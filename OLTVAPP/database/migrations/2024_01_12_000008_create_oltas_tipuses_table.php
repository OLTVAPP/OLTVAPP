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
            $table->string('tipus_elnev');
            $table->string('kotelezo');
            $table->string('leiras');
            $table->integer('korosztaly');
            $table->timestamps();
        });

        Oltas_tipus::create([
            'tipus_elnev' => "rák",
            'kotelezo' => "igen",
            'leiras' => "blablabla",
            'korosztaly' => 14
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

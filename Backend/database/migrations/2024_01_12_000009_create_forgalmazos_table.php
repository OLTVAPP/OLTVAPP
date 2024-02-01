<?php

use App\Models\Forgalmazo;
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
        Schema::create('forgalmazos', function (Blueprint $table) {
            $table->id('forgalmazo_id');
            $table->string('forgalmazo_neve');
            $table->timestamps();
        });

       
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('forgalmazos');
    }
};

<?php

use App\Http\Controllers\FelhasznaloController;
use App\Models\Admin;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;
return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('admins', function (Blueprint $table) {
            $table->id('felhasznalo_id');
            $table->foreign('felhasznalo_id')->references('id')->on('felhasznalos');
            $table->string('vez_nev', 50);
            $table->string('ker_nev', 50);
            $table->timestamps();
        });

       

        // Add check condition
 


        Admin::create([
            'felhasznalo_id' => 2,
            'vez_nev' => "Mogyoródi",
            'ker_nev' => "Balázs",
        ]);  

        DB::unprepared('DROP TRIGGER IF EXISTS admins_check_felhasznalo_id_k_role');

        DB::statement('
        CREATE TRIGGER admins_check_felhasznalo_id_k_role BEFORE INSERT ON admins
        FOR EACH ROW
        BEGIN
            DECLARE felhasznalo_count INT;
            SELECT COUNT(*)
            INTO felhasznalo_count
            FROM felhasznalos
            WHERE id = NEW.felhasznalo_id AND szerepkor = \'A\';

            IF felhasznalo_count = 0 THEN
                SIGNAL SQLSTATE \'45000\' SET MESSAGE_TEXT = "The felhasznalo_id must reference an \'A\' role felhasznalos";
            END IF;
        END
    ');
       
        
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('admins');
        DB::unprepared('DROP TRIGGER IF EXISTS admins_check_felhasznalo_id_k_role');
    
    }
};

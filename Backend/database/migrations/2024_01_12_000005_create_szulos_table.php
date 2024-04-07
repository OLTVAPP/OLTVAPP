<?php

use App\Models\Szulo;
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
        Schema::create('szulos', function (Blueprint $table) {
            $table->id('felhasznalo_id');
            $table->foreign('felhasznalo_id')->references('id')->on('felhasznalos');
            $table->string('vez_nev', 50);
            $table->string('ker_nev', 50);
            $table->string('szemelyi_igazolvany_szam', 12);
            $table->string('telefonszam', 12);
            $table->string('lakcim_varos', 50);
            $table->integer('lakcim_irSzam');
            $table->string('lakcim_utca', 100);
            $table->timestamps();
        });

   

        Szulo::create([
            'felhasznalo_id' => 1,
            'vez_nev' => "Rozsané",
            'ker_nev' => "Sandor Ilonka",
            'szemelyi_igazolvany_szam' => "321332RE",
            'telefonszam' => "+36202345621",
            'lakcim_varos' => "Pécs",
            'lakcim_irSzam' => 4535,
            'lakcim_utca' => "Rántott utca 2.",
        ]);

        Szulo::create([
            'felhasznalo_id' => 2,
            'vez_nev' => "Somogyvári",
            'ker_nev' => "Márton",
            'szemelyi_igazolvany_szam' => "223412RE",
            'telefonszam' => "+36102238194",
            'lakcim_varos' => "Budapest",
            'lakcim_irSzam' => 3525,
            'lakcim_utca' => "Szent jakab utca 23.",
        ]);

        Szulo::create([
            'felhasznalo_id' => 3,
            'vez_nev' => "Rozsás",
            'ker_nev' => "Julianna",
            'szemelyi_igazolvany_szam' => "323546RE",
            'telefonszam' => "+36306892527",
            'lakcim_varos' => "Kacsóta",
            'lakcim_irSzam' => 3438,
            'lakcim_utca' => "Földes utca 56.",
        ]);

        DB::unprepared('
        CREATE TRIGGER szulo_check_felhasznalo_id_k_role BEFORE INSERT ON szulos
        FOR EACH ROW
        BEGIN
            DECLARE felhasznalo_count INT;
            SELECT COUNT(*)
            INTO felhasznalo_count
            FROM felhasznalos
            WHERE id = NEW.felhasznalo_id AND szerepkor = \'S\';

            IF felhasznalo_count = 0 THEN
                SIGNAL SQLSTATE \'45000\' SET MESSAGE_TEXT = "The felhasznalo_id must reference an \'S\' role felhasznalos";
            END IF;
        END
    ');
       
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('szulos');



    

    }
};

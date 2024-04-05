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
            'vez_nev' => "Hát",
            'ker_nev' => "Izsák",
            'szemelyi_igazolvany_szam' => "3242342RE",
            'telefonszam' => "+36202299124",
            'lakcim_varos' => "Pécs",
            'lakcim_irSzam' => 4535,
            'lakcim_utca' => "Hát utca",
        ]);

        Szulo::create([
            'felhasznalo_id' => 1,
            'vez_nev' => "Hata",
            'ker_nev' => "Cuka",
            'szemelyi_igazolvany_szam' => "3232342RE",
            'telefonszam' => "+36202299124",
            'lakcim_varos' => "Pécs",
            'lakcim_irSzam' => 4535,
            'lakcim_utca' => "Margit utca",
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

<?php

use App\Models\Orvos;
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
        Schema::create('orvos', function (Blueprint $table) {
            $table->id('felhasznalo_id');
            $table->foreign('felhasznalo_id')->references('id')->on('felhasznalos');
            $table->string('vez_nev', 50);
            $table->string('ker_nev', 50);
            $table->string('tel_szam', 30);
            $table->string('publikus_email', 254);
            $table->integer('rendelo_ajto_szam');
            $table->timestamps();
        });

 
        Orvos::create([
            'felhasznalo_id' => 3,
            'vez_nev' => 'Dr.Bagoly',
            'ker_nev' => 'Fecske',
            'tel_szam' => '+3453454',
            'publikus_email' => 'kocvagydr@gmail.com',
            'rendelo_ajto_szam' => 12
        ]);   
        

        
        Orvos::create([
            'felhasznalo_id' => 4,
            'vez_nev' => "asdf",
            'ker_nev' => "dgfdm",
            'tel_szam' => "+36209432",
            'publikus_email' => "kov@gmail.com",
            'rendelo_ajto_szam' => 2
        ]);
        DB::unprepared('
        CREATE TRIGGER orvos_check_felhasznalo_id_k_role BEFORE INSERT ON orvos
        FOR EACH ROW
        BEGIN
            DECLARE felhasznalo_count INT;
            SELECT COUNT(*)
            INTO felhasznalo_count
            FROM felhasznalos
            WHERE id = NEW.felhasznalo_id AND szerepkor = \'O\';

            IF felhasznalo_count = 0 THEN
                SIGNAL SQLSTATE \'45000\' SET MESSAGE_TEXT = "The felhasznalo_id must reference an \'O\' role felhasznalos";
            END IF;
        END
    ');

       
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orvos');
    }
};

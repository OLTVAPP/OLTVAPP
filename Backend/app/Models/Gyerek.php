<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Gyerek extends Model
{
    use HasFactory;

    protected $primaryKey = 'gyerek_taj';

    protected $fillable = [
        'vez_nev',
        'ker_nev',
        'szul_datum',
        'szul_hely',
        'orvos_id',
        'szulo_id',
        'lakcim_varos',
        'lakcim_irSzam',
        'lakcim_utca',
        'erzekenyseg'
    ];
}

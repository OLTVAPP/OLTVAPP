<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Orvos extends Model
{
    use HasFactory;

    protected $primarykey = 'orvos_id';

    protected $fillable = [
        'felhasznalo_id',
        'vez_nev',
        'ker_nev',
        'rendelo_id',
        'tel_szam',
        'publikus_email'
    ];
}

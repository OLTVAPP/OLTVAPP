<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphOne;

class Orvos extends Model
{
    use HasFactory;

    protected $primaryKey = 'felhasznalo_id';
    public $autoincrement = false;

    protected $fillable = [
        'vez_nev',
        'ker_nev',
        'tel_szam',
        'publikus_email',
        'rendelo_ajto_szam'
    ];


}

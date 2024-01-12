<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Beadas extends Model
{
    use HasFactory;

    protected $fillable = [
        'orvos_id',
        'gyerek_id',
        'idopont',
        'beadas_datuma',
        'megjegyzes',
        'tervezett_ido',
        'oltas_id'
    ];
}

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
        'tervezett_beadas',
        'beadas_datuma',
        'megjegyzes',
        'oltas_id'
    ];
}

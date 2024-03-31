<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Beadas extends Model
{
    use HasFactory;

    protected $fillable = [
        'orvos_id',
        'oltas_id',
        'beadas_datuma',
        'megjegyzes',
        'beadando_id'
       
    ];
}

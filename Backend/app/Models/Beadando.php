<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Beadando extends Model
{
    use HasFactory;

    protected $primaryKey = 'beadando_id';


    protected $fillable = [
        'tipus_id',
        'ev',
        'honap',
        'hanyadik'
    ];

}

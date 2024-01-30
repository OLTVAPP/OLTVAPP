<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Csalad extends Model
{
    use HasFactory;

    protected $fillable = [
        'szulo_id',
        'gyerek_id'
    ];
}

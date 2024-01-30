<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Oltas extends Model
{
    use HasFactory;

    protected $primaryKey = 'oltas_id';

    protected $fillable = [
        'tipus_id',
        'forgalmazo_id',
        'szuksegessege',
        'mellek_hatasa',
        'adagolas',
        'receptre'
    ];
}

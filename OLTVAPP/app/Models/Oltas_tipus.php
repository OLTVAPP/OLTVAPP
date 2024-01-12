<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Oltas_tipus extends Model
{
    use HasFactory;

    protected $primarykey = 'tipus_id';

    protected $fillable = [
        'tipus_elnev',
        'kotelezo',
        'beadando'
    ];
}

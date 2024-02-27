<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Keszlet extends Model
{
    use HasFactory;

    protected $primaryKey = 'keszlet_id';

    protected $fillable = [
        'oltas_id',
        'orvos_id',
        'darab',
        'beszerzes_datuma',
        'lejarati_datuma',
        'megsemessites_datuma'
    ];
}

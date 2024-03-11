<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Beszerzes extends Model
{
    use HasFactory;
    protected $primaryKey = 'beszerzes_id';

    protected $fillable = [
        'oltas_id',
        'orvos_id',
        'darab',
        'beszerzes_datuma',
        'lejarati_datuma',
        'megsemmesites_datuma'
    ];
}

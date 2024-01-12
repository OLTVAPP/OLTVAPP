<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Rendelo extends Model
{
    use HasFactory;

    protected $primarykey = 'rendelo_id';

    protected $fillable = [
        'rendelo_cim',
        'ajto_szam'
    ];
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Admin extends Model
{
    use HasFactory;

    protected $primarykey = 'admin_id';

    protected $fillable = [
        'felhasznalo_id',
        'vez_nev',
        'ker_nev'
    ];
}

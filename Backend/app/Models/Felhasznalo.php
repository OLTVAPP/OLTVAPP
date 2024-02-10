<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Felhasznalo extends Model
{
    use HasFactory;

    protected $primaryKey = 'felhasznalo_id';

    protected $fillable = [
        'felhasznalo_nev',
        'jelszo',
        'szerepkor',
        'felhasznalo_email',
        'aktiv'
    ];

  

    
}

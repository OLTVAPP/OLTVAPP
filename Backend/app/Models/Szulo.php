<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Szulo extends Model
{
    use HasFactory;

    protected $primaryKey = 'felhasznalo_id';
    public $autoincrement = false;

    protected $fillable = [
        'vez_nev',
        'ker_nev',
        'szemelyi_igazolvany_szam',
        'lakcim_varos',
        'lakcim_irSzam',
        'lakcim_utca'
    ];

    

    
}

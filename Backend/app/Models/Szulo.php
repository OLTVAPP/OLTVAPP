<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Szulo extends Model
{
    use HasFactory;



    protected $fillable = [
        'felhasznalo_id',
        'vez_nev',
        'ker_nev',
        'szemelyi_igazolvany_szam',
        'telefonszam',
        'lakcim_varos',
        'lakcim_irSzam',
        'lakcim_utca'
    ];

    public function felhasznalo_szulo()
    {
        return $this->belongsTo(Felhasznalo::class, 'id', 'felhasznalo_id');
    }
}

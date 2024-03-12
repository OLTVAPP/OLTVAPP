<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Szulo extends Model
{
    use HasFactory;

    protected $primaryKey = 'felhasznalo_id';

    protected $fillable = [
        'vez_nev',
        'ker_nev',
        'szemelyi_igazolvany_szam',
        'telefonszam',
        'lakcim_varos',
        'lakcim_irSzam',
        'lakcim_utca'
    ];

    public function felhasznalo()
    {
        return $this->belongsTo(Felhasznalo::class);
    }
}

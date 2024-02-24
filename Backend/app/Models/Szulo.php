<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Szulo extends Model
{
    use HasFactory;

    protected $fillable = [
        'felhasznalo_felhasznalo_id',
        'vez_nev',
        'ker_nev',
        'szemelyi_igazolvany_szam',
        'lakcim_varos',
        'lakcim_irSzam',
        'lakcim_utca'
    ];

    public function felhasznalo()
    {
        return $this->belongsTo(Felhasznalo::class);
    }
}

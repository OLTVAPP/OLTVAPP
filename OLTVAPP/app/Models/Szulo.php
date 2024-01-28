<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Szulo extends Model
{
    use HasFactory;

    protected $fillable = [
        'vez_nev',
        'ker_nev',
        'lakcim_város',
        'lakcim_irSzam',
        'lakszim_utca'
    ];

    protected function setKeysForSaveQuery($query)
    {
        $query
            ->where('felhasznalo_id', '=', $this->getAttribute('felhasznalo_id'));
        return $query;
    }
}

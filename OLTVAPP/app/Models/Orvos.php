<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Orvos extends Model
{
    use HasFactory;

    protected $fillable = [
        'vez_nev',
        'ker_nev',
        'rendelo_id',
        'tel_szam',
        'publikus_email'
    ];

    protected function setKeysForSaveQuery($query)
    {
        $query
            ->where('felhasznalo_id', '=', $this->getAttribute('felhasznalo_id'));
        return $query;
    }
}

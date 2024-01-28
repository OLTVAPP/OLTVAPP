<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Admin extends Model
{
    use HasFactory;

    protected $fillable = [
        'vez_nev',
        'ker_nev'
    ];

    protected function setKeysForSaveQuery($query)
    {
        $query
            ->where('felhasznalo_id', '=', $this->getAttribute('felhasznalo_id'));
        return $query;
    }
}

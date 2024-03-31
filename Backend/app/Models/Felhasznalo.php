<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Felhasznalo extends Model
{
    use HasFactory;

    protected $primaryKey = 'id';

    protected $fillable = [
        'felhasznalo_nev',
        'jelszo',
        'szerepkor',
        'felhasznalo_email',
        'aktiv'
    ];

    public function szulo()
    {
        return $this->hasOne(Szulo::class);
    }



    
}

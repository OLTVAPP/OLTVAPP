<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Admin extends Model
{
    use HasFactory;

    protected $primaryKey = 'felhasznalo_id';
    public $autoincrement = false;
    
    protected $fillable = [
        'vez_nev',
        'ker_nev'
    ];
    public function felhasznalo()
    {
        return $this->belongsTo(Felhasznalo::class);
    }
   
}

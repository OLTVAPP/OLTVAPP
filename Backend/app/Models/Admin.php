<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Admin extends Model
{
    use HasFactory;


    
    protected $fillable = [
        'felhasznalo_id',
        'vez_nev',
        'ker_nev'
    ];
    public function felhasznalo()
    {
        return $this->belongsTo(Felhasznalo::class);
    }
   /* public static function boot()
    {
        parent::boot();

        static::saving(function ($admin) {
            $felhasznalo = Felhasznalo::find($admin->felhasznalo_id);

            if (!$felhasznalo || $felhasznalo->szerepkor !== 'A') {
                throw new \Exception('Nem megfelelő felhasználó azonosító vagy szerepkör.');
            }
        });
    } */
}

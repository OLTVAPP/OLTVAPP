<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Megsemisites extends Model
{
    use HasFactory;

    protected $primaryKey = 'keszlet_id';

    protected $fillable = [
        'megsemisitve',
        'megsemisitve_d',
    ];

   
}

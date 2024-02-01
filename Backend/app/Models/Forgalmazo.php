<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Forgalmazo extends Model
{
    use HasFactory;

    protected $primaryKey = 'forgalmazo_id';

    protected $fillable = [
        'forgalmazo_neve'
    ];
}

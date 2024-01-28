<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Megsemisites extends Model
{
    use HasFactory;

    protected $fillable = [
        'megsemisitve',
        'megsemisitve_d',
    ];

    protected function setKeysForSaveQuery($query)
    {
        $query
            ->where('keszlet_id', '=', $this->getAttribute('keszlet_id'));
        return $query;
    }
}

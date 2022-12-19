<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Support\Facades\DB;

class Session extends Model
{
    use HasFactory;

    protected $fillable = [
        'retries',
        'memotestId',
        'numberOfPairs',
        'state'
    ];
    
    public $timestamps = false;
    
}
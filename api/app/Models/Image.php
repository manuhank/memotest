<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    use HasFactory;
    protected $fillable = [
        'url', "memotestId"
    ];
    public $timestamps = false;
    public function memotest()
    {
        return $this->belongsTo(Memotest::class, 'memotestId');
    }
}

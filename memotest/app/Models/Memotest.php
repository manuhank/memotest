<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Memotest extends Model
{
    use HasFactory;

        /**
     * Write code on Method
     *
     * @return response()
     */
    protected $fillable = [
        'name', 'urls' 
    ]; 

    protected $casts = [
        'urls' => 'array',
    ];
    public $timestamps = false;
}

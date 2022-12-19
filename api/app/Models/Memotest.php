<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Memotest extends Model
{
    use HasFactory;

    protected $fillable = [
        'name' 
    ]; 

    public $timestamps = false;

    public function images()
    {
        return $this->hasMany(Image::class, 'memotestId');
    }
    
}

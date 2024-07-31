<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Album extends Model
{
    use HasFactory;

    protected $table = 'albums';

    protected $fillable = [
        'title',
        'artist',
        'release_date'
    ];

    public function faixas()
    {
        return $this->hasMany(Faixa::class);
    }
}

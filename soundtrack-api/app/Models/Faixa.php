<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Faixa extends Model
{
    use HasFactory;

    protected $table = 'faixas';

    protected $fillable = [
        'album_id',
        'title',
        'duration'
    ];

    public function album()
    {
        return $this->belongsTo(Album::class);
    }
}

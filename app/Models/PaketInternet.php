<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PaketInternet extends Model
{
    use HasFactory;
    
    protected $table = 'paket_internet';
    protected $primaryKey = 'id';
    protected $fillable = ['nama_paket', 'kecepatan', 'harga', 'fasilitas'];
}
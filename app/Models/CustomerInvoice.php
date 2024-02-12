<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CustomerInvoice extends Model
{
    use HasFactory;

    protected $table = 'customer_invoice';
    protected $primaryKey = 'id';
    protected $fillable = ['id', 'id_customer', 'id_paket_internet', 'tanggal', 'biaya', 'status', 'keterangan'];
}
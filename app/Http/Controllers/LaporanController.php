<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\CustomerInvoice;

class LaporanController extends Controller
{
    public function index()
    {
        $this->authorize('IsAdmin');
        $customerInvoice = CustomerInvoice::join('customer', 'customer_invoice.id_customer', '=', 'customer.id')
                                ->join('paket_internet', 'customer_invoice.id_paket_internet', '=', 'paket_internet.id')
                                ->select(
                                    'customer_invoice.id as id',
                                    'customer.name as name',
                                    'paket_internet.nama_paket as nama_paket',
                                    'paket_internet.harga as harga',
                                    'paket_internet.fasilitas',
                                    'customer_invoice.status as status_invoice',
                                    'customer_invoice.keterangan as keterangan',
                                )
                                ->orderBy('customer_invoice.id', 'asc')
                                ->where('customer_invoice.status', 'approve')
                                ->get();

        return Inertia::render('Laporan', [
            'customerInvoice' => $customerInvoice
        ]);
    }
}
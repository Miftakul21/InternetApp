<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\CustomerInvoice;
use Inertia\Inertia;
use App\Models\Customer;
use App\Models\PaketInternet;
use Illuminate\Support\Facades\File;

class CustomerInvoiceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $this->authorize('IsSales');

        $customerInvoice = CustomerInvoice::join('customer', 'customer_invoice.id_customer', '=', 'customer.id')
                                            ->join('paket_internet', 'customer_invoice.id_paket_internet', '=', 'paket_internet.id')
                                            ->select(
                                                'customer_invoice.id as id',
                                                'customer.name as name',
                                                'paket_internet.nama_paket as nama_paket',
                                                'paket_internet.harga as harga',
                                                'customer.image_ktp as image_ktp',
                                                'customer.image_rumah as image_rumah',
                                                'customer_invoice.status as status_invoice',
                                                'customer_invoice.keterangan as keterangan',
                                            )
                                            ->orderBy('customer_invoice.id', 'asc')
                                            ->get();

        return Inertia::render('CustomerInvoice', [
            'customerInvoice' => $customerInvoice
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $this->authorize('IsSales');

        $customer = Customer::all();
        $paketInternet = PaketInternet::all(); 

        return Inertia::render('Form/CreateCustomerInvoice', [
            'customer' => $customer,
            'paketInternet' => $paketInternet,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validation = $request->validate([
            'id_customer' => 'required',
            'id_paket_internet' => 'required',
            'tanggal' => 'required',
            'image_ktp' => 'image|mimes:jpg,jpeg,png|max:2048',
            'image_rumah' => 'image|mimes:jpg,jpeg,png|max:2048'
        ]);

        // Set File name & move folder
        $nameFotoKtp = uniqid().'_'.$request->image_ktp->getClientOriginalName();
        $request->image_ktp->move('foto_ktp', $nameFotoKtp);

        $nameFotoRumah = uniqid().'_'.$request->image_rumah->getClientOriginalName();
        $request->image_rumah->move('foto_rumah', $nameFotoRumah);

        Customer::where('id', $request->id_customer)->update([
            'image_ktp' => $nameFotoKtp,
            'image_rumah' => $nameFotoRumah,
        ]);

        CustomerInvoice::create([
            'id_customer' => $request->id_customer,
            'id_paket_internet' => $request->id_paket_internet,
            'tanggal' => $request->tanggal,
            'status' => 'pending'
        ]);

        return redirect()->route('customer-invoice.index')->with(['success' => 'Data berhasil disimpan']);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(CustomerInvoice $customerInvoice)
    {
        // dd($customerInvoice->id);
        // Get id customer in table customer_invoice
        $customer = CustomerInvoice::where('id', $customerInvoice->id)->get();
        
        // Get data image customer in table customer
        $dataImageCustomer = Customer::where('id', $customer[0]->id_customer)->get();
        $image_ktp = $dataImageCustomer[0]->image_ktp;
        $image_rumah = $dataImageCustomer[0]->image_rumah;

        if(File::exists(public_path('foto_ktp/'.$image_ktp))) {
            File::delete(public_path('foto_ktp/'.$image_ktp));
        }

        if(File::exists(public_path('foto_rumah/'.$image_rumah))) {
            File::delete(public_path('foto_rumah/'.$image_rumah)) ;
        }

        // Update image 
        Customer::where('id', $customer[0]->id_customer)->update([
            'image_ktp' => '',
            'image_rumah' => '',
        ]);

        $customerInvoice->delete();

        return redirect()->route('customer-invoice.index')->with(['success' => 'Data berhasil hapus']);
    }


    public function invoice()
    {
        // Hak Akses admin
        $this->authorize('IsAdmin');
        $customerInvoice = CustomerInvoice::join('customer', 'customer_invoice.id_customer', '=', 'customer.id')
                                    ->join('paket_internet', 'customer_invoice.id_paket_internet', '=', 'paket_internet.id')
                                    ->select(
                                        'customer_invoice.id as id',
                                        'customer.name as name',
                                        'paket_internet.nama_paket as nama_paket',
                                        'paket_internet.harga as harga',
                                        'customer.image_ktp as image_ktp',
                                        'customer.image_rumah as image_rumah',
                                        'customer_invoice.status as status_invoice',
                                        'customer_invoice.keterangan as keterangan',
                                    )
                                    ->orderBy('customer_invoice.id', 'asc')
                                    ->where('customer_invoice.status', 'pendding')
                                    ->get();
                                    
        return Inertia::render('Invoice', [
            'customerInvoice' => $customerInvoice
        ]);
    }

    public function invoiceApprove(Request $request, $id){
        // dd($request->all());

        CustomerInvoice::where('id', $id)->update([
            'status' => $request->status,
            'keterangan' => $request->keterangan 
        ]);
        
        return redirect('/invoice');
    }

    public function invoiceApproved()
    {
        $customerInvoice = CustomerInvoice::join('customer', 'customer_invoice.id_customer', '=', 'customer.id')
                            ->join('paket_internet', 'customer_invoice.id_paket_internet', '=', 'paket_internet.id')
                            ->select(
                                'customer_invoice.id as id',
                                'customer.name as name',
                                'paket_internet.nama_paket as nama_paket',
                                'paket_internet.harga as harga',
                                'customer.image_ktp as image_ktp',
                                'customer.image_rumah as image_rumah',
                                'customer_invoice.status as status_invoice',
                                'customer_invoice.keterangan as keterangan',
                            )
                            ->orderBy('customer_invoice.id', 'asc')
                            ->where('customer_invoice.status', 'approve')
                            ->get();

        return Inertia::render('InvoiceApprove', [
            'customerInvoice' => $customerInvoice
        ]);
    }

    public function invoiceRejected()
    {
        $customerInvoice = CustomerInvoice::join('customer', 'customer_invoice.id_customer', '=', 'customer.id')
                            ->join('paket_internet', 'customer_invoice.id_paket_internet', '=', 'paket_internet.id')
                            ->select(
                                'customer_invoice.id as id',
                                'customer.name as name',
                                'paket_internet.nama_paket as nama_paket',
                                'paket_internet.harga as harga',
                                'customer.image_ktp as image_ktp',
                                'customer.image_rumah as image_rumah',
                                'customer_invoice.status as status_invoice',
                                'customer_invoice.keterangan as keterangan',
                            )
                            ->orderBy('customer_invoice.id', 'asc')
                            ->where('customer_invoice.status', 'rejected')
                            ->get();

        return Inertia::render('InvoiceReject', [
            'customerInvoice' => $customerInvoice
        ]);
    }
}
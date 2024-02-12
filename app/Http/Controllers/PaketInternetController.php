<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\PaketInternet;

class PaketInternetController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $this->authorize('IsAdmin');
        $paketInternet = PaketInternet::all();
        return Inertia::render('Internet', [
            'paketInternet' => $paketInternet
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $this->authorize('IsAdmin');
        return Inertia::render('Form/CreateInternet');
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
            'nama_paket' => 'required',
            'kecepatan' => 'required',
            'harga' => 'required',
        ]);

        PaketInternet::create([
            'nama_paket' => $request->nama_paket,
            'kecepatan' => $request->kecepatan,
            'harga' => $request->harga,
            'fasilitas' => $request->fasilitas,
        ]);

        return redirect()->route('paket-internet.index')->with(['success' => 'Data berhasil disimpan']);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(PaketInternet $paketInternet)
    {
        $this->authorize('IsAdmin');
        return Inertia::render('Form/EditInternet', [
            'paketInternet' => $paketInternet
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(PaketInternet $paketInternet, Request $request)
    {
        // dd($request->all());
        
        $validation = $request->validate([
            'nama_paket' => 'required',
            'kecepatan' => 'required',
            'harga' => 'required',
        ]);

        $paketInternet->update([
            'nama_paket' => $request->nama_paket,
            'kecepatan' => $request->kecepatan,
            'harga' => $request->harga,
            'fasilitas' => $request->fasilitas,
        ]);

        return redirect()->route('paket-internet.index')->with(['success' => 'Data berhasil update']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(PaketInternet $paketInternet)
    {
        $paketInternet->delete();
        return redirect()->route('paket-internet.index')->with(['success' => 'Data berhasil hapus']);
    }
}
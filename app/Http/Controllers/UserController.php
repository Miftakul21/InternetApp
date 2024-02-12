<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $this->authorize('IsAdmin');

        $user = User::get();
        return Inertia::render('User', [
            'user' => $user
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
        return Inertia::render('Form/CreateUser');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // dd($request->all());
        $validation = $request->validate([
            'name' => 'required',
            'nomor_induk' => 'required',
            'password' => 'required|min:6',
            'role' => 'required'
        ]);

        User::create([
            'name' => $request->name,
            'nomor_induk' => $request->nomor_induk,
            'password' => Hash::make($request->password),
            'role' => $request->role
        ]);

        return redirect()->route('user.index')->with(['Success' => 'Data berhasil disimpan']);
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
        $this->authorize('IsAdmin');
        $data = User::where('id', $id)->get();
        $user = [
            'id' => $data[0]->id,
            'name' => $data[0]->name,
            'nomor_induk' => $data[0]->nomor_induk,
            'password' => $data[0]->password,
            'role' => $data[0]->role
        ];

        return Inertia::render('Form/EditUser', [
            'user' => $user
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        // dd($request->all());

        $validation = $request->validate([
            'name' => 'required',
            'nomor_induk' => 'required',
            'role' => 'required'
        ]);

        $data = User::where('id', $request->id)->get();

        $password = !is_null($request->password) ? Hash::make($request->password) : $data[0]->password;


        User::where('id', $request->id)->update([
            'name' => $request->name,
            'nomor_induk' => $request->nomor_induk,
            'password' => $password,
            'role' => $request->role
        ]);

        return redirect()->route('user.index')->with(['success' => 'Data berhasil update']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        User::where('id', $id)->delete();
        return redirect()->route('user.index')->with(['success' => 'Data berhasil hapus']);
    }
}
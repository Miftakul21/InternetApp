<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login()
    {
        return Inertia::render('Login');
    }

    public function auth(Request $request)
    {
        $validate = $request->validate([
            'nomor_induk' => 'required',
            'password' => 'required|min:6'
        ]);

        $credentials = $request->only('nomor_induk', 'password');

        if(Auth::attempt($credentials)) {
            //regenerate session
            $request->session()->regenerate();
            return redirect()->intended('/dashboard');
        }

        return back()->withErrors(['nomor_induk' => 'Nomor induk tidak ditemukan']);
    }
}
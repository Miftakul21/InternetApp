<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Models\PaketInternet;
use App\Models\CustomerInvoice;

class DashboardController extends Controller
{
    public function index()
    {
        if(Auth::check()) {
            $user = User::all();
            $paketInternet = PaketInternet::all();
            $customerInvoice = CustomerInvoice::where('status', 'approve')->get();
            return Inertia::render('Dashboard', [
                'user' => $user,
                'paketInternet' => $paketInternet,
                'customerInvoice' => $customerInvoice
            ]);
        }

    }

    public function logout(Request $request)
    {
        auth()->logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return redirect('/');
    }
}
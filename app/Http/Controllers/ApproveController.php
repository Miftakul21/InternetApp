<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ApproveController extends Controller
{
    public function approveCustomer()
    {
        return Inertia::render('ApproveCustomer');
    }

    public function cancelCustomer()
    {
        return Inertia::render('CancelCustomer');
    }

    
}
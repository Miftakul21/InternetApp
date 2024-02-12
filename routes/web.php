<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\CustomerInvoiceController;
use App\Http\Controllers\LaporanController;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [AuthController::class, 'login'])->name('login')->middleware('guest');
Route::post('/auth', [AuthController::class, 'auth'])->middleware('guest');

// Dashboard
Route::get('/dashboard', [DashboardController::class, 'index'])->middleware('auth');
Route::post('/logout', [DashboardController::class, 'logout'])->middleware('auth');

Route::resource('/user', App\Http\Controllers\UserController::class);
Route::resource('/paket-internet', App\Http\Controllers\PaketInternetController::class);
Route::resource('/customer', App\Http\Controllers\CustomerController::class)->middleware('auth');
Route::resource('/customer-invoice', App\Http\Controllers\CustomerInvoiceController::class)->middleware('auth');

Route::get('/invoice', [CustomerInvoiceController::class, 'invoice']);
Route::put('/invoice-approve/{id}', [CustomerInvoiceController::class, 'invoiceApprove']);
Route::get('/invoice-approved', [CustomerInvoiceController::class, 'invoiceApproved']);
Route::get('/invoice-rejected', [CustomerInvoiceController::class, 'invoiceRejected']);

Route::get('/laporan-invoice', [LaporanController::class, 'index']);
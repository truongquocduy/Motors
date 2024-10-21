<?php

use App\Http\Controllers\TopController;
use Illuminate\Support\Facades\Route;

Route::get('/welcome', function () {
    return view('welcome');
});

Route::get('/', [TopController::class, 'index'])->name('top');

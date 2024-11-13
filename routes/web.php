<?php

use App\Http\Controllers\ProductController;
use App\Http\Controllers\DashboardController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [DashboardController::class, 'index'])->name('dashboard');

// Product resource routes for managing products
Route::resource('products', ProductController::class);

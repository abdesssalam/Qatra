<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;



Route::get('/test',[HomeController::class,'getForUrgence']);
Route::view('/{path?}', 'index')
     ->where('path', '.*')
     ->name('react');

<?php

use Illuminate\Support\Facades\Route;
use Modules\Auth\Http\Controllers\AuthController;

/*
|--------------------------------------------------------------------------
| Auth Module - API Routes
|--------------------------------------------------------------------------
*/

// Public routes (no auth required)
Route::prefix('admin')->name('admin.')->group(function () {
    Route::post('login', [AuthController::class, 'login'])->name('login');
    Route::post('forgot-password', [AuthController::class, 'forgotPassword']);
    Route::post('reset-password',  [AuthController::class, 'resetPassword']);
});

// Protected routes (Sanctum token required)
Route::prefix('admin')->name('admin.')->middleware('auth:sanctum')->group(function () {
    Route::post('logout',          [AuthController::class, 'logout'])->name('logout');
    Route::get('me',               [AuthController::class, 'me'])->name('me');
    Route::put('profile',          [AuthController::class, 'updateProfile'])->name('profile.update');
    Route::put('change-password',  [AuthController::class, 'changePassword'])->name('password.change');
});

<?php

use Illuminate\Support\Facades\Route;
use Modules\Profile\Http\Controllers\ProfileController;

Route::middleware(['auth:sanctum'])->prefix('admin')->group(function () {
    Route::get('profile',                      [ProfileController::class, 'show']);
    Route::put('profile',                      [ProfileController::class, 'update']);
    Route::put('profile/request-email-change', [ProfileController::class, 'requestEmailChange']);
    Route::get('profile/confirm-email',        [ProfileController::class, 'confirmEmailChange']);
    Route::put('profile/password',             [ProfileController::class, 'changePassword']);
});

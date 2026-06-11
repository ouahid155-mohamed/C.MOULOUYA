<?php

use Illuminate\Support\Facades\Route;
use Modules\Contact\Http\Controllers\ContactController;

// Route publique — depuis le formulaire du site vitrine (sans auth)
Route::post('contact', [ContactController::class, 'store']);

// Routes protégées — back-office admin
Route::middleware(['auth:sanctum'])->prefix('admin/contact')->group(function () {
    Route::get('dashboard/stats',    [ContactController::class, 'dashboardStats']);
    Route::get('messages',           [ContactController::class, 'index']);
    Route::get('messages/{id}',      [ContactController::class, 'show']);
    Route::put('messages/{id}/read', [ContactController::class, 'markAsRead']);
    Route::delete('messages/{id}',   [ContactController::class, 'destroy']);
});

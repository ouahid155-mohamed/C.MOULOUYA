<?php

use Illuminate\Support\Facades\Route;
use Modules\CMS\Http\Controllers\CMSController;

// Public content endpoint for website vitrine (no auth)
Route::get('cms/content', [CMSController::class, 'getContent']);

// Protected back-office admin endpoints
Route::middleware(['auth:sanctum'])->prefix('admin/cms')->group(function () {
    // Texts
    Route::get('texts', [CMSController::class, 'getTexts']);
    Route::put('texts', [CMSController::class, 'updateTexts']);

    // Specialties
    Route::get('specialties', [CMSController::class, 'getSpecialties']);
    Route::post('specialties', [CMSController::class, 'storeSpecialty']);
    Route::put('specialties/{id}', [CMSController::class, 'updateSpecialty']);
    Route::delete('specialties/{id}', [CMSController::class, 'destroySpecialty']);

    // Stats
    Route::get('stats', [CMSController::class, 'getStats']);
    Route::put('stats', [CMSController::class, 'updateStats']);

    // Contact & Socials
    Route::get('contact', [CMSController::class, 'getContact']);
    Route::put('contact', [CMSController::class, 'updateContact']);

    // FAQ
    Route::get('faq', [CMSController::class, 'getFaq']);
    Route::post('faq', [CMSController::class, 'storeFaq']);
    Route::put('faq/{id}', [CMSController::class, 'updateFaq']);
    Route::delete('faq/{id}', [CMSController::class, 'destroyFaq']);

    // Media
    Route::get('media', [CMSController::class, 'getMedia']);
    Route::post('media', [CMSController::class, 'uploadMedia']);
});

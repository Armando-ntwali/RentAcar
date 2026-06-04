<?php

use App\Http\Controllers\BookingController;
use App\Http\Controllers\HomePagesController;
use App\Enums\UserRole;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth', 'active'])->group(function () {
    Route::get('/dashboard', function (Request $request) {
        return match ($request->user()->role) {
            UserRole::ADMIN => redirect()->route('admin.home'),
            UserRole::CLIENT => redirect()->route('client.home'),
            default => redirect()->route('home'),
        };
    })->name('dashboard');

    Route::get('/', [HomePagesController::class, 'index'])->name('home');
    Route::get('/fleet', [HomePagesController::class, 'fleet'])->name('fleet');
    Route::get('/about', [HomePagesController::class, 'about'])->name('about');
    Route::get('/contact', [HomePagesController::class, 'contact'])->name('contact');
    Route::post('/contact/guestContact', [HomePagesController::class, 'guestContact'])->name('contact.guestContact');

    Route::get('/fleet/{car}', [BookingController::class, 'show'])->name('fleet.show');
    Route::post('/fleet/{car}', [BookingController::class, 'book'])->name('fleet.book');

    Route::get('/booking/{reservation}', [BookingController::class, 'confirmation'])->name('booking.confirmation');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
require __DIR__.'/admin.php';
require __DIR__.'/client.php';

<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\CarsController;
use App\Http\Controllers\Admin\ReservationsController;
use App\Http\Controllers\Admin\ClientsController;
use App\Http\Controllers\Admin\PaymentsController;
use App\Http\Controllers\Admin\ReportsController;
use App\Http\Controllers\Admin\SupportController;
use App\Http\Controllers\Admin\PickupInspectionController;
use App\Http\Controllers\Admin\ReturnInspectionController;
use App\Http\Controllers\Admin\DamageReportController;
use App\Http\Controllers\Admin\DisputeController;
use App\Http\Controllers\Admin\VehicleOperationsController;
use App\Http\Controllers\Admin\UsersController;

Route::middleware(['auth', 'verified', 'active', 'admin'])
    ->prefix('admin')
    ->as('admin.')
    ->group(function () {
        // Redirect '/admin' to '/admin/cars' with a named route we can reference
        Route::redirect('/', '/admin/cars')->name('home');

        // Cars
        Route::resource('cars', CarsController::class)->except(['show']);

        // Reservations
        Route::resource('reservations', ReservationsController::class)->only(['index', 'show', 'edit', 'update']);
        Route::get('reservations/{reservation}/print', [ReservationsController::class, 'print'])->name('reservations.print');
        Route::post('reservations/{reservation}/approve', [ReservationsController::class, 'approve'])->name('reservations.approve');
        Route::post('reservations/{reservation}/reject', [ReservationsController::class, 'reject'])->name('reservations.reject');
        Route::get('reservations/{reservation}/pickup-inspection/create', [PickupInspectionController::class, 'create'])->name('pickupInspection.create');
        Route::post('reservations/{reservation}/pickup-inspection', [PickupInspectionController::class, 'store'])->name('pickupInspection.store');
        Route::get('reservations/{reservation}/return-inspection/create', [ReturnInspectionController::class, 'create'])->name('returnInspection.create');
        Route::post('reservations/{reservation}/return-inspection', [ReturnInspectionController::class, 'store'])->name('returnInspection.store');
        Route::get('reservations/{reservation}/inspection-comparison', [ReturnInspectionController::class, 'compare'])->name('reservations.inspection-comparison');
        Route::get('reservations/{reservation}/damage-reports/create', [DamageReportController::class, 'create'])->name('damageReports.create');
        Route::post('reservations/{reservation}/damage-reports', [DamageReportController::class, 'store'])->name('damageReports.store');

        // Damage Reports
        Route::resource('damage-reports', DamageReportController::class)->except(['destroy', 'create', 'store']);
        Route::post('damage-reports/{damageReport}/resolve', [DamageReportController::class, 'resolve'])->name('damageReports.resolve');
        Route::post('damage-reports/{damageReport}/reject', [DamageReportController::class, 'reject'])->name('damageReports.reject');
        Route::get('inspections', [VehicleOperationsController::class, 'inspectionsIndex'])->name('inspections.index');
        Route::get('inspections/create', [VehicleOperationsController::class, 'inspectionsCreate'])->name('inspections.create');
        Route::get('inspections/{inspection}', [VehicleOperationsController::class, 'inspectionsShow'])->name('inspections.show');
        Route::get('inspections/{inspection}/edit', [VehicleOperationsController::class, 'inspectionsEdit'])->name('inspections.edit');
        Route::put('inspections/{inspection}', [VehicleOperationsController::class, 'inspectionsUpdate'])->name('inspections.update');

        Route::get('condition-reports', [VehicleOperationsController::class, 'conditionReportsIndex'])->name('conditionReports.index');
        Route::get('condition-reports/create', [VehicleOperationsController::class, 'conditionReportsCreate'])->name('conditionReports.create');
        Route::get('condition-reports/{inspection}', [VehicleOperationsController::class, 'conditionReportsShow'])->name('conditionReports.show');

        // Disputes
        Route::resource('disputes', DisputeController::class)->only(['index', 'show']);
        Route::post('disputes/{dispute}/respond', [DisputeController::class, 'respond'])->name('disputes.respond');
        Route::post('disputes/{dispute}/resolve', [DisputeController::class, 'resolve'])->name('disputes.resolve');
        Route::post('disputes/{dispute}/reject', [DisputeController::class, 'reject'])->name('disputes.reject');

        // Clients
        Route::resource('clients', ClientsController::class)->only(['index', 'show']);
        Route::patch('clients/{client}/suspend', [ClientsController::class, 'suspend'])->name('clients.suspend');
        Route::patch('clients/{client}/activate', [ClientsController::class, 'activate'])->name('clients.activate');

        // Users
        Route::get('users', [UsersController::class, 'index'])->name('users.index');
        Route::get('users/create', [UsersController::class, 'create'])->name('users.create');
        Route::post('users', [UsersController::class, 'store'])->name('users.store');

        // Payments
        Route::resource('payments', PaymentsController::class)->only(['index']);

        // Reports
        Route::get('reports', [ReportsController::class, 'index'])->name('reports.index');
        Route::get('reports/reservations', [ReportsController::class, 'reservations'])->name('reports.reservations');
        Route::get('reports/vehicle-condition-history', [ReportsController::class, 'vehicleConditionHistory'])->name('reports.vehicleConditionHistory');
        Route::get('reports/inspections', [ReportsController::class, 'inspections'])->name('reports.inspections');
        Route::get('reports/damage-reports', [ReportsController::class, 'damageReports'])->name('reports.damageReports');
        Route::get('reports/disputes', [ReportsController::class, 'disputes'])->name('reports.disputes');
        Route::get('reports/frequent-damage', [ReportsController::class, 'frequentDamage'])->name('reports.frequentDamage');

        // Support
        Route::resource('support', SupportController::class)->only(['index']);
        Route::get('/support/tickets/{ticket}', [SupportController::class, 'show'])
        ->name('support.show');
        Route::post('/support/tickets/{ticket}/reply', [SupportController::class, 'reply'])
        ->name('support.reply');
        Route::post('/support/tickets/{ticket}/close', [SupportController::class, 'close'])
        ->name('support.close');

    });

<?php

namespace App\Http\Controllers\Admin;

use App\Enums\InspectionStatus;
use App\Enums\ReservationStatus;
use App\Http\Controllers\Controller;
use App\Models\Reservation;
use App\Models\VehicleInspection;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class VehicleOperationsController extends Controller
{
    public function inspectionsIndex(Request $request): Response
    {
        $inspections = VehicleInspection::query()
            ->with(['car:id,make,model,license_plate', 'reservation:id,reservation_number,user_id', 'reservation.user:id,name'])
            ->orderByDesc('inspection_date')
            ->paginate(15)
            ->withQueryString();

        return Inertia::render('Admin/Inspections/Index', [
            'inspections' => $inspections,
        ]);
    }

    public function inspectionsCreate(): Response
    {
        $reservations = Reservation::query()
            ->with(['user:id,name', 'car:id,make,model,year,license_plate'])
            ->whereIn('status', [ReservationStatus::CONFIRMED, ReservationStatus::ACTIVE])
            ->orderByDesc('created_at')
            ->get(['id', 'reservation_number', 'user_id', 'car_id', 'status', 'start_date', 'end_date']);

        return Inertia::render('Admin/Inspections/Create', [
            'reservations' => $reservations,
        ]);
    }

    public function inspectionsShow(VehicleInspection $inspection): Response
    {
        $inspection->load([
            'car:id,make,model,year,license_plate',
            'reservation:id,reservation_number,user_id,start_date,end_date',
            'reservation.user:id,name,email',
            'conditionItems',
            'evidence',
            'inspectedBy:id,name',
        ]);

        return Inertia::render('Admin/Inspections/Show', [
            'inspection' => $inspection,
        ]);
    }

    public function inspectionsEdit(VehicleInspection $inspection): Response
    {
        $inspection->load(['car:id,make,model,license_plate', 'reservation:id,reservation_number']);

        return Inertia::render('Admin/Inspections/Edit', [
            'inspection' => $inspection,
            'statuses' => collect(InspectionStatus::cases())->map(fn ($status) => $status->value)->toArray(),
        ]);
    }

    public function inspectionsUpdate(Request $request, VehicleInspection $inspection)
    {
        $validated = $request->validate([
            'mileage' => 'nullable|numeric|min:0',
            'fuel_level' => 'nullable|string|max:50',
            'overall_condition' => 'required|string|max:100',
            'notes' => 'nullable|string',
            'inspection_date' => 'nullable|date',
            'status' => 'required|string|in:' . implode(',', array_map(fn ($case) => $case->value, InspectionStatus::cases())),
        ]);

        $inspection->update($validated);

        return redirect()
            ->route('admin.inspections.show', $inspection)
            ->with('success', 'Inspection updated successfully.');
    }

    public function conditionReportsIndex(): Response
    {
        $reports = VehicleInspection::query()
            ->with(['car:id,make,model,license_plate', 'reservation:id,reservation_number,user_id', 'reservation.user:id,name'])
            ->withCount('conditionItems')
            ->has('conditionItems')
            ->orderByDesc('inspection_date')
            ->paginate(15);

        return Inertia::render('Admin/ConditionReports/Index', [
            'reports' => $reports,
        ]);
    }

    public function conditionReportsCreate(): Response
    {
        $reservations = Reservation::query()
            ->with(['user:id,name', 'car:id,make,model,year,license_plate'])
            ->whereIn('status', [ReservationStatus::CONFIRMED, ReservationStatus::ACTIVE])
            ->orderByDesc('created_at')
            ->get(['id', 'reservation_number', 'user_id', 'car_id', 'status']);

        return Inertia::render('Admin/ConditionReports/Create', [
            'reservations' => $reservations,
        ]);
    }

    public function conditionReportsShow(VehicleInspection $inspection): Response
    {
        $inspection->load([
            'car:id,make,model,year,license_plate',
            'reservation:id,reservation_number,user_id,start_date,end_date',
            'reservation.user:id,name,email',
            'conditionItems',
            'evidence',
        ]);

        return Inertia::render('Admin/ConditionReports/Show', [
            'report' => $inspection,
        ]);
    }
}

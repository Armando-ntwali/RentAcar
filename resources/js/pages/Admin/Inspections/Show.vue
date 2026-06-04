<script setup lang="ts">
import AdminLayout from '@/layouts/AdminLayout.vue';
import { Head, Link } from '@inertiajs/vue3';
import { Button } from '@/components/ui/button';
import { index as inspectionsIndex, edit as inspectionsEdit } from '@/routes/admin/inspections';

defineProps<{ inspection: any }>();
</script>

<template>
  <Head title="Inspection Details" />
  <AdminLayout>
    <main class="flex-1 p-8 space-y-6">
      <div class="flex items-center justify-between">
        <h1 class="text-2xl font-semibold">Inspection Details</h1>
        <div class="space-x-2">
          <Link :href="inspectionsIndex().url"><Button variant="outline">Back</Button></Link>
          <Link :href="inspectionsEdit(inspection.id).url"><Button variant="outline">Edit</Button></Link>
        </div>
      </div>
      <div class="rounded-md border bg-white p-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
        <div><span class="text-gray-500">Reservation:</span> {{ inspection.reservation?.reservation_number || '—' }}</div>
        <div><span class="text-gray-500">Customer:</span> {{ inspection.reservation?.user?.name || '—' }}</div>
        <div><span class="text-gray-500">Vehicle:</span> {{ inspection.car?.year }} {{ inspection.car?.make }} {{ inspection.car?.model }}</div>
        <div><span class="text-gray-500">Plate:</span> {{ inspection.car?.license_plate || '—' }}</div>
        <div><span class="text-gray-500">Type:</span> {{ String(inspection.inspection_type).replace('_', ' ') }}</div>
        <div><span class="text-gray-500">Status:</span> {{ String(inspection.status).replace('_', ' ') }}</div>
        <div><span class="text-gray-500">Date:</span> {{ inspection.inspection_date ? new Date(inspection.inspection_date).toLocaleString() : '—' }}</div>
        <div><span class="text-gray-500">Mileage:</span> {{ inspection.mileage ?? '—' }}</div>
        <div><span class="text-gray-500">Fuel Level:</span> {{ inspection.fuel_level || '—' }}</div>
        <div><span class="text-gray-500">Overall Condition:</span> {{ inspection.overall_condition || '—' }}</div>
      </div>
      <div class="rounded-md border bg-white p-6">
        <h2 class="font-semibold mb-3">Condition Report Items</h2>
        <div v-if="!inspection.condition_items?.length" class="text-sm text-gray-500">No condition items recorded.</div>
        <div v-else class="space-y-2 text-sm">
          <div v-for="item in inspection.condition_items" :key="item.id" class="border rounded p-3">
            <div class="font-medium">{{ item.area_name }}</div>
            <div>Status: {{ item.condition_status }}</div>
            <div>Severity: {{ item.severity || '—' }}</div>
            <div v-if="item.notes">Notes: {{ item.notes }}</div>
          </div>
        </div>
      </div>
    </main>
  </AdminLayout>
</template>

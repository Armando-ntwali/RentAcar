<script setup lang="ts">
import AdminLayout from '@/layouts/AdminLayout.vue';
import { Head, Link } from '@inertiajs/vue3';
import { Button } from '@/components/ui/button';
import { index as conditionReportsIndex, create as conditionReportsCreate, show as conditionReportsShow } from '@/routes/admin/conditionReports';

defineProps<{ reports: any }>();
</script>

<template>
  <Head title="Condition Reports" />
  <AdminLayout>
    <main class="flex-1 p-8 space-y-6">
      <div class="flex items-center justify-between">
        <h1 class="text-2xl font-semibold">Condition Reports</h1>
        <Link :href="conditionReportsCreate().url"><Button>Create Condition Report</Button></Link>
      </div>
      <div class="rounded-md border bg-white overflow-hidden">
        <table class="w-full text-sm">
          <thead class="bg-gray-50 border-b">
            <tr>
              <th class="px-4 py-3 text-left">Inspection</th>
              <th class="px-4 py-3 text-left">Reservation</th>
              <th class="px-4 py-3 text-left">Vehicle</th>
              <th class="px-4 py-3 text-left">Mileage</th>
              <th class="px-4 py-3 text-left">Fuel</th>
              <th class="px-4 py-3 text-left">Items</th>
              <th class="px-4 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="report in reports.data" :key="report.id" class="border-b">
              <td class="px-4 py-3 capitalize">{{ String(report.inspection_type).replace('_', ' ') }}</td>
              <td class="px-4 py-3">{{ report.reservation?.reservation_number || '—' }}</td>
              <td class="px-4 py-3">{{ report.car?.make }} {{ report.car?.model }} ({{ report.car?.license_plate }})</td>
              <td class="px-4 py-3">{{ report.mileage ?? '—' }}</td>
              <td class="px-4 py-3">{{ report.fuel_level || '—' }}</td>
              <td class="px-4 py-3">{{ report.condition_items_count }}</td>
              <td class="px-4 py-3">
                <Link :href="conditionReportsShow(report.id).url"><Button size="sm" variant="outline">View</Button></Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  </AdminLayout>
</template>

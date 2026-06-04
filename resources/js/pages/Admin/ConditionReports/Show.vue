<script setup lang="ts">
import AdminLayout from '@/layouts/AdminLayout.vue';
import { Head, Link } from '@inertiajs/vue3';
import { Button } from '@/components/ui/button';
import { index as conditionReportsIndex } from '@/routes/admin/conditionReports';

defineProps<{ report: any }>();
</script>

<template>
  <Head title="Condition Report Details" />
  <AdminLayout>
    <main class="flex-1 p-8 space-y-6">
      <div class="flex items-center justify-between">
        <h1 class="text-2xl font-semibold">Condition Report Details</h1>
        <Link :href="conditionReportsIndex().url"><Button variant="outline">Back</Button></Link>
      </div>
      <div class="rounded-md border bg-white p-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
        <div><span class="text-gray-500">Reservation:</span> {{ report.reservation?.reservation_number || '—' }}</div>
        <div><span class="text-gray-500">Customer:</span> {{ report.reservation?.user?.name || '—' }}</div>
        <div><span class="text-gray-500">Vehicle:</span> {{ report.car?.year }} {{ report.car?.make }} {{ report.car?.model }}</div>
        <div><span class="text-gray-500">Type:</span> {{ String(report.inspection_type).replace('_', ' ') }}</div>
        <div><span class="text-gray-500">Mileage:</span> {{ report.mileage ?? '—' }}</div>
        <div><span class="text-gray-500">Fuel level:</span> {{ report.fuel_level || '—' }}</div>
        <div><span class="text-gray-500">Interior/Exterior:</span> {{ report.overall_condition || '—' }}</div>
      </div>
      <div class="rounded-md border bg-white p-6">
        <h2 class="font-semibold mb-3">Condition Items</h2>
        <div class="space-y-2 text-sm" v-if="report.condition_items?.length">
          <div v-for="item in report.condition_items" :key="item.id" class="border rounded p-3">
            <div class="font-medium">{{ item.area_name }}</div>
            <div>Condition: {{ item.condition_status }}</div>
            <div>Severity: {{ item.severity || '—' }}</div>
            <div v-if="item.notes">Notes: {{ item.notes }}</div>
          </div>
        </div>
        <div v-else class="text-sm text-gray-500">No condition entries recorded.</div>
      </div>
    </main>
  </AdminLayout>
</template>

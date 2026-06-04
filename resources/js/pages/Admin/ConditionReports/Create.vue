<script setup lang="ts">
import AdminLayout from '@/layouts/AdminLayout.vue';
import { Head, Link } from '@inertiajs/vue3';
import { Button } from '@/components/ui/button';
import { index as conditionReportsIndex } from '@/routes/admin/conditionReports';
import { create as pickupInspectionCreate } from '@/routes/admin/pickupInspection';
import { create as returnInspectionCreate } from '@/routes/admin/returnInspection';

defineProps<{ reservations: any[] }>();
</script>

<template>
  <Head title="Create Condition Report" />
  <AdminLayout>
    <main class="flex-1 p-8 space-y-6">
      <div class="flex items-center justify-between">
        <h1 class="text-2xl font-semibold">Create Condition Report</h1>
        <Link :href="conditionReportsIndex().url"><Button variant="outline">Back</Button></Link>
      </div>
      <div class="rounded-md border bg-white p-4 text-sm text-gray-700">
        Condition reports are captured through pickup/return inspection forms. Choose a reservation below to continue.
      </div>
      <div class="rounded-md border bg-white overflow-hidden">
        <table class="w-full text-sm">
          <thead class="bg-gray-50 border-b">
            <tr>
              <th class="px-4 py-3 text-left">Reservation</th>
              <th class="px-4 py-3 text-left">Customer</th>
              <th class="px-4 py-3 text-left">Vehicle</th>
              <th class="px-4 py-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="reservation in reservations" :key="reservation.id" class="border-b">
              <td class="px-4 py-3">{{ reservation.reservation_number }}</td>
              <td class="px-4 py-3">{{ reservation.user?.name }}</td>
              <td class="px-4 py-3">{{ reservation.car?.year }} {{ reservation.car?.make }} {{ reservation.car?.model }}</td>
              <td class="px-4 py-3 space-x-2">
                <Link v-if="reservation.status === 'confirmed'" :href="pickupInspectionCreate(reservation.id).url"><Button size="sm">Pickup</Button></Link>
                <Link v-if="reservation.status === 'active'" :href="returnInspectionCreate(reservation.id).url"><Button size="sm" class="bg-purple-600 hover:bg-purple-700">Return</Button></Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  </AdminLayout>
</template>

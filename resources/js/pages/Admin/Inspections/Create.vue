<script setup lang="ts">
import AdminLayout from '@/layouts/AdminLayout.vue';
import { Head, Link } from '@inertiajs/vue3';
import { Button } from '@/components/ui/button';
import { index as inspectionsIndex } from '@/routes/admin/inspections';
import { create as pickupInspectionCreate } from '@/routes/admin/pickupInspection';
import { create as returnInspectionCreate } from '@/routes/admin/returnInspection';

defineProps<{ reservations: any[] }>();
</script>

<template>
  <Head title="Create Inspection" />
  <AdminLayout>
    <main class="flex-1 p-8 space-y-6">
      <div class="flex items-center justify-between">
        <h1 class="text-2xl font-semibold">Create Inspection</h1>
        <Link :href="inspectionsIndex().url"><Button variant="outline">Back to Inspections</Button></Link>
      </div>
      <div class="rounded-md border bg-white p-4 text-sm text-gray-700">
        Select a reservation and inspection type. This uses your existing pickup and return inspection flows.
      </div>
      <div class="rounded-md border bg-white overflow-hidden">
        <table class="w-full text-sm">
          <thead class="bg-gray-50 border-b">
            <tr>
              <th class="px-4 py-3 text-left">Reservation</th>
              <th class="px-4 py-3 text-left">Customer</th>
              <th class="px-4 py-3 text-left">Vehicle</th>
              <th class="px-4 py-3 text-left">Status</th>
              <th class="px-4 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="reservation in reservations" :key="reservation.id" class="border-b">
              <td class="px-4 py-3">{{ reservation.reservation_number }}</td>
              <td class="px-4 py-3">{{ reservation.user?.name || '—' }}</td>
              <td class="px-4 py-3">{{ reservation.car?.year }} {{ reservation.car?.make }} {{ reservation.car?.model }}</td>
              <td class="px-4 py-3 capitalize">{{ String(reservation.status).replace('_', ' ') }}</td>
              <td class="px-4 py-3 space-x-2">
                <Link v-if="reservation.status === 'confirmed'" :href="pickupInspectionCreate(reservation.id).url">
                  <Button size="sm">Pickup Inspection</Button>
                </Link>
                <Link v-if="reservation.status === 'active'" :href="returnInspectionCreate(reservation.id).url">
                  <Button size="sm" class="bg-purple-600 hover:bg-purple-700">Return Inspection</Button>
                </Link>
              </td>
            </tr>
            <tr v-if="reservations.length === 0">
              <td colspan="5" class="px-4 py-8 text-center text-gray-500">No eligible reservations found.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  </AdminLayout>
</template>

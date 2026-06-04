<script setup lang="ts">
import AdminLayout from '@/layouts/AdminLayout.vue';
import { Head, Link } from '@inertiajs/vue3';
import { Button } from '@/components/ui/button';
import { index as inspectionsIndex, create as inspectionsCreate, show as inspectionsShow, edit as inspectionsEdit } from '@/routes/admin/inspections';

defineProps<{ inspections: any }>();
</script>

<template>
  <Head title="Vehicle Inspections" />
  <AdminLayout>
    <main class="flex-1 p-8 space-y-6">
      <div class="flex items-center justify-between">
        <h1 class="text-2xl font-semibold">Vehicle Inspections</h1>
        <Link :href="inspectionsCreate().url"><Button>Create Inspection</Button></Link>
      </div>

      <div class="rounded-md border bg-white overflow-hidden">
        <table class="w-full text-sm">
          <thead class="bg-gray-50 border-b">
            <tr>
              <th class="px-4 py-3 text-left">Reservation</th>
              <th class="px-4 py-3 text-left">Customer</th>
              <th class="px-4 py-3 text-left">Vehicle</th>
              <th class="px-4 py-3 text-left">Type</th>
              <th class="px-4 py-3 text-left">Status</th>
              <th class="px-4 py-3 text-left">Date</th>
              <th class="px-4 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="inspection in inspections.data" :key="inspection.id" class="border-b">
              <td class="px-4 py-3">{{ inspection.reservation?.reservation_number || '—' }}</td>
              <td class="px-4 py-3">{{ inspection.reservation?.user?.name || '—' }}</td>
              <td class="px-4 py-3">{{ inspection.car?.year }} {{ inspection.car?.make }} {{ inspection.car?.model }}</td>
              <td class="px-4 py-3 capitalize">{{ String(inspection.inspection_type).replace('_', ' ') }}</td>
              <td class="px-4 py-3 capitalize">{{ String(inspection.status).replace('_', ' ') }}</td>
              <td class="px-4 py-3">{{ inspection.inspection_date ? new Date(inspection.inspection_date).toLocaleString() : '—' }}</td>
              <td class="px-4 py-3 space-x-2">
                <Link :href="inspectionsShow(inspection.id).url"><Button size="sm" variant="outline">View</Button></Link>
                <Link :href="inspectionsEdit(inspection.id).url"><Button size="sm" variant="outline">Edit</Button></Link>
              </td>
            </tr>
            <tr v-if="inspections.data.length === 0">
              <td colspan="7" class="px-4 py-8 text-center text-gray-500">No inspections found.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  </AdminLayout>
</template>

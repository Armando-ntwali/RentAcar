<script setup lang="ts">
import AdminLayout from '@/layouts/AdminLayout.vue';
import { Head, Link, useForm } from '@inertiajs/vue3';
import { Button } from '@/components/ui/button';
import { show as inspectionsShow, update as inspectionsUpdate } from '@/routes/admin/inspections';

const props = defineProps<{ inspection: any; statuses: string[] }>();

const form = useForm({
  mileage: props.inspection.mileage ?? '',
  fuel_level: props.inspection.fuel_level ?? '',
  overall_condition: props.inspection.overall_condition ?? '',
  notes: props.inspection.notes ?? '',
  inspection_date: props.inspection.inspection_date ? props.inspection.inspection_date.slice(0, 10) : '',
  status: props.inspection.status ?? 'completed',
});

function submit() {
  form.put(inspectionsUpdate(props.inspection.id).url);
}
</script>

<template>
  <Head title="Edit Inspection" />
  <AdminLayout>
    <main class="flex-1 p-8 space-y-6">
      <div class="flex items-center justify-between">
        <h1 class="text-2xl font-semibold">Edit Inspection</h1>
        <Link :href="inspectionsShow(inspection.id).url"><Button variant="outline">Back</Button></Link>
      </div>
      <form @submit.prevent="submit" class="rounded-md border bg-white p-6 space-y-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div><label class="text-sm">Mileage</label><input v-model="form.mileage" type="number" class="w-full border rounded px-3 py-2" /></div>
          <div><label class="text-sm">Fuel level</label><input v-model="form.fuel_level" type="text" class="w-full border rounded px-3 py-2" /></div>
          <div><label class="text-sm">Inspection date</label><input v-model="form.inspection_date" type="date" class="w-full border rounded px-3 py-2" /></div>
          <div>
            <label class="text-sm">Status</label>
            <select v-model="form.status" class="w-full border rounded px-3 py-2">
              <option v-for="status in statuses" :key="status" :value="status">{{ status }}</option>
            </select>
          </div>
        </div>
        <div><label class="text-sm">Overall condition</label><input v-model="form.overall_condition" type="text" class="w-full border rounded px-3 py-2" /></div>
        <div><label class="text-sm">Notes</label><textarea v-model="form.notes" rows="3" class="w-full border rounded px-3 py-2"></textarea></div>
        <div v-if="form.errors.overall_condition" class="text-red-600 text-sm">{{ form.errors.overall_condition }}</div>
        <Button type="submit" :disabled="form.processing">{{ form.processing ? 'Saving...' : 'Save Changes' }}</Button>
      </form>
    </main>
  </AdminLayout>
</template>

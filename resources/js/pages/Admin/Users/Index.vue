<script setup lang="ts">
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import AdminLayout from '@/layouts/AdminLayout.vue';
import { Head, Link, router } from '@inertiajs/vue3';
import { Plus } from 'lucide-vue-next';
import { ref, watch } from 'vue';

const props = defineProps<{
    users: {
        data: Array<{
            id: number;
            name: string;
            email: string;
            role: string;
            is_active: boolean;
            created_at?: string;
        }>;
        links: Array<{ url: string | null; label: string; active: boolean }>;
    };
    filters: {
        search?: string;
        role?: string;
    };
    roles: Array<{ value: string; label: string }>;
}>();

const search = ref(props.filters.search || '');
const role = ref(props.filters.role || '');

function applyFilters() {
    router.get(
        '/admin/users',
        {
            search: search.value || null,
            role: role.value || null,
        },
        {
            preserveState: true,
            replace: true,
        },
    );
}

watch(search, (value, oldValue) => {
    if (value === '' && oldValue !== '') applyFilters();
});
</script>

<template>
    <Head title="Users" />

    <AdminLayout>
        <main class="flex-1 space-y-6 p-8">
            <div
                class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
            >
                <div>
                    <h1 class="text-2xl font-semibold text-gray-900">Users</h1>
                    <p class="mt-1 text-sm text-gray-600">
                        Manage customer and administrator accounts.
                    </p>
                </div>
                <Link href="/admin/users/create">
                    <Button class="bg-blue-900 hover:bg-blue-800">
                        <Plus class="mr-2 h-4 w-4" />
                        Create User
                    </Button>
                </Link>
            </div>

            <div
                class="rounded-lg border border-gray-200 bg-white p-4 shadow-sm"
            >
                <div class="flex flex-col gap-3 sm:flex-row">
                    <Input
                        v-model="search"
                        placeholder="Search name or email..."
                        class="max-w-md"
                        @keyup.enter="applyFilters"
                    />
                    <select
                        v-model="role"
                        class="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
                        @change="applyFilters"
                    >
                        <option value="">All roles</option>
                        <option
                            v-for="option in roles"
                            :key="option.value"
                            :value="option.value"
                        >
                            {{ option.label }}
                        </option>
                    </select>
                    <Button variant="outline" @click="applyFilters"
                        >Search</Button
                    >
                </div>
            </div>

            <div
                class="overflow-x-auto rounded-lg border border-gray-200 bg-white shadow-sm"
            >
                <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                        <tr>
                            <th
                                class="px-4 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
                            >
                                User
                            </th>
                            <th
                                class="px-4 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
                            >
                                Role
                            </th>
                            <th
                                class="px-4 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
                            >
                                Status
                            </th>
                            <th
                                class="px-4 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
                            >
                                Created
                            </th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200 bg-white">
                        <tr v-for="user in users.data" :key="user.id">
                            <td class="px-4 py-3">
                                <div class="font-medium text-gray-900">
                                    {{ user.name }}
                                </div>
                                <div class="text-xs text-gray-500">
                                    {{ user.email }}
                                </div>
                            </td>
                            <td class="px-4 py-3">
                                <span
                                    class="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-900"
                                >
                                    {{ user.role }}
                                </span>
                            </td>
                            <td class="px-4 py-3">
                                <span
                                    class="rounded-full px-2.5 py-1 text-xs font-medium"
                                    :class="
                                        user.is_active
                                            ? 'bg-green-50 text-green-700'
                                            : 'bg-red-50 text-red-700'
                                    "
                                >
                                    {{ user.is_active ? 'Active' : 'Inactive' }}
                                </span>
                            </td>
                            <td class="px-4 py-3 text-sm text-gray-600">
                                {{ user.created_at ?? '-' }}
                            </td>
                        </tr>
                        <tr v-if="users.data.length === 0">
                            <td
                                colspan="4"
                                class="px-4 py-6 text-center text-gray-500"
                            >
                                No users found.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <nav v-if="users.links?.length" class="flex flex-wrap gap-2">
                <Link
                    v-for="(link, index) in users.links"
                    :key="index"
                    :href="link.url || ''"
                    :class="[
                        'rounded px-3 py-1 text-sm',
                        link.active
                            ? 'bg-gray-900 text-white'
                            : 'bg-gray-100 text-gray-700',
                        !link.url && 'pointer-events-none opacity-50',
                    ]"
                >
                    <span v-html="link.label" />
                </Link>
            </nav>
        </main>
    </AdminLayout>
</template>

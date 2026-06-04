<script setup lang="ts">
import InputError from '@/components/InputError.vue';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AdminLayout from '@/layouts/AdminLayout.vue';
import { Head, Link, useForm } from '@inertiajs/vue3';
import { ArrowLeft, LoaderCircle, UserPlus } from 'lucide-vue-next';

defineProps<{
    roles: Array<{ value: string; label: string }>;
}>();

const form = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    role: 'client',
    is_active: true,
});

function submit() {
    form.post('/admin/users', {
        preserveScroll: true,
        onSuccess: () => {
            form.reset('name', 'email', 'password', 'password_confirmation');
            form.role = 'client';
            form.is_active = true;
        },
    });
}
</script>

<template>
    <Head title="Create User Account" />

    <AdminLayout>
        <main class="flex-1 space-y-6 p-8">
            <div
                class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
            >
                <div>
                    <div
                        class="mb-2 flex items-center gap-2 text-sm text-gray-500"
                    >
                        <Link
                            href="/admin/users"
                            class="inline-flex items-center gap-1 font-medium text-blue-900 hover:text-blue-700"
                        >
                            <ArrowLeft class="h-4 w-4" />
                            Users
                        </Link>
                    </div>
                    <h1 class="text-2xl font-semibold text-gray-900">
                        Create User Account
                    </h1>
                    <p class="mt-1 text-sm text-gray-600">
                        Create a real database user for customer or
                        administrator access.
                    </p>
                </div>
            </div>

            <div class="grid gap-6 lg:grid-cols-[minmax(0,640px)_1fr]">
                <form
                    class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
                    @submit.prevent="submit"
                >
                    <div
                        class="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-900"
                    >
                        <UserPlus class="h-6 w-6" />
                    </div>

                    <div class="grid gap-5">
                        <div>
                            <Label
                                for="name"
                                class="mb-2 block text-sm font-semibold text-gray-900"
                            >
                                Full name
                            </Label>
                            <Input
                                id="name"
                                v-model="form.name"
                                type="text"
                                autocomplete="name"
                                required
                                placeholder="Enter full name"
                                class="w-full"
                            />
                            <InputError
                                :message="form.errors.name"
                                class="mt-2"
                            />
                        </div>

                        <div>
                            <Label
                                for="email"
                                class="mb-2 block text-sm font-semibold text-gray-900"
                            >
                                Email address
                            </Label>
                            <Input
                                id="email"
                                v-model="form.email"
                                type="email"
                                autocomplete="email"
                                required
                                placeholder="user@example.com"
                                class="w-full"
                            />
                            <InputError
                                :message="form.errors.email"
                                class="mt-2"
                            />
                        </div>

                        <div class="grid gap-5 sm:grid-cols-2">
                            <div>
                                <Label
                                    for="password"
                                    class="mb-2 block text-sm font-semibold text-gray-900"
                                >
                                    Password
                                </Label>
                                <Input
                                    id="password"
                                    v-model="form.password"
                                    type="password"
                                    autocomplete="new-password"
                                    required
                                    placeholder="Create password"
                                    class="w-full"
                                />
                                <InputError
                                    :message="form.errors.password"
                                    class="mt-2"
                                />
                            </div>

                            <div>
                                <Label
                                    for="password_confirmation"
                                    class="mb-2 block text-sm font-semibold text-gray-900"
                                >
                                    Confirm password
                                </Label>
                                <Input
                                    id="password_confirmation"
                                    v-model="form.password_confirmation"
                                    type="password"
                                    autocomplete="new-password"
                                    required
                                    placeholder="Confirm password"
                                    class="w-full"
                                />
                                <InputError
                                    :message="form.errors.password_confirmation"
                                    class="mt-2"
                                />
                            </div>
                        </div>

                        <div>
                            <Label
                                for="role"
                                class="mb-2 block text-sm font-semibold text-gray-900"
                            >
                                Role
                            </Label>
                            <select
                                id="role"
                                v-model="form.role"
                                required
                                class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50"
                            >
                                <option
                                    v-for="role in roles"
                                    :key="role.value"
                                    :value="role.value"
                                >
                                    {{ role.label }}
                                </option>
                            </select>
                            <InputError
                                :message="form.errors.role"
                                class="mt-2"
                            />
                        </div>

                        <label
                            class="flex items-center gap-3 rounded-lg border border-gray-200 bg-gray-50 px-4 py-3"
                        >
                            <input
                                v-model="form.is_active"
                                type="checkbox"
                                class="h-4 w-4 rounded border-gray-300 text-blue-900 focus:ring-blue-900"
                            />
                            <span>
                                <span
                                    class="block text-sm font-semibold text-gray-900"
                                >
                                    Active account
                                </span>
                                <span class="block text-sm text-gray-600">
                                    Active users can sign in immediately after
                                    creation.
                                </span>
                            </span>
                        </label>

                        <div
                            class="flex flex-col gap-3 border-t border-gray-200 pt-5 sm:flex-row"
                        >
                            <Button
                                type="submit"
                                class="bg-blue-900 hover:bg-blue-800"
                                :disabled="form.processing"
                                data-test="admin-create-user-button"
                            >
                                <LoaderCircle
                                    v-if="form.processing"
                                    class="mr-2 h-4 w-4 animate-spin"
                                />
                                Create User Account
                            </Button>
                            <Link href="/admin/users">
                                <Button type="button" variant="outline"
                                    >Cancel</Button
                                >
                            </Link>
                        </div>
                    </div>
                </form>

                <aside
                    class="rounded-lg border border-blue-100 bg-blue-50 p-6 text-sm text-blue-950"
                >
                    <h2 class="font-semibold">Role guidance</h2>
                    <p class="mt-2 leading-6">
                        Customer/client users can access customer reservations
                        and support pages. Administrator users can access the
                        protected admin panel. Public registration remains
                        customer-only.
                    </p>
                </aside>
            </div>
        </main>
    </AdminLayout>
</template>

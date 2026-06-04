<script setup lang="ts">
import AuthenticatedSessionController from '@/actions/App/Http/Controllers/Auth/AuthenticatedSessionController';
import InputError from '@/components/InputError.vue';
import TextLink from '@/components/TextLink.vue';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import HomeLayout from '@/layouts/HomeLayout.vue';
import { register } from '@/routes';
import { request } from '@/routes/password';
import { Form, Head } from '@inertiajs/vue3';
import { LoaderCircle, ShieldCheck, UserRound } from 'lucide-vue-next';
import { computed, ref } from 'vue';

defineProps<{
    status?: string;
    canResetPassword: boolean;
}>();

type LoginMode = 'client' | 'admin';

const loginMode = ref<LoginMode>('client');

const modeContent = computed(() => {
    if (loginMode.value === 'admin') {
        return {
            eyebrow: 'Administrative access',
            title: 'Sign in to RentACar',
            description:
                'Use an administrator account to manage reservations, inspections, reports, clients, and fleet operations.',
            button: 'Sign in as admin',
            emailLabel: 'Administrator email',
            emailPlaceholder: 'admin@company.com',
        };
    }

    return {
        eyebrow: 'Customer portal',
        title: 'Sign in to RentACar',
        description:
            'Use your customer account to browse the fleet, manage reservations, and view reports linked to your rentals.',
        button: 'Sign in as customer',
        emailLabel: 'Email address',
        emailPlaceholder: 'you@example.com',
    };
});
</script>

<template>
    <HomeLayout>
        <Head title="Log in" />

        <section
            class="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 px-4 py-12 sm:px-6 lg:px-8"
        >
            <div class="absolute inset-0 opacity-5">
                <div
                    class="absolute inset-0"
                    style="
                        background-image: radial-gradient(
                            circle at 1px 1px,
                            rgba(0, 0, 0, 0.15) 1px,
                            transparent 0
                        );
                        background-size: 20px 20px;
                    "
                ></div>
            </div>

            <div
                class="relative mx-auto grid min-h-[78vh] max-w-6xl items-center gap-10 lg:grid-cols-[1fr_460px]"
            >
                <div class="space-y-8">
                    <div
                        class="inline-flex items-center rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-900 ring-1 ring-blue-200"
                    >
                        Secure database authentication
                    </div>

                    <div class="space-y-5">
                        <p
                            class="text-sm font-semibold tracking-wide text-blue-900 uppercase"
                        >
                            {{ modeContent.eyebrow }}
                        </p>
                        <h1
                            class="max-w-xl text-4xl leading-tight font-bold text-gray-900 lg:text-6xl"
                        >
                            {{ modeContent.title }}
                        </h1>
                        <p
                            class="max-w-2xl text-lg leading-relaxed text-gray-600"
                        >
                            {{ modeContent.description }}
                        </p>
                    </div>

                    <div class="grid gap-4 sm:grid-cols-2">
                        <button
                            type="button"
                            :aria-pressed="loginMode === 'client'"
                            @click="loginMode = 'client'"
                            class="rounded-xl border bg-white p-5 text-left shadow-sm transition-all duration-200 hover:border-blue-300 hover:shadow-md"
                            :class="
                                loginMode === 'client'
                                    ? 'border-blue-900 ring-2 ring-blue-900/15'
                                    : 'border-gray-200'
                            "
                        >
                            <span
                                class="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-blue-100 text-blue-900"
                            >
                                <UserRound class="h-5 w-5" />
                            </span>
                            <span class="block font-semibold text-gray-900">
                                Customer Login
                            </span>
                            <span
                                class="mt-1 block text-sm leading-6 text-gray-600"
                            >
                                Access bookings, fleet, support, and your rental
                                records.
                            </span>
                        </button>

                        <button
                            type="button"
                            :aria-pressed="loginMode === 'admin'"
                            @click="loginMode = 'admin'"
                            class="rounded-xl border bg-white p-5 text-left shadow-sm transition-all duration-200 hover:border-blue-300 hover:shadow-md"
                            :class="
                                loginMode === 'admin'
                                    ? 'border-blue-900 ring-2 ring-blue-900/15'
                                    : 'border-gray-200'
                            "
                        >
                            <span
                                class="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-blue-100 text-blue-900"
                            >
                                <ShieldCheck class="h-5 w-5" />
                            </span>
                            <span class="block font-semibold text-gray-900">
                                Admin Login
                            </span>
                            <span
                                class="mt-1 block text-sm leading-6 text-gray-600"
                            >
                                Manage reservations, inspections, condition
                                reports, and damage reports.
                            </span>
                        </button>
                    </div>
                </div>

                <div class="w-full">
                    <div
                        v-if="status"
                        class="mb-4 rounded-lg border border-green-200 bg-green-50 p-4 text-center text-sm font-medium text-green-800"
                    >
                        {{ status }}
                    </div>

                    <div
                        class="rounded-2xl border border-gray-200 bg-white p-6 shadow-xl sm:p-8"
                    >
                        <Form
                            v-bind="AuthenticatedSessionController.store.form()"
                            :reset-on-success="['password']"
                            v-slot="{ errors, processing }"
                            class="space-y-6"
                        >
                            <input
                                type="hidden"
                                name="login_mode"
                                :value="loginMode"
                            />

                            <div>
                                <Label
                                    for="email"
                                    class="mb-2 block text-sm font-semibold text-gray-900"
                                >
                                    {{ modeContent.emailLabel }}
                                </Label>
                                <Input
                                    id="email"
                                    type="email"
                                    name="email"
                                    required
                                    autofocus
                                    :tabindex="1"
                                    autocomplete="email"
                                    :placeholder="modeContent.emailPlaceholder"
                                    class="w-full rounded-lg border border-gray-300 px-4 py-3 transition-colors focus:border-blue-900 focus:ring-2 focus:ring-blue-900"
                                />
                                <InputError
                                    :message="errors.email"
                                    class="mt-2"
                                />
                            </div>

                            <div>
                                <div
                                    class="mb-2 flex items-center justify-between"
                                >
                                    <Label
                                        for="password"
                                        class="block text-sm font-semibold text-gray-900"
                                    >
                                        Password
                                    </Label>
                                    <TextLink
                                        v-if="canResetPassword"
                                        :href="request()"
                                        class="text-sm font-medium text-blue-900 hover:text-blue-700"
                                        :tabindex="5"
                                    >
                                        Forgot password?
                                    </TextLink>
                                </div>
                                <Input
                                    id="password"
                                    type="password"
                                    name="password"
                                    required
                                    :tabindex="2"
                                    autocomplete="current-password"
                                    placeholder="Enter your password"
                                    class="w-full rounded-lg border border-gray-300 px-4 py-3 transition-colors focus:border-blue-900 focus:ring-2 focus:ring-blue-900"
                                />
                                <InputError
                                    :message="errors.password"
                                    class="mt-2"
                                />
                            </div>

                            <InputError
                                :message="errors.login_mode"
                                class="rounded-lg bg-red-50 p-3"
                            />

                            <div class="flex items-center">
                                <Label
                                    for="remember"
                                    class="flex cursor-pointer items-center space-x-3"
                                >
                                    <Checkbox
                                        id="remember"
                                        name="remember"
                                        :tabindex="3"
                                        class="rounded border-gray-300 text-blue-900 focus:ring-blue-900"
                                    />
                                    <span class="text-sm text-gray-700">
                                        Remember me for 30 days
                                    </span>
                                </Label>
                            </div>

                            <Button
                                type="submit"
                                class="flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-blue-900 to-blue-800 px-5 py-3 font-semibold text-white shadow-lg transition-all duration-200 hover:from-blue-800 hover:to-blue-700 hover:shadow-xl"
                                :tabindex="4"
                                :disabled="processing"
                                data-test="login-button"
                            >
                                <LoaderCircle
                                    v-if="processing"
                                    class="mr-2 h-5 w-5 animate-spin"
                                />
                                {{
                                    processing
                                        ? 'Signing in...'
                                        : modeContent.button
                                }}
                            </Button>

                            <div
                                class="border-t border-gray-200 pt-5 text-center"
                            >
                                <p class="text-sm text-gray-600">
                                    Need a customer account?
                                    <TextLink
                                        :href="register()"
                                        :tabindex="6"
                                        class="ml-1 font-semibold text-blue-900 hover:text-blue-700"
                                    >
                                        Create one here
                                    </TextLink>
                                </p>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </section>
    </HomeLayout>
</template>

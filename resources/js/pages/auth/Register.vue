<script setup lang="ts">
import RegisteredUserController from '@/actions/App/Http/Controllers/Auth/RegisteredUserController';
import InputError from '@/components/InputError.vue';
import TextLink from '@/components/TextLink.vue';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import HomeLayout from '@/layouts/HomeLayout.vue';
import { login } from '@/routes';
import { Form, Head } from '@inertiajs/vue3';
import { LoaderCircle, UserPlus } from 'lucide-vue-next';
</script>

<template>
    <HomeLayout>
        <Head title="Register" />

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
                <div class="space-y-6">
                    <div
                        class="inline-flex items-center rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-900 ring-1 ring-blue-200"
                    >
                        Customer account
                    </div>
                    <h1
                        class="max-w-xl text-4xl leading-tight font-bold text-gray-900 lg:text-6xl"
                    >
                        Create your RentACar account
                    </h1>
                    <p class="max-w-2xl text-lg leading-relaxed text-gray-600">
                        Register as a customer to browse vehicles, make
                        reservations, and track your rental records. Admin
                        accounts are managed separately by the system owner.
                    </p>
                </div>

                <div
                    class="rounded-2xl border border-gray-200 bg-white p-6 shadow-xl sm:p-8"
                >
                    <div
                        class="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-900"
                    >
                        <UserPlus class="h-6 w-6" />
                    </div>

                    <Form
                        v-bind="RegisteredUserController.store.form()"
                        :reset-on-success="[
                            'password',
                            'password_confirmation',
                        ]"
                        v-slot="{ errors, processing }"
                        class="space-y-5"
                    >
                        <div>
                            <Label
                                for="name"
                                class="mb-2 block text-sm font-semibold text-gray-900"
                            >
                                Full name
                            </Label>
                            <Input
                                id="name"
                                type="text"
                                required
                                autofocus
                                :tabindex="1"
                                autocomplete="name"
                                name="name"
                                placeholder="Enter your full name"
                                class="w-full rounded-lg border border-gray-300 px-4 py-3 transition-colors focus:border-blue-900 focus:ring-2 focus:ring-blue-900"
                            />
                            <InputError :message="errors.name" class="mt-2" />
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
                                type="email"
                                required
                                :tabindex="2"
                                autocomplete="email"
                                name="email"
                                placeholder="you@example.com"
                                class="w-full rounded-lg border border-gray-300 px-4 py-3 transition-colors focus:border-blue-900 focus:ring-2 focus:ring-blue-900"
                            />
                            <InputError :message="errors.email" class="mt-2" />
                        </div>

                        <div>
                            <Label
                                for="password"
                                class="mb-2 block text-sm font-semibold text-gray-900"
                            >
                                Password
                            </Label>
                            <Input
                                id="password"
                                type="password"
                                required
                                :tabindex="3"
                                autocomplete="new-password"
                                name="password"
                                placeholder="Create a password"
                                class="w-full rounded-lg border border-gray-300 px-4 py-3 transition-colors focus:border-blue-900 focus:ring-2 focus:ring-blue-900"
                            />
                            <InputError
                                :message="errors.password"
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
                                type="password"
                                required
                                :tabindex="4"
                                autocomplete="new-password"
                                name="password_confirmation"
                                placeholder="Confirm your password"
                                class="w-full rounded-lg border border-gray-300 px-4 py-3 transition-colors focus:border-blue-900 focus:ring-2 focus:ring-blue-900"
                            />
                            <InputError
                                :message="errors.password_confirmation"
                                class="mt-2"
                            />
                        </div>

                        <Button
                            type="submit"
                            class="flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-blue-900 to-blue-800 px-5 py-3 font-semibold text-white shadow-lg transition-all duration-200 hover:from-blue-800 hover:to-blue-700 hover:shadow-xl"
                            tabindex="5"
                            :disabled="processing"
                            data-test="register-user-button"
                        >
                            <LoaderCircle
                                v-if="processing"
                                class="mr-2 h-5 w-5 animate-spin"
                            />
                            Create customer account
                        </Button>

                        <div class="border-t border-gray-200 pt-5 text-center">
                            <p class="text-sm text-gray-600">
                                Already have an account?
                                <TextLink
                                    :href="login()"
                                    class="ml-1 font-semibold text-blue-900 hover:text-blue-700"
                                    :tabindex="6"
                                >
                                    Sign in here
                                </TextLink>
                            </p>
                        </div>
                    </Form>
                </div>
            </div>
        </section>
    </HomeLayout>
</template>

<script setup lang="ts">
import PasswordResetLinkController from '@/actions/App/Http/Controllers/Auth/PasswordResetLinkController';
import InputError from '@/components/InputError.vue';
import TextLink from '@/components/TextLink.vue';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import HomeLayout from '@/layouts/HomeLayout.vue';
import { login } from '@/routes';
import { Form, Head } from '@inertiajs/vue3';
import { LoaderCircle, Mail } from 'lucide-vue-next';

defineProps<{
    status?: string;
}>();
</script>

<template>
    <HomeLayout>
        <Head title="Forgot password" />

        <section
            class="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 px-4 py-12 sm:px-6 lg:px-8"
        >
            <div
                class="relative mx-auto grid min-h-[70vh] max-w-5xl items-center gap-10 lg:grid-cols-[1fr_420px]"
            >
                <div class="space-y-5">
                    <div
                        class="inline-flex items-center rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-900 ring-1 ring-blue-200"
                    >
                        Account recovery
                    </div>
                    <h1
                        class="max-w-xl text-4xl leading-tight font-bold text-gray-900 lg:text-5xl"
                    >
                        Reset access to RentACar
                    </h1>
                    <p class="max-w-2xl text-lg leading-relaxed text-gray-600">
                        Enter your account email and we will send a secure
                        password reset link if the address exists in the
                        database.
                    </p>
                </div>

                <div
                    class="rounded-2xl border border-gray-200 bg-white p-6 shadow-xl sm:p-8"
                >
                    <div
                        class="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-900"
                    >
                        <Mail class="h-6 w-6" />
                    </div>

                    <div
                        v-if="status"
                        class="mb-5 rounded-lg border border-green-200 bg-green-50 p-4 text-sm font-medium text-green-800"
                    >
                        {{ status }}
                    </div>

                    <Form
                        v-bind="PasswordResetLinkController.store.form()"
                        v-slot="{ errors, processing }"
                        class="space-y-5"
                    >
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
                                name="email"
                                autocomplete="email"
                                autofocus
                                placeholder="you@example.com"
                                class="w-full rounded-lg border border-gray-300 px-4 py-3 transition-colors focus:border-blue-900 focus:ring-2 focus:ring-blue-900"
                            />
                            <InputError :message="errors.email" class="mt-2" />
                        </div>

                        <Button
                            class="flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-blue-900 to-blue-800 px-5 py-3 font-semibold text-white shadow-lg transition-all duration-200 hover:from-blue-800 hover:to-blue-700 hover:shadow-xl"
                            :disabled="processing"
                            data-test="email-password-reset-link-button"
                        >
                            <LoaderCircle
                                v-if="processing"
                                class="mr-2 h-5 w-5 animate-spin"
                            />
                            Email password reset link
                        </Button>
                    </Form>

                    <div class="mt-5 border-t border-gray-200 pt-5 text-center">
                        <span class="text-sm text-gray-600">Return to</span>
                        <TextLink
                            :href="login()"
                            class="ml-1 font-semibold text-blue-900 hover:text-blue-700"
                        >
                            log in
                        </TextLink>
                    </div>
                </div>
            </div>
        </section>
    </HomeLayout>
</template>

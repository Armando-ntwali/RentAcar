<script setup lang="ts">
import HomeLayout from '@/layouts/HomeLayout.vue';
import { useForm } from '@inertiajs/vue3';
import { guestContact } from "@/routes/contact";
import { ref } from 'vue';
import { fleet } from '@/routes';
import { about } from '@/routes';

const form = useForm({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
});

const showNotification = ref(false);
const notificationMessage = ref('');

const sendTicket = () => {
    form.post(guestContact().url, {
        onSuccess() {
            form.reset();
            showNotification.value = true;
            notificationMessage.value = 'Thank you for contacting RentACar. We will get back to you soon.';
            setTimeout(() => {
                showNotification.value = false;
            }, 3000);
        },
        onError() {
            showNotification.value = true;
            notificationMessage.value = 'Failed to send message! Please try again.';
            setTimeout(() => {
                showNotification.value = false;
            }, 3000);
        }
    });
}
</script>
<template>
    <HomeLayout>
        <div class="min-h-screen bg-gray-50 py-16">
            <!-- notification -->
            <div>
                <p class="fixed top-24 right-4 bg-green-600 text-white p-4 rounded-lg shadow-lg z-50" v-if="showNotification && form.recentlySuccessful">{{ notificationMessage }}</p>
                <p class="fixed top-24 right-4 bg-red-600 text-white p-4 rounded-lg shadow-lg z-50" v-else-if="showNotification">{{ notificationMessage }}</p>
            </div>
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <!-- Header Section -->
                <div class="mb-16 text-center">
                    <h1 class="mb-4 text-4xl md:text-5xl font-bold text-gray-900">
                        Contact RentACar
                    </h1>
                    <p class="mx-auto max-w-2xl text-lg text-gray-600">
                        Have questions about vehicle booking, inspection records, damage reports, or general inquiries? Our team is here to help. Send us a message and we'll respond within 24 hours.
                    </p>
                </div>

                <div class="grid gap-12 lg:grid-cols-3">
                    <!-- Contact Form -->
                    <div class="lg:col-span-2">
                        <div
                            class="rounded-lg border border-gray-200 bg-white p-8 shadow-md"
                        >
                            <h2 class="mb-6 text-2xl font-bold text-gray-900">
                                Send us a Message
                            </h2>

                            <form class="space-y-6" @submit.prevent="sendTicket">
                                <!-- Name Field -->
                                <div>
                                    <label
                                        for="name"
                                        class="mb-2 block text-sm font-semibold text-gray-700"
                                    >
                                        Full Name <span class="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        class="w-full rounded-lg border border-gray-300 px-4 py-3 transition-colors focus:border-blue-900 focus:ring-2 focus:ring-blue-900/20"
                                        placeholder="Enter your full name"
                                        v-model="form.name"
                                    />
                                    <span class="text-red-500 text-sm" v-if="form.errors.name">{{ form.errors.name }}</span>
                                </div>

                                <!-- Email Field -->
                                <div>
                                    <label
                                        for="email"
                                        class="mb-2 block text-sm font-semibold text-gray-700"
                                    >
                                        Email Address <span class="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        class="w-full rounded-lg border border-gray-300 px-4 py-3 transition-colors focus:border-blue-900 focus:ring-2 focus:ring-blue-900/20"
                                        placeholder="your.email@example.com"
                                        v-model="form.email"
                                    />
                                    <span class="text-red-500 text-sm" v-if="form.errors.email">{{ form.errors.email }}</span>
                                </div>

                                <!-- Phone Field -->
                                <div>
                                    <label
                                        for="phone"
                                        class="mb-2 block text-sm font-semibold text-gray-700"
                                    >
                                        Phone Number <span class="text-gray-400 text-xs">(Optional)</span>
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        class="w-full rounded-lg border border-gray-300 px-4 py-3 transition-colors focus:border-blue-900 focus:ring-2 focus:ring-blue-900/20"
                                        placeholder="+256 700 000 000"
                                        v-model="form.phone"
                                    />
                                    <span class="text-red-500 text-sm" v-if="form.errors.phone">{{ form.errors.phone }}</span>
                                </div>

                                <!-- Subject Field -->
                                <div>
                                    <label
                                        for="subject"
                                        class="mb-2 block text-sm font-semibold text-gray-700"
                                    >
                                        Subject <span class="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        class="w-full rounded-lg border border-gray-300 px-4 py-3 transition-colors focus:border-blue-900 focus:ring-2 focus:ring-blue-900/20"
                                        placeholder="Booking support, Inspection question, Damage report, etc."
                                        v-model="form.subject"
                                    />
                                    <span class="text-red-500 text-sm" v-if="form.errors.subject">{{ form.errors.subject }}</span>
                                </div>

                                <!-- Message Field -->
                                <div>
                                    <label
                                        for="message"
                                        class="mb-2 block text-sm font-semibold text-gray-700"
                                    >
                                        Message <span class="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="6"
                                        class="resize-vertical w-full rounded-lg border border-gray-300 px-4 py-3 transition-colors focus:border-blue-900 focus:ring-2 focus:ring-blue-900/20"
                                        placeholder="Tell us how we can help you..."
                                        v-model="form.message"
                                    ></textarea>
                                    <span class="text-red-500 text-sm" v-if="form.errors.message">{{ form.errors.message }}</span>
                                </div>

                                <!-- Submit Button -->
                                <div>
                                    <button
                                        type="submit"
                                        :disabled="form.processing"
                                        class="w-full cursor-pointer rounded-lg bg-blue-900 hover:bg-blue-800 px-6 py-3 font-semibold text-white transition-colors duration-200 disabled:opacity-50"
                                    >
                                        {{ form.processing ? 'Sending...' : 'Send Message' }}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <!-- Contact Information Sidebar -->
                    <div class="lg:col-span-1">
                        <div class="rounded-lg border border-gray-200 bg-gradient-to-br from-blue-50 to-blue-100 p-8">
                            <h3 class="mb-6 text-xl font-bold text-gray-900">
                                Contact Information
                            </h3>

                            <div class="space-y-6">
                                <!-- Email -->
                                <div>
                                    <h4 class="mb-2 font-semibold text-gray-900 flex items-center">
                                        <svg class="w-4 h-4 mr-2 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                        </svg>
                                        Email
                                    </h4>
                                    <p class="text-gray-700">
                                        support@rentacar.test
                                    </p>
                                </div>

                                <!-- Phone -->
                                <div>
                                    <h4 class="mb-2 font-semibold text-gray-900 flex items-center">
                                        <svg class="w-4 h-4 mr-2 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773c.26.559.738 1.382 1.642 2.286.904.904 1.727 1.382 2.286 1.642l.773-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2.57c-.41 0-.823-.025-1.23-.075C9.875 17.923 5.631 16.6 2.945 13.945 .29 11.29 1.077 7.131 1.925 4.8c.05-.407.075-.82.075-1.23V3z"></path>
                                        </svg>
                                        Phone
                                    </h4>
                                    <p class="text-gray-700">
                                        +256 700 000 000
                                    </p>
                                </div>

                                <!-- Location -->
                                <div>
                                    <h4 class="mb-2 font-semibold text-gray-900 flex items-center">
                                        <svg class="w-4 h-4 mr-2 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                                            <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path>
                                        </svg>
                                        Location
                                    </h4>
                                    <p class="text-gray-700">
                                        Kampala<br />Uganda
                                    </p>
                                </div>

                                <!-- Business Hours -->
                                <div>
                                    <h4 class="mb-2 font-semibold text-gray-900 flex items-center">
                                        <svg class="w-4 h-4 mr-2 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00-.293.707l-.707.707a1 1 0 101.414 1.414l1.414-1.414A1 1 0 0011 9.586V6z" clip-rule="evenodd"></path>
                                        </svg>
                                        Hours
                                    </h4>
                                    <div class="space-y-1 text-gray-700 text-sm">
                                        <p>Mon - Sat<br />8:00 AM - 6:00 PM</p>
                                        <p class="text-gray-600">Sunday: Closed</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Quick Links -->
                        <div class="mt-8 rounded-lg border border-gray-200 bg-white p-6 shadow-md">
                            <h3 class="mb-4 text-lg font-bold text-gray-900">
                                Quick Links
                            </h3>
                            <div class="space-y-3">
                                <a
                                    :href="fleet.url()"
                                    class="block font-medium text-blue-900 transition-colors hover:text-blue-700"
                                >
                                    → Browse Our Fleet
                                </a>
                                <a
                                    :href="about.url()"
                                    class="block font-medium text-blue-900 transition-colors hover:text-blue-700"
                                >
                                    → About RentACar
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </HomeLayout>
</template>

<script setup lang="ts">
import HomeLayout from '@/layouts/HomeLayout.vue';
import { fleet } from '@/routes'
import { contact } from '@/routes'
import { computed } from 'vue';

const appName = computed(() => {
    return import.meta.env.VITE_APP_NAME || 'RentACar';
});
</script>
<template>
    <HomeLayout>
        <div class="min-h-screen bg-white">
            <!-- Hero Section -->
            <div class="bg-gradient-to-r from-blue-900 to-blue-800 py-20 text-white">
                <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <div class="text-center">
                        <h1 class="mb-6 text-4xl md:text-5xl font-bold">
                            About {{ appName }}
                        </h1>
                        <p class="mx-auto max-w-3xl text-lg md:text-xl leading-relaxed text-blue-100">
                            A comprehensive vehicle condition assessment system designed to revolutionize car rental operations through transparent, evidence-based vehicle inspections and dispute resolution.
                        </p>
                    </div>
                </div>
            </div>

            <div class="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
                <!-- Introduction Section -->
                <div class="mb-20">
                    <div class="grid items-center gap-12 lg:grid-cols-2">
                        <div>
                            <h2 class="mb-6 text-3xl font-bold text-gray-900">
                                The Problem
                            </h2>
                            <div class="space-y-4 leading-relaxed text-gray-700">
                                <p>
                                    Traditional car rental processes often lack clear documentation of vehicle condition before and after rental periods. This creates disputes when customers are charged for damage they claim existed before pickup, or when minor wear is exaggerated.
                                </p>
                                <p>
                                    Without systematic inspection records and evidence management, rental companies struggle to:
                                </p>
                                <ul class="space-y-2 ml-4 text-gray-700">
                                    <li class="flex items-start">
                                        <span class="text-blue-900 font-bold mr-3">•</span>
                                        <span>Prove vehicle condition at specific points in time</span>
                                    </li>
                                    <li class="flex items-start">
                                        <span class="text-blue-900 font-bold mr-3">•</span>
                                        <span>Track damage evolution throughout the rental period</span>
                                    </li>
                                    <li class="flex items-start">
                                        <span class="text-blue-900 font-bold mr-3">•</span>
                                        <span>Manage customer disputes fairly and transparently</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="rounded-lg bg-blue-50 p-8 border border-blue-200">
                            <h3 class="mb-4 text-lg font-bold text-gray-900">Our Solution</h3>
                            <p class="text-gray-700 mb-4">
                                {{ appName }} links vehicle inspection records directly to each reservation, creating an audit trail that protects both the rental company and customers.
                            </p>
                            <div class="space-y-3">
                                <div class="flex items-start">
                                    <svg class="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                                    </svg>
                                    <span class="text-gray-700 font-medium">Photo & evidence documentation</span>
                                </div>
                                <div class="flex items-start">
                                    <svg class="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                                    </svg>
                                    <span class="text-gray-700 font-medium">Before & after condition comparison</span>
                                </div>
                                <div class="flex items-start">
                                    <svg class="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                                    </svg>
                                    <span class="text-gray-700 font-medium">Damage report generation</span>
                                </div>
                                <div class="flex items-start">
                                    <svg class="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                                    </svg>
                                    <span class="text-gray-700 font-medium">Full audit trail and dispute resolution</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Core Features -->
                <div class="mb-20">
                    <div class="mb-12 text-center">
                        <h2 class="mb-4 text-3xl font-bold text-gray-900">
                            Core Modules
                        </h2>
                        <p class="mx-auto max-w-2xl text-gray-600">
                            {{ appName }} provides a complete workflow for vehicle management and condition tracking.
                        </p>
                    </div>

                    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        <!-- Vehicle Management -->
                        <div class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                            <div class="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                                <svg class="w-6 h-6 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"></path>
                                    <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z"></path>
                                </svg>
                            </div>
                            <h3 class="mb-2 text-lg font-semibold text-gray-900">
                                Vehicle Management
                            </h3>
                            <p class="text-gray-600 text-sm">
                                Centralized catalog of rental vehicles with specifications, status tracking, and maintenance history.
                            </p>
                        </div>

                        <!-- Reservation Management -->
                        <div class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                            <div class="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                                <svg class="w-6 h-6 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v2h16V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path>
                                </svg>
                            </div>
                            <h3 class="mb-2 text-lg font-semibold text-gray-900">
                                Reservation Management
                            </h3>
                            <p class="text-gray-600 text-sm">
                                Handle booking requests, approvals, and scheduling with integrated customer management.
                            </p>
                        </div>

                        <!-- Pickup Inspection -->
                        <div class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                            <div class="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                                <svg class="w-6 h-6 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                                    <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"></path>
                                </svg>
                            </div>
                            <h3 class="mb-2 text-lg font-semibold text-gray-900">
                                Pickup Inspection
                            </h3>
                            <p class="text-gray-600 text-sm">
                                Document vehicle condition at rental start with photos, notes, and mileage recording.
                            </p>
                        </div>

                        <!-- Return Inspection -->
                        <div class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                            <div class="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                                <svg class="w-6 h-6 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M5 2a1 1 0 011-1h8a1 1 0 011 1v1h1a2 2 0 012 2v2h1a1 1 0 110 2h-1v3h1a1 1 0 110 2h-1v3h1a1 1 0 110 2h-1v1a2 2 0 01-2 2h-1v1a1 1 0 11-2 0v-1H8v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-1H2a1 1 0 110-2h1v-3H2a1 1 0 110-2h1V7H2a1 1 0 110-2h1V4a2 2 0 012-2h1V2zM4 7v3h12V7H4z" clip-rule="evenodd"></path>
                                </svg>
                            </div>
                            <h3 class="mb-2 text-lg font-semibold text-gray-900">
                                Return Inspection
                            </h3>
                            <p class="text-gray-600 text-sm">
                                Record vehicle condition at rental end and compare against pickup state automatically.
                            </p>
                        </div>

                        <!-- Damage Reports -->
                        <div class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                            <div class="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                                <svg class="w-6 h-6 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 08.82 4.82A3 3 0 005 12h7a1 1 0 110 2H5a5 5 0 01-5-5V6z" clip-rule="evenodd"></path>
                                </svg>
                            </div>
                            <h3 class="mb-2 text-lg font-semibold text-gray-900">
                                Damage Reports
                            </h3>
                            <p class="text-gray-600 text-sm">
                                Generate detailed damage reports automatically by comparing pickup and return inspections.
                            </p>
                        </div>

                        <!-- Dispute Management -->
                        <div class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                            <div class="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                                <svg class="w-6 h-6 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"></path>
                                </svg>
                            </div>
                            <h3 class="mb-2 text-lg font-semibold text-gray-900">
                                Dispute Management
                            </h3>
                            <p class="text-gray-600 text-sm">
                                Resolve customer disputes using timestamped evidence and comprehensive inspection records.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Benefits Section -->
                <div class="mb-20">
                    <div class="mb-12 text-center">
                        <h2 class="mb-4 text-3xl font-bold text-gray-900">
                            Benefits for All Stakeholders
                        </h2>
                    </div>

                    <div class="grid gap-8 md:grid-cols-2">
                        <!-- Customer Benefits -->
                        <div class="rounded-lg bg-gradient-to-br from-green-50 to-green-100 p-8 border border-green-200">
                            <h3 class="mb-6 text-xl font-bold text-gray-900 flex items-center">
                                <svg class="w-6 h-6 text-green-700 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                                </svg>
                                Customer Benefits
                            </h3>
                            <ul class="space-y-3">
                                <li class="flex items-start">
                                    <span class="text-green-700 font-bold mr-3 mt-1">✓</span>
                                    <span class="text-gray-700">Transparent rental process with documented vehicle condition</span>
                                </li>
                                <li class="flex items-start">
                                    <span class="text-green-700 font-bold mr-3 mt-1">✓</span>
                                    <span class="text-gray-700">Protection against unfair damage charges</span>
                                </li>
                                <li class="flex items-start">
                                    <span class="text-green-700 font-bold mr-3 mt-1">✓</span>
                                    <span class="text-gray-700">Clear evidence in case of disputes</span>
                                </li>
                                <li class="flex items-start">
                                    <span class="text-green-700 font-bold mr-3 mt-1">✓</span>
                                    <span class="text-gray-700">Faster resolution of claims</span>
                                </li>
                            </ul>
                        </div>

                        <!-- Admin/Staff Benefits -->
                        <div class="rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 p-8 border border-blue-200">
                            <h3 class="mb-6 text-xl font-bold text-gray-900 flex items-center">
                                <svg class="w-6 h-6 text-blue-900 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                                </svg>
                                Admin & Staff Benefits
                            </h3>
                            <ul class="space-y-3">
                                <li class="flex items-start">
                                    <span class="text-blue-900 font-bold mr-3 mt-1">✓</span>
                                    <span class="text-gray-700">Centralized vehicle and reservation management</span>
                                </li>
                                <li class="flex items-start">
                                    <span class="text-blue-900 font-bold mr-3 mt-1">✓</span>
                                    <span class="text-gray-700">Automated damage report generation</span>
                                </li>
                                <li class="flex items-start">
                                    <span class="text-blue-900 font-bold mr-3 mt-1">✓</span>
                                    <span class="text-gray-700">Full audit trail for compliance and reporting</span>
                                </li>
                                <li class="flex items-start">
                                    <span class="text-blue-900 font-bold mr-3 mt-1">✓</span>
                                    <span class="text-gray-700">Reduced disputes and litigation</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Mission Statement -->
                <div class="mb-20 rounded-lg bg-gradient-to-r from-blue-900 to-blue-800 p-12 text-center text-white shadow-lg">
                    <h2 class="mb-4 text-3xl font-bold">
                        Our Mission
                    </h2>
                    <p class="mx-auto max-w-3xl text-lg leading-relaxed text-blue-100">
                        To revolutionize car rental operations by making vehicle inspections, condition assessment, and dispute resolution transparent, evidence-based, and accessible to both rental companies and customers.
                    </p>
                </div>

                <!-- Call to Action -->
                <div class="text-center">
                    <h2 class="mb-4 text-3xl font-bold text-gray-900">
                        Ready to experience transparent car rental?
                    </h2>
                    <p class="mx-auto mb-8 max-w-2xl text-gray-600">
                        Start booking vehicles with full confidence in our evidence-based inspection system.
                    </p>
                    <div class="flex flex-col justify-center gap-4 sm:flex-row">
                        <a
                            :href="fleet.url()"
                            class="rounded-lg bg-blue-900 hover:bg-blue-800 px-8 py-3 font-semibold text-white transition-colors duration-200"
                        >
                            Browse Our Fleet
                        </a>
                        <a
                            :href="contact.url()"
                            class="rounded-lg border-2 border-blue-900 bg-transparent px-8 py-3 font-semibold text-blue-900 transition-colors duration-200 hover:bg-blue-50"
                        >
                            Get in Touch
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </HomeLayout>
</template>

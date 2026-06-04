<?php

namespace Database\Seeders;

use App\Enums\UserRole;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class InitialUsersSeeder extends Seeder
{
    /**
     * Seed optional initial login accounts from environment variables.
     */
    public function run(): void
    {
        $this->createUserFromEnv(
            name: env('INITIAL_ADMIN_NAME', 'System Administrator'),
            email: env('INITIAL_ADMIN_EMAIL'),
            password: env('INITIAL_ADMIN_PASSWORD'),
            role: UserRole::ADMIN,
        );

        $this->createUserFromEnv(
            name: env('INITIAL_CLIENT_NAME', 'Initial Client'),
            email: env('INITIAL_CLIENT_EMAIL'),
            password: env('INITIAL_CLIENT_PASSWORD'),
            role: UserRole::CLIENT,
        );
    }

    private function createUserFromEnv(?string $name, ?string $email, ?string $password, UserRole $role): void
    {
        if (blank($email) || blank($password)) {
            return;
        }

        User::query()->updateOrCreate(
            ['email' => Str::lower($email)],
            [
                'name' => $name ?: Str::before($email, '@'),
                'password' => Hash::make($password),
                'role' => $role,
                'is_active' => true,
                'email_verified_at' => now(),
            ]
        );
    }
}

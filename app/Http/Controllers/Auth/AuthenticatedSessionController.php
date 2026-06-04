<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Inertia\Response;
use Laravel\Fortify\Features;
use App\Enums\UserRole;

class AuthenticatedSessionController extends Controller
{
    /**
     * Show the login page.
     */
    public function create(Request $request): Response
    {
        return Inertia::render('auth/Login', [
            'canResetPassword' => Route::has('password.request'),
            'status' => $request->session()->get('status'),
        ]);
    }

    /**
     * Show the admin login page.
     */
    public function adminLogin(Request $request): Response
    {
        return Inertia::render('auth/AdminLogin', [
            'canResetPassword' => Route::has('password.request'),
            'status' => $request->session()->get('status'),
        ]);
    }

    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request): RedirectResponse
    {
        $user = $request->validateCredentials();
        $loginMode = $request->string('login_mode', UserRole::CLIENT->value)->value();

        if ($loginMode === UserRole::ADMIN->value && $user->role !== UserRole::ADMIN) {
            Auth::guard('web')->logout();

            throw ValidationException::withMessages([
                'email' => 'This account is not authorized for admin access.',
            ]);
        }

        if ($loginMode === UserRole::CLIENT->value && $user->role === UserRole::ADMIN) {
            Auth::guard('web')->logout();

            throw ValidationException::withMessages([
                'email' => 'Please use Admin Login for this account.',
            ]);
        }

        if (Features::enabled(Features::twoFactorAuthentication()) && $user->hasEnabledTwoFactorAuthentication()) {
            $request->session()->put([
                'login.id' => $user->getKey(),
                'login.remember' => $request->boolean('remember'),
            ]);

            return to_route('two-factor.login');
        }

        Auth::login($user, $request->boolean('remember'));
        $request->session()->regenerate();

        return $this->redirectAfterLogin($request, $user);
    }

    public function storeAdminLogin(LoginRequest $request): RedirectResponse
    {
        $user = $request->validateCredentials();

        // Only allow admins to login through this method
        if ($user->role !== UserRole::ADMIN) {
            Auth::logout();
            return back()->withErrors([
                'email' => 'You are not authorized to access the admin area.',
            ])->onlyInput('email');
        }

        if (Features::enabled(Features::twoFactorAuthentication()) && $user->hasEnabledTwoFactorAuthentication()) {
            $request->session()->put([
                'login.id' => $user->getKey(),
                'login.remember' => $request->boolean('remember'),
            ]);

            return to_route('two-factor.login');
        }

        Auth::login($user, $request->boolean('remember'));
        $request->session()->regenerate();

        return $this->redirectAfterLogin($request, $user);
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): RedirectResponse
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect()->route('login');
    }

    private function redirectPathFor($user): string
    {
        return match ($user->role) {
            UserRole::ADMIN => route('admin.home', absolute: false),
            UserRole::CLIENT => route('client.home', absolute: false),
            default => route('home', absolute: false),
        };
    }

    private function redirectAfterLogin(Request $request, $user): RedirectResponse
    {
        $request->session()->forget('url.intended');

        return redirect()->to($this->redirectPathFor($user));
    }
}

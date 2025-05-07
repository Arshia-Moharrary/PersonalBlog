<?php

namespace App\Providers;

use App\Models\Role;
use App\Models\User;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Vite::prefetch(concurrency: 3);

        if (Schema::hasTable('roles')) {
            $roles = Role::all();

            foreach ($roles as $role) {
                Gate::define('is_' . $role->name, function (User $user) use ($role) {
                    return $user->hasRole($role);
                });
            }
        }
    }
}

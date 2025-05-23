<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use Illuminate\Validation\Rules;

class UserController extends Controller
{
    public function index()
    {
        $users = User::all();

        return Inertia::render('Admin/Users/Index', [
            'users' => $users,
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Users/Create');
    }

    public function store(Request $request)
    {
        $this->validateStore($request);

        User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->string('password')),
        ]);

        return to_route('admin.users.index')->with('success', __('success.create', [
            'attribute' => 'User'
        ]));
    }

    public function edit(User $user)
    {
        return Inertia::render('Admin/Users/Edit', [
            'user' => $user
        ]);
    }

    public function update(User $user, Request $request)
    {
        $this->validateUpdate($request, $user);

        $user->name = $request->name;
        $user->email = $request->email;

        if (!is_null($request->password)) {
            $user->password = Hash::make($request->string('password'));
        }

        $user->save();

        return back()->with('success', __('success.update', [
            'attribute' => 'User'
        ]));
    }

    public function destroy(User $user, Request $request)
    {
        if ($user->id == $request->user()->id) {
            return back()->with('error', 'Sorry, you can\'t delete your own account while you\'re signed in.');
        }

        try {
            $user->delete();

            return back()->with('success', __('success.delete', [
                'attribute' => 'User'
            ]));
        } catch (\Exception $e) {
            return back()->with('error', __('error.delete', [
                'attribute' => 'user'
            ]));
        }
    }

    private function validateStore(Request $request)
    {
        return $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'lowercase', 'email', 'max:255', 'unique:'.User::class],
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);
    }

    private function validateUpdate(Request $request, User $user)
    {
        return $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'lowercase', 'email', 'max:255', 'unique:users,email,'.$user->id],
            'password' => ['nullable', 'confirmed', Rules\Password::defaults()],
        ]);
    }
}

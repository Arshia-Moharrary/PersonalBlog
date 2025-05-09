<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategoryController extends Controller
{
    public function index()
    {
        $categories = Category::all();

        return Inertia::render('Admin/Categories/Index', [
            'categories' => $categories,
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Categories/Create');
    }

    public function store(Request $request)
    {
        $this->validateStore($request);

        Category::create([
            'name' => $request->name,
        ]);

        return to_route('admin.categories.index')->with('success', __('success.create', [
            'attribute' => 'Category'
        ]));
    }

    private function validateStore(Request $request)
    {
        return $request->validate([
            'name' => ['required', 'min:3', 'max:255', 'unique:categories,name'],
        ]);
    }
}

<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Exception;
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

    public function edit(Category $category)
    {
        return Inertia::render('Admin/Categories/Edit', [
            'category' => $category,
        ]);
    }

    public function update(Category $category, Request $request)
    {
        $this->validateUpdate($request, $category);

        $category->name = $request->name;

        $category->save();

        return back()->with('success', __('success.update', [
            'attribute' => 'Category'
        ]));
    }

    public function destroy(Category $category, Request $request)
    {
        try {
            $category->delete();

            return back()->with('success', __('success.delete', [
                'attribute' => 'Category'
            ]));
        } catch (\Exception $e) {
            return back()->with('error', __('error.delete', [
                'attribute' => 'category'
            ]));
        }
    }

    private function validateStore(Request $request)
    {
        return $request->validate([
            'name' => ['required', 'min:3', 'max:255', 'unique:categories,name'],
        ]);
    }

    private function validateUpdate(Request $request, Category $category)
    {
        return $request->validate([
            'name' => ['required', 'min:3', 'max:255', 'unique:categories,name,' . $category->id],
        ]);
    }
}

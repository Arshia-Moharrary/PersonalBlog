<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PostController extends Controller
{
    public function index()
    {
        $posts = Post::with('user', 'category')->get();

        return Inertia::render('Admin/Posts/Index', [
            'posts' => $posts,
        ]);
    }

    public function create()
    {
        $categories = Category::all();

        return Inertia::render('Admin/Posts/Create', [
            'categories' => $categories
        ]);
    }

    public function store(Request $request)
    {
        $this->validateStore($request);

        $request->user()->posts()->create([
            'title' => $request->title,
            'body' => $request->body,
            'category_id' => $request->category_id,
            'tags' => $request->tags,
        ]);

        return to_route('admin.posts.index')->with('success', __('success.create', [
            'attribute' => 'Post'
        ]));
    }

    public function edit(Post $post)
    {
        $categories = Category::all();

        return Inertia::render('Admin/Posts/Edit', [
            'post' => $post,
            'categories' => $categories
        ]);
    }
    
    public function update(Post $post, Request $request)
    {
        $this->validateStore($request);

        $post->title = $request->title;
        $post->body = $request->body;
        $post->category_id = $request->category_id;
        $post->tags = $request->tags;

        $post->save();

        return back()->with('success', __('success.update', [
            'attribute' => 'Post'
        ]));
    }

    public function destroy(Post $post)
    {
        try {
            $post->delete();

            return back()->with('success', __('success.delete', [
                'attribute' => 'Post'
            ]));
        } catch (\Exception $e) {
            return back()->with('error', __('error.delete', [
                'attribute' => 'post'
            ]));
        }
    }

    private function validateStore(Request $request)
    {
        return $request->validate([
            'title' => ['required', 'min:3', 'max:255'],
            'body' => ['required'],
            'category_id' => ['required', 'exists:categories,id'],
            'tags' => ['required', 'json'],
        ]);
    }
}

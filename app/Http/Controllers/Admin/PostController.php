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

        $tags = $this->getTagsInArray($request->tags);

        $request->user()->posts()->create([
            'title' => $request->title,
            'body' => $request->body,
            'category_id' => $request->category_id,
            'tags' => $tags,
        ]);

        return to_route('admin.posts.index')->with('success', __('success.create', [
            'attribute' => 'Post'
        ]));
    }

    private function getTagsInArray($tags)
    {
        $array = json_decode($tags, true);

        $result = [];

        foreach ($array as $tag) {
            $result[] = $tag['value'];
        }

        return $result;
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

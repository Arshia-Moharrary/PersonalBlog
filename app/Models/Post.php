<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $fillable = ['title', 'body', 'tags', 'category_id'];

    protected $casts = [
        'tags' => 'array',
    ];

    protected $appends = ['tags_in_json'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function getTagsInJsonAttribute()
    {
        return json_encode($this->tags);
    }
}

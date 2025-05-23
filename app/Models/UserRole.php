<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserRole extends Model
{
    protected $table = 'user_role';

    
    public function user()
    {
        $this->belongsTo(User::class);
    }

    public function role()
    {
        $this->belongsTo(Role::class);
    }
}

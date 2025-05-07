<?php
namespace App\Support\Permission\Traits;

use App\Models\Role;

trait HasRole
{
    public function assignRole(Role $role)
    {
        $this->roles()->attach($role);
    }

    public function revokeRole(Role $role)
    {
        $this->roles()->detach($role);
    }

    public function refreshRoles(array|null $roles)
    {
        $roles = $roles ?? [];
        
        $this->roles()->sync($roles);
    }

    public function hasRoleById(int $roleId)
    {
        $role = Role::find($roleId);

        return $this->roles->contains($role);
    }

    public function hasRoleByName(string $roleName)
    {
        $role = Role::where('name', $roleName)->first();

        return $this->roles->contains($role);
    }

    public function hasRole(Role $role)
    {
        return $this->roles->contains($role);
    }
}

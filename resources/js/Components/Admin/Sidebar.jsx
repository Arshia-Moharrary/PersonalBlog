import { LogOut, Home, Users, Settings } from 'lucide-react';
import { Link } from '@inertiajs/react';

export default function Sidebar() {
    return (
        <aside className="w-64 bg-white shadow-md px-6 py-8 hidden sm:block">
            <nav className="space-y-4 text-sm text-gray-700">
                <Link href={route('admin.index')} className={`flex items-center gap-2 hover:text-primary transition ${route().current('admin.index') ? 'text-primary' : ''}`}>
                    <Home size={18} /> Dashboard
                </Link>
                <Link href={route('admin.users.index')} className={`flex items-center gap-2 hover:text-primary transition ${route().current('admin.users.index') || route().current('admin.users.create') || route().current('admin.users.edit') ? 'text-primary' : ''}`}>
                    <Users size={18} /> Users
                </Link>
                <Link href="/admin/settings" className="flex items-center gap-2 hover:text-primary transition">
                    <Settings size={18} /> Settings
                </Link>
                <hr />
                <Link href={route('logout')} className="flex items-center gap-2 text-red-500 hover:underline">
                    <LogOut size={18} /> Logout
                </Link>
            </nav>
        </aside>
    )
}
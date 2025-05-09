import { Link } from "@inertiajs/react"
import { Plus } from 'lucide-react';

export default function Header({ title, button, routeName }) {
    return (
        <div className="flex justify-between items-center mb-6">
            <h1 className="text-xl font-semibold">{title ?? 'Undefined'}</h1>
            {button && (
                <Link href={route(routeName ?? 'home')} as="button" className="flex items-center gap-2 px-4 py-2 btn-primary">
                    <Plus size={16} /> {button ?? 'Add'}
                </Link>
            )}
        </div>
    )
}
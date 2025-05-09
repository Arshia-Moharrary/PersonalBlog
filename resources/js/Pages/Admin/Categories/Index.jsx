import { useState, useEffect } from 'react';
import { Eye, Pencil, Trash2 } from 'lucide-react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import Header from '@/Components/Admin/Index/Header';

export default function Index({ categories }) {
    const [categoryList, setCategoryList] = useState(categories);
    const [showModal, setShowModal] = useState(false);
    const [categoryToDelete, setCategoryToDelete] = useState(null);
    const { delete: destroy } = useForm();
    const { flash } = usePage().props;
    const settings = {
        route: 'categories',
        model: 'Category',
        models: 'Categories',
        hasAdd: true,
        hasEdit: true,
        hasDelete: true,
        hasShow: false,
    };

    const handleDelete = (id) => {
        setCategoryToDelete(id);
        setShowModal(true);
    };

    const confirmDelete = () => {
        destroy(route(`admin.${settings.route}.destroy`, categoryToDelete), {
            preserveScroll: true,
        });
    };

    const cancelDelete = () => {
        setShowModal(false);
    };

    useEffect(() => {
        if (flash.success) {
            setCategoryList(categoryList.filter(category => category.id !== categoryToDelete));
        }

        if (flash.success || flash.error) {
            setShowModal(false);
        }
    }, [flash]);


    return (
        <AdminLayout>
            <Head title={settings.models} />

            <Header title={settings.models} button={settings.hasAdd ? `Add ${settings.model}` : false} routeName={`admin.${settings.route}.create`} />

            <div className="overflow-x-auto">
                <table className="w-full text-sm border border-gray-200">
                    <thead className="bg-gray-100 text-left">
                        <tr>
                            <th className="px-4 py-2 border-b">ID</th>
                            <th className="px-4 py-2 border-b">Name</th>
                            <th className="px-4 py-2 border-b">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categoryList.map(category => (
                            <tr key={category.id} className="border-t">
                                <td className="px-4 py-2">{category.id}</td>
                                <td className="px-4 py-2">{category.name}</td>
                                <td className="px-4 py-2 flex gap-2">
                                    {settings.hasEdit && (
                                        <Link href={route(`admin.${settings.route}.edit`, category.id)} as="button" className="text-blue-600 hover:underline flex items-center gap-1 text-xs">
                                            <Pencil size={14} /> Edit
                                        </Link>
                                    )}
                                    {settings.hasShow && (
                                        <Link href={route(`admin.${settings.route}.show`, user.id)} as="button" className="text-green-600 hover:underline flex items-center gap-1 text-xs">
                                            <Eye size={14} /> Show
                                        </Link>
                                    )}
                                    {settings.hasDelete && (
                                        <button onClick={() => handleDelete(category.id)} className="text-red-600 hover:underline flex items-center gap-1 text-xs">
                                            <Trash2 size={14} /> Delete
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}
                        {categoryList.length === 0 && (
                            <tr>
                                <td colSpan="4" className="px-4 py-4 text-center text-gray-500">
                                    No {settings.model.charAt(0).toLowerCase() + settings.model.slice(1)} found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 w-1/3 max-w-sm shadow-xl transform transition-all">
                        <h2 className="text-lg font-semibold mb-4">Confirm Deletion</h2>
                        <p className="text-sm mb-4 text-gray-600">Are you sure you want to delete this record?<br /> This action cannot be undone.</p>
                        <div className="flex justify-between">
                            <button
                                onClick={confirmDelete}
                                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition">
                                Yes, Delete
                            </button>
                            <button
                                onClick={cancelDelete}
                                className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition">
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </AdminLayout>
    );
}

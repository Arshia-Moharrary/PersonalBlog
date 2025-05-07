import { useState } from 'react';
import { Pencil, Trash2, Plus } from 'lucide-react';
import AdminLayout from '@/Layouts/AdminLayout';

export default function Index({ users }) {
    const [userList, setUserList] = useState(users);
    const [showModal, setShowModal] = useState(false);
    const [userToDelete, setUserToDelete] = useState(null);

    const handleDelete = (id) => {
        setUserToDelete(id);
        setShowModal(true);
    };

    const confirmDelete = () => {
        setUserList(userList.filter(user => user.id !== userToDelete));
        setShowModal(false);
    };

    const cancelDelete = () => {
        setShowModal(false);
    };

    return (
        <AdminLayout>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-xl font-semibold">Users</h1>
                <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white text-sm rounded hover:opacity-90 transition">
                    <Plus size={16} /> Add User
                </button>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-sm border border-gray-200">
                    <thead className="bg-gray-100 text-left">
                        <tr>
                            <th className="px-4 py-2 border-b">ID</th>
                            <th className="px-4 py-2 border-b">Name</th>
                            <th className="px-4 py-2 border-b">Email</th>
                            <th className="px-4 py-2 border-b">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userList.map(user => (
                            <tr key={user.id} className="border-t">
                                <td className="px-4 py-2">{user.id}</td>
                                <td className="px-4 py-2">{user.name}</td>
                                <td className="px-4 py-2">{user.email}</td>
                                <td className="px-4 py-2 flex gap-2">
                                    <button className="text-blue-600 hover:underline flex items-center gap-1 text-xs">
                                        <Pencil size={14} /> Edit
                                    </button>
                                    <button onClick={() => handleDelete(user.id)} className="text-red-600 hover:underline flex items-center gap-1 text-xs">
                                        <Trash2 size={14} /> Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                        {userList.length === 0 && (
                            <tr>
                                <td colSpan="4" className="px-4 py-4 text-center text-gray-500">
                                    No users found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Modal for delete confirmation */}
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 w-1/3 max-w-sm shadow-xl transform transition-all">
                        <h2 className="text-lg font-semibold mb-4">Confirm Deletion</h2>
                        <p className="text-sm mb-4 text-gray-600">Are you sure you want to delete this user?<br /> This action cannot be undone.</p>
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

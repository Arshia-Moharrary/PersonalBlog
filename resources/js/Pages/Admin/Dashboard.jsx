import AdminLayout from "@/Layouts/AdminLayout";

export default function Dashboard() {
    return (
        <AdminLayout>
            <h1 className="text-2xl font-semibold text-gray-800">Admin Dashboard</h1>
            <p className="mt-4 text-gray-600">Welcome to your admin panel.</p>
        </AdminLayout>
    )
}
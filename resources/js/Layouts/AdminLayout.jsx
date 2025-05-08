import Sidebar from "@/Components/Admin/Sidebar";
import Alert from "@/Components/Admin/Alert";
import { useState, useEffect } from "react";
import { usePage } from "@inertiajs/react";

export default function AdminLayout({ children }) {
    const { flash } = usePage().props;
    const [alert, setAlert] = useState(null);

    useEffect(() => {
        if (flash.success) {
            setAlert({ type: 'success', message: flash.success })
        } else if (flash.error) {
            setAlert({ type: 'error', message: flash.error })
        }
    }, [flash])
    
    return (
        <div className="min-h-screen flex bg-gray-100">
            {alert && (
                <Alert
                    type={alert.type}
                    message={alert.message}
                    onClose={() => setAlert(null)}
                />
            )}
            
            <Sidebar />

            <main className="flex-1 p-6">
                {children}
            </main>
        </div>
    );
}

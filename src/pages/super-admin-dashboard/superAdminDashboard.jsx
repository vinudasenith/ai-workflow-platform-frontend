import { useState, useEffect } from "react";
import api from "../../api/axios";
import { toast } from "react-hot-toast";
export default function SuperAdmin() {

    const [systemHealth, setSystemHealth] = useState({
        mongoConnected: false,
        totalOrganization: 0,
        totalUsers: 0,

    });

    const [loadingHealth, setLoadingHealth] = useState(true);

    const fetchSystemHealth = async () => {
        try {
            const res = await api.get("/health/online", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            });
            setSystemHealth(res.data);
        } catch (err) {
            toast.error("Failed to fetch system health");
            console.log(err);
        } finally {
            setLoadingHealth(false);
        }
    }

    useEffect(() => {
        fetchSystemHealth();
    }, []);

    return (
        <div className="min-h-screen flex bg-gray-100">
            {/* Sidebar */}
            <aside className="w-64 bg-blue-600 text-white flex flex-col">
                <div className="p-6 text-2xl font-bold border-b border-gray-700">
                    Super Admin
                </div>
                <nav className="flex-1 p-4 space-y-2">
                    <a href="/superadmin" className="block px-4 py-2 rounded-lg hover:bg-yellow-500">Dashboard</a>
                    <a href="/superadmin/organizations" className="block px-4 py-2 rounded-lg hover:bg-yellow-500">Organizations</a>
                    <a href="/users" className="block px-4 py-2 rounded-lg hover:bg-yellow-500">Users</a>
                    <a href="superadmin/setting" className="block px-4 py-2 rounded-lg hover:bg-yellow-500">Account Settings</a>
                    <a href="/auditLogs" className="block px-4 py-2 rounded-lg hover:bg-yellow-500">Audit Logs</a>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8 bg-gray-50 min-h-screen">
                {/* Header */}
                <header className="mb-8 flex items-center justify-between">
                    <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>
                </header>

                {/* System Health Section */}
                <section>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">System Health</h2>

                    {loadingHealth ? (
                        <div className="flex justify-center items-center h-32">
                            <p className="text-gray-600 text-lg">Loading system health...</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* MongoDB Status */}
                            <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center hover:shadow-xl transition-shadow duration-300">
                                <p className="text-gray-500 text-sm mb-2">MongoDB Connected</p>
                                <p className={`text-xl font-bold ${systemHealth.mongoConnected ? 'text-green-600' : 'text-red-600'}`}>
                                    {systemHealth.mongoConnected ? "Yes" : "No"}
                                </p>
                            </div>

                            {/* Total Organizations */}
                            <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center hover:shadow-xl transition-shadow duration-300">
                                <p className="text-gray-500 text-sm mb-2">Total Organizations</p>
                                <p className="text-xl font-bold text-gray-900">{systemHealth.totalOrganizations}</p>
                            </div>

                            {/* Total Users */}
                            <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center hover:shadow-xl transition-shadow duration-300">
                                <p className="text-gray-500 text-sm mb-2">Total Users</p>
                                <p className="text-xl font-bold text-gray-900">{systemHealth.totalUsers}</p>
                            </div>
                        </div>
                    )}
                </section>
            </main>

        </div>
    );
}

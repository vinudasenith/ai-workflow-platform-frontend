import { Link, useParams } from "react-router-dom";

export default function UserDashboard() {
    const { tenantId } = useParams();

    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Sidebar */}
            <aside className="w-64 bg-white shadow-lg">
                <div className="p-6 border-b">
                    <h1 className="text-2xl font-bold text-indigo-600">User Dashboard</h1>
                </div>
                <nav className="p-4 space-y-2">
                    <Link
                        to={`/dashboard/${tenantId}/users/workflows`}
                        className="block px-4 py-2 rounded-lg text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 font-medium"
                    >
                        Workflows & Tasks
                    </Link>

                    <Link
                        to={`/dashboard/${tenantId}/users/notifications`}
                        className="block px-4 py-2 rounded-lg text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 font-medium"
                    >
                        Notifications
                    </Link>

                    <Link
                        to={`/dashboard/${tenantId}/users/profile`}
                        className="block px-4 py-2 rounded-lg text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 font-medium"
                    >
                        Profile & Settings
                    </Link>
                </nav>
            </aside>
        </div>
    );
}

export default function AdminDashboard() {
    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="w-64 bg-white shadow-lg">
                <div className="px-6 py-6 text-center border-b">
                    <h2 className="text-xl font-bold text-gray-800">organizationName</h2>
                    <p className="text-sm text-gray-500">Main Admin Dashboard</p>
                </div>
                <nav className="mt-6 space-y-2">
                    <a
                        href="/overview"
                        className="block px-6 py-3 text-gray-700 hover:bg-gray-200 font-medium"
                    >
                        📊 Overview
                    </a>
                    <a
                        href="/users"
                        className="block px-6 py-3 text-gray-700 hover:bg-gray-200 font-medium"
                    >
                        👥 Users
                    </a>
                    <a
                        href="/reports"
                        className="block px-6 py-3 text-gray-700 hover:bg-gray-200 font-medium"
                    >
                        📑 Reports
                    </a>
                    <a
                        href="/settings"
                        className="block px-6 py-3 text-gray-700 hover:bg-gray-200 font-medium"
                    >
                        ⚙️ Settings
                    </a>
                    <a
                        href="/"
                        className="block px-6 py-3 text-red-600 hover:bg-red-100 font-medium"
                    >
                        🚪 Logout
                    </a>
                </nav>
            </aside>
        </div>
    );
}

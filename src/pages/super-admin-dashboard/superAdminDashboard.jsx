export default function SuperAdmin() {
    return (
        <div className="min-h-screen flex bg-gray-100">
            {/* Sidebar */}
            <aside className="w-64 bg-blue-600 text-white flex flex-col">
                <div className="p-6 text-2xl font-bold border-b border-gray-700">
                    Super Admin
                </div>
                <nav className="flex-1 p-4 space-y-2">
                    <a href="/dashboard" className="block px-4 py-2 rounded-lg hover:bg-yellow-500">Dashboard</a>
                    <a href="/organizations" className="block px-4 py-2 rounded-lg hover:bg-yellow-500">Organizations</a>
                    <a href="/users" className="block px-4 py-2 rounded-lg hover:bg-yellow-500">Users</a>
                    <a href="/settings" className="block px-4 py-2 rounded-lg hover:bg-yellow-500">Settings</a>
                    <a href="/auditLogs" className="block px-4 py-2 rounded-lg hover:bg-yellow-500">Audit Logs</a>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8">
                {/* Header */}
                <header className="mb-8 flex items-center justify-between">
                    <h1 className="text-3xl font-bold text-black">Dashboard Overview</h1>
                </header>
            </main>
        </div>
    );
}

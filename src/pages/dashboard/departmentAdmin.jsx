export default function AdminDepartment() {
    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Sidebar */}
            <aside className="w-64 bg-white shadow-lg">
                <div className="p-6 border-b">
                    <h1 className="text-2xl font-bold text-indigo-600">Dept HQ</h1>
                </div>
                <nav className="p-4 space-y-2">

                    <a href="/dashboard/:tenantId/departmentAdmin/departmentManagment" className="block px-4 py-2 rounded-lg text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 font-medium">Department Managment</a>

                    <a href="/dashboard/:tenantId/departmentAdmin/userManagment" className="block px-4 py-2 rounded-lg text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 font-medium">User Management</a>

                    <a href="/dashboard/:tenantId/departmentAdmin/notification" className="block px-4 py-2 rounded-lg text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 font-medium">Communication & Notifications</a>

                    <a href="/dashboard/:tenantId/departmentAdmin/settings" className="block px-4 py-2 rounded-lg text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 font-medium">Settings</a>
                </nav>
            </aside>
        </div>
    )
}

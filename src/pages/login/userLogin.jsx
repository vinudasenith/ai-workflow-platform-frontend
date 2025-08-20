export default function UserLogin() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 px-4">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <div className="text-center mb-6">
                    <h2 className="text-3xl font-bold text-gray-900">User Login</h2>
                    <p className="mt-2 text-sm text-gray-600">Sign in to your organization account</p>
                </div>

                <div className="bg-white py-8 px-6 shadow-lg sm:rounded-lg sm:px-10 border border-gray-200">
                    <form className="space-y-6">
                        {/* Organization Selection */}
                        <div>
                            <label htmlFor="organization" className="block text-sm font-medium text-gray-700">Organization *</label>
                            <select
                                id="organization"
                                className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            >
                                <option value="">Select Organization</option>
                            </select>
                        </div>

                        {/* Role Selection */}
                        <div>
                            <label htmlFor="role" className="block text-sm font-medium text-gray-700">Role *</label>
                            <select
                                id="role"
                                className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            >
                                <option value="OrgAdmin">Organization Admin / Owner</option>
                                <option value="DepartmentAdmin">Department Heads / Managers</option>
                                <option value="Staff">Staff / Employees</option>
                                <option value="User">Users / General Members</option>
                            </select>
                        </div>

                        {/* Email & Password */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email *</label>
                            <input
                                id="email"
                                type="email"
                                placeholder="your.email@example.com"
                                className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password *</label>
                            <input
                                id="password"
                                type="password"
                                placeholder="Enter password"
                                className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                        </div>

                        {/* Remember me and Forgot password */}
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input id="remember-me" type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
                                <label htmlFor="remember-me" className="ml-2 text-sm text-gray-700">Remember me</label>
                            </div>

                            <div className="text-sm">
                                <a href="#" className="font-medium text-blue-600 hover:text-blue-500">Forgot password?</a>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
                        >
                            Sign in
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

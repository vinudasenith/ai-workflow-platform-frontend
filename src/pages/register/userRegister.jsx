export default function UserRegister() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 px-4">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <div className="text-center mb-6">
                    <h2 className="text-3xl font-bold text-gray-900">User Registration</h2>
                    <p className="mt-2 text-sm text-gray-600">
                        Register to your organization account (admin approval required)
                    </p>
                </div>

                <div className="bg-white py-8 px-6 shadow-lg sm:rounded-lg sm:px-10 border border-gray-200">
                    <form className="space-y-6">
                        {/* Organization Selection */}
                        <div>
                            <label htmlFor="organization" className="block text-sm font-medium text-gray-700">
                                Organization *
                            </label>
                            <select
                                id="organization"
                                className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            >
                                <option value="">Select Organization</option>
                                <option value="org1">Organization 1</option>
                                <option value="org2">Organization 2</option>
                            </select>
                        </div>

                        {/* Role Selection */}
                        <div>
                            <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                                Role *
                            </label>
                            <select
                                id="role"
                                className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            >
                                <option value="">Select Role</option>
                                <option value="user">User</option>
                                <option value="officer">Officer</option>
                                <option value="departmentHead">Department Head</option>
                                <option value="student">Student</option>
                            </select>
                        </div>

                        {/* Personal Details */}
                        <div>
                            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name *</label>
                            <input
                                id="fullName"
                                type="text"
                                placeholder="Enter your full name"
                                className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                        </div>

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

                        {/* Terms */}
                        <div className="flex items-start space-x-2">
                            <input type="checkbox" id="agreeToTerms" className="mt-1" />
                            <label htmlFor="agreeToTerms" className="text-sm text-gray-700">
                                I agree to the <a href="#" className="text-blue-600 hover:underline">Terms of Service</a> and <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
                        >
                            Register User
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

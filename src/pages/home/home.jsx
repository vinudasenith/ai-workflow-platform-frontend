export default function Home() {
    return (
        <div>
            <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <div className="md:w-1/2 mb-10 md:mb-0">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">Streamline Your Organization's Workflow</h2>
                            <p className="text-xl mb-8 text-indigo-100">A powerful multi-tenant platform designed to manage organizations, departments, and users with seamless efficiency.</p>
                            <div className="flex space-x-4">
                                <a href="#" className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">Get Started - Register Organization</a>
                                <a href="#" className="border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:bg-opacity-10 transition-colors">Learn More</a>
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-6">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-white bg-opacity-30 p-4 rounded-lg">
                                        <div className="text-3xl mb-2">🏢</div>
                                        <h3 className="font-semibold">Multi-Tenant</h3>
                                        <p className="text-sm">Isolated organizations</p>
                                    </div>
                                    <div className="bg-white bg-opacity-30 p-4 rounded-lg">
                                        <div className="text-3xl mb-2">👥</div>
                                        <h3 className="font-semibold">Role-Based</h3>
                                        <p className="text-sm">Granular access control</p>
                                    </div>
                                    <div className="bg-white bg-opacity-30 p-4 rounded-lg">
                                        <div className="text-3xl mb-2">📊</div>
                                        <h3 className="font-semibold">Analytics</h3>
                                        <p className="text-sm">Real-time insights</p>
                                    </div>
                                    <div className="bg-white bg-opacity-30 p-4 rounded-lg">
                                        <div className="text-3xl mb-2">🔒</div>
                                        <h3 className="font-semibold">Secure</h3>
                                        <p className="text-sm">Enterprise-grade security</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Powerful Features for Every Role</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">Our platform offers tailored experiences for each user type in your organization's hierarchy.</p>
                    </div>

                    {/*admin card*/}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow">
                            <div className="text-4xl mb-4">👑</div>
                            <h3 className="text-xl font-semibold mb-2">Organization Admin</h3>
                            <p className="text-gray-600">Complete control over your organization's settings, users, and departments.</p>
                            <ul className="mt-4 space-y-2">
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                                    <span className="text-sm">User management</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                                    <span className="text-sm">Billing & subscriptions</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                                    <span className="text-sm">Custom branding</span>
                                </li>
                            </ul>
                        </div>

                        {/*department head card*/}
                        <div className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow">
                            <div className="text-4xl mb-4">👨‍💼</div>
                            <h3 className="text-xl font-semibold mb-2">Department Head</h3>
                            <p className="text-gray-600">Manage your department's workflow, tasks, and team members efficiently.</p>
                            <ul className="mt-4 space-y-2">
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                                    <span className="text-sm">Team oversight</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                                    <span className="text-sm">Performance analytics</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                                    <span className="text-sm">Approval workflows</span>
                                </li>
                            </ul>
                        </div>

                        {/*officer card*/}
                        <div className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow">
                            <div className="text-4xl mb-4">👨‍💻</div>
                            <h3 className="text-xl font-semibold mb-2">Officer</h3>
                            <p className="text-gray-600">Handle daily tasks, process requests, and collaborate with team members.</p>
                            <ul className="mt-4 space-y-2">
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                                    <span className="text-sm">Task management</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                                    <span className="text-sm">Communication tools</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                                    <span className="text-sm">Progress tracking</span>
                                </li>
                            </ul>
                        </div>

                        {/*user card*/}
                        <div className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow">
                            <div className="text-4xl mb-4">👨‍🎓</div>
                            <h3 className="text-xl font-semibold mb-2">User</h3>
                            <p className="text-gray-600">Submit requests, track status, and communicate with organization staff.</p>
                            <ul className="mt-4 space-y-2">
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                                    <span className="text-sm">Request submission</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                                    <span className="text-sm">Status tracking</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                                    <span className="text-sm">Direct messaging</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* How it works section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How WorkFlow Works</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            A seamless process from organization registration to daily operations
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">

                        {/* Step 1 */}
                        <div className="flex-1">
                            <div className="bg-white p-6 rounded-xl shadow-sm h-full">
                                <div className="text-5xl text-indigo-100 font-bold mb-4">01</div>
                                <h3 className="text-xl font-semibold mb-4">Organization Registration</h3>
                                <p className="text-gray-600 mb-4">
                                    Admins register their organization and set up the initial configuration.
                                </p>
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <div className="flex items-center mb-3">
                                        <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mr-3">🏢</div>
                                        <div>
                                            <div className="font-medium">Organization Profile</div>
                                            <div className="text-xs text-gray-500">Branding, settings, and preferences</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mr-3">👑</div>
                                        <div>
                                            <div className="font-medium">Admin Account</div>
                                            <div className="text-xs text-gray-500">Full administrative privileges</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="flex-1">
                            <div className="bg-white p-6 rounded-xl shadow-sm h-full">
                                <div className="text-5xl text-indigo-100 font-bold mb-4">02</div>
                                <h3 className="text-xl font-semibold mb-4">Department Setup</h3>
                                <p className="text-gray-600 mb-4">
                                    Create departments and assign heads to manage each unit.
                                </p>
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <div className="flex items-center mb-3">
                                        <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mr-3">📊</div>
                                        <div>
                                            <div className="font-medium">Department Structure</div>
                                            <div className="text-xs text-gray-500">Hierarchy and reporting lines</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mr-3">👨‍💼</div>
                                        <div>
                                            <div className="font-medium">Department Heads</div>
                                            <div className="text-xs text-gray-500">Manage teams and workflows</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="flex-1">
                            <div className="bg-white p-6 rounded-xl shadow-sm h-full">
                                <div className="text-5xl text-indigo-100 font-bold mb-4">03</div>
                                <h3 className="text-xl font-semibold mb-4">User Management</h3>
                                <p className="text-gray-600 mb-4">
                                    Add team members and users with appropriate role-based access.
                                </p>
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <div className="flex items-center mb-3">
                                        <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mr-3">👥</div>
                                        <div>
                                            <div className="font-medium">Role Assignment</div>
                                            <div className="text-xs text-gray-500">Granular permissions system</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mr-3">🔐</div>
                                        <div>
                                            <div className="font-medium">Access Control</div>
                                            <div className="text-xs text-gray-500">Secure and compliant</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

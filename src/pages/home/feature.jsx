export default function Features() {
    return (
        <div className="bg-white min-h-screen py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-20">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">
                        Platform Features
                    </h2>
                    <div className="w-20 h-1 bg-indigo-600 mx-auto mb-8"></div>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Enterprise-grade multi-tenant platform with robust role management, comprehensive analytics, and secure workflows for organizations of all sizes.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Feature Card 1 */}
                    <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-indigo-100 hover:shadow-md transition-all duration-300 group">
                        <div className="w-16 h-16 bg-indigo-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-indigo-100 transition-colors duration-300">
                            <span className="text-3xl text-indigo-600">🏢</span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Multi-Tenant Architecture</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Isolated and secure organizations, each with independent settings and data management capabilities.
                        </p>
                    </div>

                    {/* Feature Card 2 */}
                    <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-indigo-100 hover:shadow-md transition-all duration-300 group">
                        <div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors duration-300">
                            <span className="text-3xl text-blue-600">👥</span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Role-Based Access Control</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Fine-grained control over user permissions for admins, department heads, officers, and regular users.
                        </p>
                    </div>

                    {/* Feature Card 3 */}
                    <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-indigo-100 hover:shadow-md transition-all duration-300 group">
                        <div className="w-16 h-16 bg-green-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-100 transition-colors duration-300">
                            <span className="text-3xl text-green-600">📊</span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Real-Time Analytics</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Track performance, workflow efficiency, and department productivity with comprehensive dashboards.
                        </p>
                    </div>

                    {/* Feature Card 4 */}
                    <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-indigo-100 hover:shadow-md transition-all duration-300 group">
                        <div className="w-16 h-16 bg-red-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-100 transition-colors duration-300">
                            <span className="text-3xl text-red-600">🔒</span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Enterprise Security</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Secure authentication, role-based permissions, and encrypted data storage for maximum protection.
                        </p>
                    </div>

                    {/* Feature Card 5 */}
                    <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-indigo-100 hover:shadow-md transition-all duration-300 group">
                        <div className="w-16 h-16 bg-purple-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-100 transition-colors duration-300">
                            <span className="text-3xl text-purple-600">⚡</span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">High Performance</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Optimized for speed and accessibility, with responsive layouts for all devices and platforms.
                        </p>
                    </div>

                    {/* Feature Card 6 */}
                    <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-indigo-100 hover:shadow-md transition-all duration-300 group">
                        <div className="w-16 h-16 bg-cyan-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-cyan-100 transition-colors duration-300">
                            <span className="text-3xl text-cyan-600">🌐</span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Cloud-Native</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Designed to deploy on modern cloud platforms with scalable architecture for growing organizations.
                        </p>
                    </div>
                </div>

                {/* Additional Info Section */}
                <div className="mt-20 bg-gray-50 rounded-2xl p-12 border border-gray-200">
                    <div className="max-w-4xl mx-auto text-center">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Ready to experience these features?</h3>
                        <p className="text-gray-600 mb-8 text-lg">
                            Our platform is designed to scale with your organization's needs while maintaining security and performance.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="/demo"
                                className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors duration-300"
                            >
                                Request a Demo
                            </a>
                            <a
                                href="/docs"
                                className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300"
                            >
                                View Documentation
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
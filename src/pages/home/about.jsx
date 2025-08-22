export default function About() {
    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <div className="text-center mt-20 mb-20">
                <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">
                    About Our Platform
                </h2>
                <div className="w-20 h-1 bg-indigo-600 mx-auto mb-8"></div>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    Enterprise-grade multi-tenant platform designed to streamline workflows, manage users, and deliver actionable insights across your organization.
                </p>
            </div>

            {/* Mission Section */}
            <div className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mr-4">
                                    <span className="text-2xl text-indigo-600">🎯</span>
                                </div>
                                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
                            </div>
                            <p className="text-gray-700 text-lg leading-relaxed mb-8">
                                To empower organizations of all sizes with a secure, efficient, and scalable platform that simplifies management of teams, departments, and users while maintaining the highest standards of data integrity.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mt-1 mr-3">
                                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                                            <span className="text-green-600 text-sm">✓</span>
                                        </div>
                                    </div>
                                    <p className="text-gray-600">Simplify team management with intuitive tools</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mt-1 mr-3">
                                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                                            <span className="text-green-600 text-sm">✓</span>
                                        </div>
                                    </div>
                                    <p className="text-gray-600">Enhance cross-department collaboration</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mt-1 mr-3">
                                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                                            <span className="text-green-600 text-sm">✓</span>
                                        </div>
                                    </div>
                                    <p className="text-gray-600">Provide actionable insights through advanced analytics</p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2">
                            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                                <div className="bg-gray-50 rounded-lg p-12 flex items-center justify-center">
                                    <div className="text-center">
                                        <span className="text-6xl text-indigo-600 mb-4 block">👥</span>
                                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Team Collaboration</h3>
                                        <p className="text-gray-600">Seamless teamwork across departments</p>
                                    </div>
                                </div>
                                <div className="mt-6 flex items-center bg-indigo-50 p-4 rounded-lg">
                                    <div className="bg-indigo-600 text-white p-2 rounded-lg mr-4">
                                        <span className="text-xl">📊</span>
                                    </div>
                                    <p className="text-sm font-medium text-gray-800">Real-time analytics and reporting</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Vision Section */}
            <div className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
                        <div className="lg:w-1/2">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                                    <span className="text-2xl text-purple-600">🔭</span>
                                </div>
                                <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
                            </div>
                            <p className="text-gray-700 text-lg leading-relaxed mb-8">
                                To be the industry standard for multi-tenant organization management, providing comprehensive role-based access, advanced analytics, and enterprise-grade security for every department.
                            </p>
                            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                                <p className="text-gray-700 italic border-l-4 border-indigo-500 pl-4">
                                    "We envision a world where organizations can focus entirely on growth and innovation while we handle the complexity of access management and workflow optimization."
                                </p>
                            </div>
                        </div>
                        <div className="lg:w-1/2">
                            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                                <div className="bg-gray-50 rounded-lg p-12 flex items-center justify-center">
                                    <div className="text-center">
                                        <span className="text-6xl text-purple-600 mb-4 block">🌐</span>
                                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Global Reach</h3>
                                        <p className="text-gray-600">Supporting organizations worldwide</p>
                                    </div>
                                </div>
                                <div className="mt-6 flex items-center bg-purple-50 p-4 rounded-lg">
                                    <div className="bg-purple-600 text-white p-2 rounded-lg mr-4">
                                        <span className="text-xl">🚀</span>
                                    </div>
                                    <p className="text-sm font-medium text-gray-800">Scalable enterprise infrastructure</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Values Section */}
            <div className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                            The principles that guide our platform development and company culture
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
                            <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                                <span className="text-3xl text-blue-600">🤝</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Collaboration</h3>
                            <p className="text-gray-600">
                                We believe in fostering teamwork and open communication across all departments and organizations, creating solutions that bring people together.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
                            <div className="w-16 h-16 bg-green-50 rounded-xl flex items-center justify-center mb-6">
                                <span className="text-3xl text-green-600">🔒</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Security First</h3>
                            <p className="text-gray-600">
                                Data privacy and secure operations are our foundational principles, implemented through rigorous protocols and continuous monitoring.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
                            <div className="w-16 h-16 bg-orange-50 rounded-xl flex items-center justify-center mb-6">
                                <span className="text-3xl text-orange-600">⚡</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Efficiency</h3>
                            <p className="text-gray-600">
                                We design optimized workflows and intuitive tools that help teams achieve more in less time, reducing friction and increasing productivity.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Transform Your Organization?</h2>
                    <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto">
                        Join thousands of forward-thinking organizations using our platform to streamline workflows and enhance productivity.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/register"
                            className="bg-indigo-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-indigo-700 transition-colors duration-300 shadow-md"
                        >
                            Register Your Organization
                        </a>
                    </div>
                </div>
            </div>

            {/* Contact Section */}
            <div className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Have questions or need support? Our team is here to help you succeed.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
                            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <span className="text-xl text-indigo-600">📧</span>
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-2">Email Us</h3>
                            <p className="text-indigo-600">support@platform.com</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
                            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <span className="text-xl text-indigo-600">📞</span>
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-2">Call Us</h3>
                            <p className="text-indigo-600">+94 700 000 000</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
                            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <span className="text-xl text-indigo-600">💬</span>
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-2">Live Chat</h3>
                            <p className="text-indigo-600">Available 24/7</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
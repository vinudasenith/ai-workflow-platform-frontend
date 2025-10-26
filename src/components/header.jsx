export default function Header() {
    return (
        <header className="bg-white shadow-sm border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">

                    {/*  Logo */}
                    <div className="flex-shrink-0">
                        <h1 className="text-2xl font-bold text-indigo-600">WorkFlow</h1>
                    </div>

                    {/* Center Nav Links */}
                    <nav className="hidden md:flex space-x-6 absolute left-1/2 transform -translate-x-1/2">
                        <a href="/" className="px-3 py-2 text-gray-700 hover:text-indigo-600 font-medium">Home</a>
                        <a href="/feature" className="px-3 py-2 text-gray-700 hover:text-indigo-600 font-medium">Features</a>
                        <a href="/about" className="px-3 py-2 text-gray-700 hover:text-indigo-600 font-medium">About</a>
                    </nav>

                    {/*  Register */}
                    <div className="flex space-x-3 items-center">

                        {/* Login Dropdown */}
                        <div className="relative group">
                            <button className="flex items-center px-4 py-2 text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200 border border-gray-300 rounded-lg hover:border-indigo-400">
                                Login
                                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">

                                {/* Login Options */}
                                <div className="py-2">
                                    <a href="/login" className="px-4 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors duration-150 flex items-center">
                                        <span className="bg-indigo-100 text-indigo-600 p-2 rounded mr-3">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                            </svg>
                                        </span>
                                        <div>
                                            <div className="font-medium">Organization</div>
                                            <div className="text-xs text-gray-500 mt-1">Full system access</div>
                                        </div>
                                    </a>
                                    <a href="/ulogin" className=" px-4 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors duration-150 flex items-center">
                                        <span className="bg-indigo-100 text-indigo-600 p-2 rounded mr-3">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                            </svg>
                                        </span>
                                        <div>
                                            <div className="font-medium">User</div>
                                            <div className="text-xs text-gray-500 mt-1">Limited access</div>
                                        </div>
                                    </a>
                                    <a href="/alogin" className=" px-4 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors duration-150 flex items-center">
                                        <span className="bg-indigo-100 text-indigo-600 p-2 rounded mr-3">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                            </svg>
                                        </span>
                                        <div>
                                            <div className="font-medium">Super admin</div>
                                            <div className="text-xs text-gray-500 mt-1">Manage admins & users</div>
                                        </div>
                                    </a>

                                </div>
                            </div>
                        </div>


                        {/* Register Dropdown */}
                        <div className="relative group">
                            <button className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium transition-colors duration-200">
                                Register
                                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                                <div className="py-2">
                                    <a href="/register" className="px-4 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors duration-150 flex items-center">
                                        <span className="bg-indigo-100 text-indigo-600 p-2 rounded mr-3">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                            </svg>
                                        </span>
                                        <div>
                                            <div className="font-medium">Register Organization</div>
                                            <div className="text-xs text-gray-500 mt-1">Only OrgAdmin can create</div>
                                        </div>
                                    </a>

                                    <div className="border-t border-gray-100 my-1"></div>

                                    <a href="/uregister" className="px-4 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors duration-150 flex items-center">
                                        <span className="bg-indigo-100 text-indigo-600 p-2 rounded mr-3">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                                            </svg>
                                        </span>
                                        <div>
                                            <div className="font-medium">Request User Account</div>
                                            <div className="text-xs text-gray-500 mt-1">Department Head / Officer / User → needs approval</div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </header>
    );
}

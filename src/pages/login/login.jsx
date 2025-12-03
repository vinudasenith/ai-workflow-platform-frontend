import { useState } from "react";
import { toast } from "react-hot-toast";
import api from "../../api/axios";
import { useNavigate } from "react-router-dom";


export default function LoginPage() {
    //state variables
    const [name, setName] = useState('')
    const [ownerEmail, setOwnerEmail] = useState('')
    const [ownerPassword, setOwnerPassword] = useState('')
    const navigate = useNavigate();


    //handle submit for organization login
    function handleOnSubmit(e) {
        e.preventDefault();
        console.log(ownerEmail, ownerPassword);
        api.post("/organizations/login", {
            name: name,
            ownerEmail: ownerEmail,
            ownerPassword: ownerPassword
        }).then((res) => {
            const { tenantId } = res.data;

            localStorage.setItem("tenantId", tenantId);

            toast.success("Organization logged in successfully");
            navigate(`/admin/${tenantId}`);

        }).catch((err) => {
            toast.error("Something went wrong");
        })
    }


    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4"
        >
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome Back to WorkFlow Platform</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Sign in to your organization account and manage users, departments, and workflows seamlessly
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 items-start">
                    {/* Login Form */}
                    <div className="bg-white shadow-lg rounded-xl p-6">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Organization Login</h2>
                        <p className="text-gray-600 mb-6">
                            Enter your credentials to access your organization workspace
                        </p>

                        <form onSubmit={handleOnSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="organization" className="block text-sm font-medium text-gray-700">
                                    Organization Name
                                </label>
                                <input
                                    id="organization"
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Enter your organization name"
                                    className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email Address
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    value={ownerEmail}
                                    onChange={(e) => setOwnerEmail(e.target.value)}
                                    placeholder="Enter your email address"
                                    className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    type="password"
                                    value={ownerPassword}
                                    onChange={(e) => setOwnerPassword(e.target.value)}
                                    placeholder="Enter your password"
                                    className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        id="remember-me"
                                        type="checkbox"
                                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                    />
                                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                                        Remember this organization
                                    </label>
                                </div>
                                <div className="text-sm">
                                    <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                                        Forgot password?
                                    </a>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white font-medium py-3 rounded-md hover:bg-blue-700 transition"
                            >
                                Sign in
                            </button>
                        </form>
                    </div>

                    {/* Benefits / Info Section */}
                    <div className="space-y-6">
                        <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
                            <h3 className="text-xl font-semibold text-blue-700 mb-4">Why Use WorkFlow Platform?</h3>
                            <ul className="space-y-3 text-gray-700">
                                <li>✅ Multi-Tenant Architecture – scalable for all sizes</li>
                                <li>✅ Secure Role-based Access – admins, officers, and users</li>
                                <li>✅ Track Workflows in Real-time</li>
                                <li>✅ Easy User Registration and Approval</li>
                                <li>✅ 24/7 Support – dedicated assistance</li>
                            </ul>
                        </div>

                        <div className="bg-white shadow rounded-xl p-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">New Here?</h3>
                            <p className="text-gray-700 mb-4">
                                Register your organization and get started in minutes. Admin approval is required for all new users.
                            </p>
                            <button
                                type="button"
                                className="w-full bg-white border border-gray-300 text-gray-700 py-3 rounded-md hover:bg-gray-50 transition"
                            >
                                Register New Organization
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

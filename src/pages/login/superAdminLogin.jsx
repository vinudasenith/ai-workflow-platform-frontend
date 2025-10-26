import { useState } from "react"
import { toast } from "react-hot-toast"
import api from "../../api/axios"
import { useNavigate } from "react-router-dom"

export default function SuperAdminLogin() {
    //state variables
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    //handle submit for user login
    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log({ email, password });
        api.post("/user/login", {
            email: email,
            password: password
        }).then((res) => {
            toast.success("User logged in successfully");

            // Set token, tenantId and role in localStorage
            const { token, tenantId, role, user } = res.data

            localStorage.setItem("token", token)
            localStorage.setItem("tenantId", tenantId)
            localStorage.setItem("role", role)

            // save full user object
            localStorage.setItem("user", JSON.stringify(user));

            navigate(`/superadmin`)
        }).catch((err) => {
            toast.error("Something went wrong");
        })
    }

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 px-4">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <div className="text-center mb-6">
                    <h2 className="text-3xl font-bold text-gray-900">Super-Admin Login</h2>

                </div>

                <div className="bg-white py-8 px-6 shadow-lg sm:rounded-lg sm:px-10 border border-gray-200">
                    <form onSubmit={handleOnSubmit} className="space-y-6">
                        {/* Email & Password */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email *</label>
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="your.email@example.com"
                                className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password *</label>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter password"
                                className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
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

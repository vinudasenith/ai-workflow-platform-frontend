import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-hot-toast"
import api from "../../api/axios"

export default function UserRegister() {

    //state variables
    const [organizationName, setOrganizationName] = useState('');
    const [role, setRole] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    //handle submit for user registration
    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log({ organizationName, role, firstName, lastName, email, password });
        api.post("/user/register", {
            organizationName: organizationName,
            role: role,
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        }).then((res) => {
            toast.success("Registration successful! Please wait until an admin approves your account.");
            navigate("/ulogin");

        }).catch((err) => {
            toast.error("Something went wrong");
        })
    }

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
                    <form onSubmit={handleOnSubmit} className="space-y-6">

                        {/* Organization Selection */}
                        <div>
                            <label htmlFor="organization" className="block text-sm font-medium text-gray-700">
                                Organization *
                            </label>
                            <input
                                id="organization"
                                placeholder="Enter your organization name"
                                value={organizationName}
                                onChange={(e) => setOrganizationName(e.target.value)}
                                className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            >

                            </input>
                        </div>

                        {/* Role Selection */}
                        <div>
                            <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                                Role *
                            </label>
                            <select
                                id="role"
                                className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                            >
                                <option value="">Select Role</option>
                                <option value="Users">User</option>
                                <option value="Staff">Staff</option>
                                <option value="DepartmentAdmin">Department Head</option>
                            </select>
                        </div>

                        {/* Personal Details */}
                        <div>
                            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name *</label>
                            <input
                                id="firstName"
                                type="text"
                                placeholder="Enter your first name"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                        </div>

                        <div>
                            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name *</label>
                            <input
                                id="lastName"
                                type="text"
                                placeholder="Enter your last name"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email *</label>
                            <input
                                id="email"
                                type="email"
                                placeholder="your.email@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password *</label>
                            <input
                                id="password"
                                type="password"
                                placeholder="Enter password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
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

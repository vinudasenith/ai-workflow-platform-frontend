import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import api from "../../api/axios";
export default function RegisterPage() {
    //state variables
    const [name, setName] = useState('');
    const [industry, setIndustry] = useState('');
    const [organizationSize, setOrganizationSize] = useState('');
    const [ownerName, setOwnerName] = useState('');
    const [ownerEmail, setOwnerEmail] = useState('');
    const [ownerPassword, setOwnerPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const navigate = useNavigate();


    //handle submit for organization registration
    const handleOnSubmit = (e) => {
        e.preventDefault();

        //validation for making all fields required
        if (!name || !industry || !organizationSize || !ownerName || !ownerEmail || !ownerPassword || !phoneNumber) {
            toast.error("All fields are required");
            return;
        }

        console.log({ ownerEmail, ownerPassword, ownerName, name, industry, organizationSize, phoneNumber });
        api.post("/organizations/register", {
            name: name,
            industry: industry,
            organizationSize: organizationSize,
            ownerName: ownerName,
            ownerEmail: ownerEmail,
            ownerPassword: ownerPassword,
            phoneNumber: phoneNumber

        }).then((res) => {
            toast.success("Registration successful! Please wait until an admin approves");
            navigate("/login");

        }).catch((err) => {
            toast.error("Something went wrong");
        })

    };

    return (
        <div
            className="min-h-screen bg-cover bg-center py-12 px-4"
            style={{
                backgroundImage:
                    "url('')",
            }}
        >
            <div className="max-w-5xl mx-auto">

                {/* Header */}

                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">Join Our Platform</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Register your organization to access powerful multi-tenant solutions designed for modern businesses
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 items-start">

                    {/* Registration Form */}

                    <div className="bg-white shadow-lg rounded-xl p-6">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Organization Registration</h2>
                        <p className="text-gray-600 mb-6">
                            Fill out the form below to get started with your organization account
                        </p>

                        <form onSubmit={handleOnSubmit} className="space-y-6">

                            {/* Organization Details */}

                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold text-gray-800">Organization Details</h3>
                                <input
                                    type="text"
                                    placeholder="Organization Name *"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />
                                <select value={industry} onChange={(e) => setIndustry(e.target.value)} className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none">
                                    <option>Select Industry *</option>
                                    <option>Technology</option>
                                    <option>Healthcare</option>
                                    <option>Finance</option>
                                    <option>Education</option>
                                    <option>Retail</option>
                                    <option>Other</option>
                                </select>
                                <select value={organizationSize} onChange={(e) => setOrganizationSize(e.target.value)} className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none">
                                    <option>Select Organization Size *</option>
                                    <option>1-10</option>
                                    <option>11-50</option>
                                    <option>51-200</option>
                                    <option>201-1000</option>
                                    <option>1000+</option>
                                </select>
                                <textarea
                                    rows={3}
                                    placeholder="Organization Description"
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />
                            </div>

                            {/* Primary Contact */}

                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold text-gray-800">Primary Contact</h3>
                                <input
                                    type="text"
                                    placeholder="Full Name *"
                                    value={ownerName}
                                    onChange={(e) => setOwnerName(e.target.value)}
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />
                                <input
                                    type="email"
                                    placeholder="Email Address *"
                                    value={ownerEmail}
                                    onChange={(e) => setOwnerEmail(e.target.value)}
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />
                                <input
                                    type="tel"
                                    placeholder="Phone Number"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />
                                <input
                                    type="password"
                                    placeholder="Password *"
                                    value={ownerPassword}
                                    onChange={(e) => setOwnerPassword(e.target.value)}
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />
                            </div>

                            {/* Terms */}

                            <div className="space-y-4">
                                <div className="flex items-center space-x-2">
                                    <input type="checkbox" className="mt-1" />
                                    <span className="text-sm text-gray-700">
                                        I agree to the <a href="#" className="text-blue-600">Terms of Service</a> and <a href="#" className="text-blue-600">Privacy Policy</a>
                                    </span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <input type="checkbox" className="mt-1" />
                                    <span className="text-sm text-gray-700">Subscribe to product updates</span>
                                </div>
                            </div>

                            <button type="submit" className="w-full bg-blue-600 text-white font-medium py-3 rounded-md hover:bg-blue-700 transition">
                                Create Organization Account
                            </button>
                        </form>
                    </div>


                    {/* Benefits Section */}

                    <div className="space-y-6">
                        <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
                            <h3 className="text-xl font-semibold text-blue-700 mb-4">Why Choose Our Platform?</h3>
                            <ul className="space-y-3 text-gray-700">
                                <li>✅ Multi-Tenant Architecture – scalable for all sizes</li>
                                <li>✅ Enterprise Security – SOC 2, encryption</li>
                                <li>✅ 24/7 Support – dedicated assistance</li>
                                <li>✅ Easy Integration – APIs & webhooks</li>
                            </ul>
                        </div>

                        <div className="bg-white shadow rounded-xl p-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Get Started in Minutes</h3>
                            <ol className="space-y-3 text-gray-700">
                                <li>1️⃣ Complete the registration form</li>
                                <li>2️⃣ Verify your email address</li>
                                <li>3️⃣ Set up your organization workspace</li>
                                <li>4️⃣ Start inviting team members</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

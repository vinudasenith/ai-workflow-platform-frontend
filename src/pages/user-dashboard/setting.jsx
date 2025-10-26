import { useEffect, useState } from "react";
import api from "../../api/axios";

export default function AccountSettingUser() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        api.get("/user/me", {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`,
                "Content-Type": "application/json"
            }
        })
            .then(res => {
                setUser(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    if (!user) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <p className="text-red-500 font-medium">Failed to load account information.</p>
            </div>
        );
    }

    return (
        <div className="h-[650px] max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-8 mt-12 border border-gray-200">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Account Settings</h1>
                    <p className="text-sm text-gray-500 mt-1">Manage your account details and preferences</p>
                </div>
                <div className="mt-4 sm:mt-0">
                </div>
            </div>

            {/* Details */}
            <div className="space-y-6">
                <div>
                    {/* Default Profile Photo */}
                    <img
                        src="https://www.pngmart.com/files/21/Admin-Profile-Vector-PNG-Photos.png"
                        alt="Profile"
                        className="w-20 h-20 rounded-full border-2 border-blue-500 shadow-md"
                    />
                </div>


                {/* Full Name */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700">Full Name</label>
                    <input
                        type="text"
                        value={`${user.firstName} ${user.lastName}`}
                        readOnly
                        className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-800 font-medium focus:outline-none"
                    />
                </div>

                {/* Email */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700">Email Address</label>
                    <input
                        type="text"
                        value={user.email}
                        readOnly
                        className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-800 font-medium focus:outline-none"
                    />
                </div>

                {/* Role */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700">Role</label>
                    <input
                        type="text"
                        value={user.role}
                        readOnly
                        className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-800 font-medium focus:outline-none"
                    />
                </div>
            </div>
        </div>
    );
}

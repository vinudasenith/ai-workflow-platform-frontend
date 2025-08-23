import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { toast } from "react-hot-toast"

export default function Dashboard() {

    const navigate = useNavigate();
    const [role, setRole] = useState(null);
    const [tenantId, setTenantId] = useState(null);

    useEffect(() => {
        const role = localStorage.getItem("role");
        const tenantId = localStorage.getItem("tenantId");
        setRole(role);
        setTenantId(tenantId);
    }, [])

    const handleNavigation = (targetRole) => {
        if (role === targetRole && tenantId) {
            navigate(`/dashboard/${tenantId}/${targetRole}`);
        } else {
            toast.error("You don’t have access to this section.");
        }
    }


    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
            <div className="container mx-auto px-6 py-12 max-w-7xl">
                {/* Header */}
                <div className="text-center mb-24">
                    <h1 className="text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-4">
                        Organization Dashboard
                    </h1>
                    <p className="text-slate-600 text-lg font-medium max-w-2xl mx-auto leading-relaxed">
                        Welcome to your command center. Select your role to access the corresponding section and manage your
                        responsibilities.
                    </p>
                </div>

                {/* Role Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 ">
                    {/* DepartmentAdmin */}
                    <div className="group relative bg-white/80 backdrop-blur-sm border border-white/20 shadow-xl rounded-2xl p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-emerald-600"></div>
                        <div className="relative z-10">
                            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl mb-6 flex items-center justify-center">
                                <div className="w-6 h-6 bg-white rounded-md"></div>
                            </div>
                            <h2 className="text-2xl font-bold text-slate-800 mb-3">DepartmentAdmin</h2>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                Manage department workflows and team members with specialized tools and insights.
                            </p>
                            <button
                                onClick={() => handleNavigation("DepartmentAdmin")} className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-emerald-600 hover:to-emerald-700 transform hover:-translate-y-0.5 transition-all duration-200 shadow-lg">
                                Access Department
                            </button>
                        </div>
                    </div>

                    {/* Staff */}
                    <div className="group relative bg-white/80 backdrop-blur-sm border border-white/20 shadow-xl rounded-2xl p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-amber-600"></div>
                        <div className="relative z-10">
                            <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl mb-6 flex items-center justify-center">
                                <div className="w-6 h-6 bg-white rounded-md"></div>
                            </div>
                            <h2 className="text-2xl font-bold text-slate-800 mb-3">Staff</h2>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                Access tasks, submit reports, and collaborate seamlessly with your team members.
                            </p>
                            <button onClick={() => handleNavigation("Staff")} className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-amber-600 hover:to-amber-700 transform hover:-translate-y-0.5 transition-all duration-200 shadow-lg mt-6">
                                Access Staff Portal
                            </button>
                        </div>
                    </div>

                    {/* User */}
                    <div className="group relative bg-white/80 backdrop-blur-sm border border-white/20 shadow-xl rounded-2xl p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-indigo-600"></div>
                        <div className="relative z-10">
                            <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl mb-6 flex items-center justify-center">
                                <div className="w-6 h-6 bg-white rounded-md"></div>
                            </div>
                            <h2 className="text-2xl font-bold text-slate-800 mb-3">User</h2>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                View your personal tasks, reports, and stay updated with the latest information.
                            </p>
                            <button onClick={() => handleNavigation("User")} className="w-full bg-gradient-to-r from-indigo-500 to-indigo-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-indigo-600 hover:to-indigo-700 transform hover:-translate-y-0.5 transition-all duration-200 shadow-lg mt-6">
                                Access User Portal
                            </button>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="text-center mt-20">
                    <div className="inline-flex items-center px-6 py-3 bg-white/60 backdrop-blur-sm rounded-full border border-white/20">
                        <p className="text-slate-500 font-medium">Multi-tenant platform • All rights reserved © 2025</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

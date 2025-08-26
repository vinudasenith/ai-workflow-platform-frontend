import { useState, useEffect } from "react";
import api from "../../api/axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function TaskManagment() {

    //department list state
    const [departments, setDepartments] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    //fetch departments from backend
    const fetchDepartments = async () => {
        try {
            const res = await api.get("/departments/tenant/all", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            });
            setDepartments(res.data);
        } catch (err) {
            toast.error("Failed to fetch departments");
            console.log(err);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchDepartments();
    }, []);

    return (
        <div className="bg-gray-50 min-h-screen py-10 px-6">
            {/* Page Header */}
            <div className="max-w-5xl mx-auto text-center mb-12 px-4">
                {/* Header */}
                <h1 className="text-3xl font-bold text-gray-900 mb-6">
                    Task Management
                </h1>

                {/* Instructions Section */}
                <div className="flex flex-col md:flex-row justify-center items-start gap-10 text-left">

                    {/* Instruction 1 */}
                    <div className="flex flex-col items-center md:items-start max-w-xs bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 mb-4">
                            <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h2 className="text-xl font-semibold text-gray-900 mb-2">Select a Department</h2>
                        <p className="text-gray-600 text-sm">
                            Choose the relevant department to view and manage tasks assigned to your team. This ensures tasks are organized correctly.
                        </p>
                    </div>

                    {/* Instruction 2 */}
                    <div className="flex flex-col items-center md:items-start max-w-xs bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" />
                                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                            </svg>
                        </div>
                        <h2 className="text-xl font-semibold text-gray-900 mb-2">Add or Track Tasks</h2>
                        <p className="text-gray-600 text-sm">
                            Create new tasks or track existing ones to ensure timely completion and team collaboration.
                        </p>
                    </div>

                    {/* Instruction 3 */}
                    <div className="flex flex-col items-center md:items-start max-w-xs bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-yellow-100 mb-4">
                            <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h8m-5 8h5" />
                            </svg>
                        </div>
                        <h2 className="text-xl font-semibold text-gray-900 mb-2">Stay Organized</h2>
                        <p className="text-gray-600 text-sm">
                            Use the task management features to keep all team activities clear, organized, and on track.
                        </p>
                    </div>

                </div>
            </div>



            {loading ? (
                <p className="text-center text-gray-500">Loading departments...</p>
            ) : departments.length === 0 ? (
                <p className="text-center text-gray-500">No departments found.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {departments.map((dept) => (
                        <div
                            key={dept.id}
                            className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition-shadow cursor-pointer"
                        >
                            {/* Department Title */}
                            <h2 className="text-xl font-semibold text-gray-900 mb-2">
                                {dept.name}
                            </h2>

                            {/* Description  */}
                            {dept.description && (
                                <p className="text-gray-600 text-sm mb-4">
                                    {dept.description}
                                </p>
                            )}

                            {/* Button */}
                            <button onClick={() => navigate(`/dashboard/:tenantId/staff/taskManagment/operations`)} className="w-full bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 transition-colors">
                                View Tasks
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );


}


import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import api from "../../api/axios";
export default function DepartmentManagement() {

    //Form states
    const [name, setName] = useState('');
    const [departmentCode, setDepartmentCode] = useState('');
    const [description, setDescription] = useState('');

    //department list state
    const [departments, setDepartments] = useState([]);
    const [loading, setLoading] = useState(true);

    //fetch departments from backend
    useEffect(() => {
        const fetchDepartments = async () => {
            try {
                const token = localStorage.getItem("token");
                const res = await api.get("/departments/tenant/all", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })

                setDepartments(res.data);
            } catch (err) {
                toast.error("Failed to fetch departments");
                console.log(err);
            } finally {
                setLoading(false);
            }
        }

        fetchDepartments();
    }, []);

    //handle submit for department registration
    function handleOnSubmit(e) {
        e.preventDefault();

        //validation for making name and department code required
        if (!name.trim() || !departmentCode.trim()) {
            toast.error("Please fill in all fields");
            return;
        }

        console.log(name, departmentCode, description);

        const token = localStorage.getItem("token");

        api.post("/departments/register", {
            name: name,
            departmentCode: departmentCode,
            description: description

        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((res) => {
            toast.success("Department created successfully");

            //fetch departments
            api.get("/departments/tenant/all").then(res => setDepartments(res.data));
            setName('');
            setDepartmentCode('');
            setDescription('');

        }).catch((err) => {
            toast.error("Something went wrong");
        })
    }

    // Handle delete department
    const deleteDepartment = async (departmentCode) => {

        try {
            await api.delete(`/departments/delete/${departmentCode}`);
            setDepartments(prev => prev.filter(dept => dept.departmentCode !== departmentCode));
            toast.success("Department deleted successfully");
        } catch (err) {
            toast.error("Failed to delete department");
            console.error(err);
        }
    };


    return (
        <div className="bg-gray-50 min-h-screen p-8">
            <div className="max-w-6xl mx-auto space-y-10">
                {/* Header */}
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-gray-800">Department Management</h1>
                    <p className="text-gray-500 mt-2">Create and manage organization departments</p>
                </div>

                {/* Create Department Form */}
                <div className="bg-white shadow rounded-2xl p-6">
                    <h2 className="text-xl font-semibold text-gray-700 mb-4">Create Department</h2>
                    <form onSubmit={handleOnSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Department Name</label>
                            <input
                                type="text"
                                placeholder="e.g. Human Resources"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="mt-1 w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Department Code</label>
                            <input
                                type="text"
                                placeholder="e.g. HR"
                                value={departmentCode}
                                onChange={(e) => setDepartmentCode(e.target.value)}
                                className="mt-1 w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                            />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700">Description</label>
                            <textarea
                                rows="3"
                                placeholder="Brief description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className="mt-1 w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                            ></textarea>
                        </div>
                        <div className="md:col-span-2 flex justify-end">
                            <button
                                type="submit"
                                className="px-6 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700"
                            >
                                Create
                            </button>
                        </div>
                    </form>
                </div>

                {/* Departments List */}
                <div className="bg-white shadow rounded-2xl p-6">
                    <h2 className="text-xl font-semibold text-gray-700 mb-4">Departments List</h2>

                    {loading ? (
                        <p className="text-gray-500 text-center">Loading departments...</p>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Name</th>
                                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Code</th>
                                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Description</th>
                                        <th className="px-6 py-3 text-center text-sm font-medium text-gray-500">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {departments.map((dept) => (
                                        <tr key={dept.departmentCode}>
                                            <td className="px-6 py-4">{dept.name}</td>
                                            <td className="px-6 py-4">{dept.departmentCode}</td>
                                            <td className="px-6 py-4">{dept.description}</td>
                                            <td className="px-6 py-4 text-center">
                                                <button
                                                    onClick={() => deleteDepartment(dept.departmentCode)}
                                                    className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded font-medium text-sm"
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

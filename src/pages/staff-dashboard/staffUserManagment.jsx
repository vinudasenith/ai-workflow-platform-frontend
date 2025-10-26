import api from "../../api/axios";
import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";

export default function StaffUserManagment() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch users from backend 
    const fetchUsers = async () => {
        setLoading(true);
        try {
            const token = localStorage.getItem("token");
            const res = await api.get("/user/tenant/all", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            // Filter out DepartmentAdmin users
            const filteredUsers = res.data.filter(user => user.role !== "DepartmentAdmin" && user.role !== "Staff");
            setUsers(filteredUsers);

        } catch (err) {
            toast.error("Failed to fetch users");
            console.log(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    // Approve user
    const approveUser = async (email) => {
        try {
            await api.put(`/user/approve/${email}`);
            setUsers(prev =>
                prev.map(user =>
                    user.email === email ? { ...user, approved: true } : user
                )
            );
            toast.success("User approved");
        } catch (err) {
            toast.error("Failed to approve user");
            console.log(err);
        }
    };

    // Decline user
    const declineUser = async (email) => {
        try {
            await api.put(`/user/decline/${email}`);
            setUsers(prev =>
                prev.map(u =>
                    u.email === email ? { ...u, approved: false, status: "Declined" } : u
                )
            );
            toast.success("User declined");
        } catch (err) {
            toast.error("Failed to decline user");
            console.log(err);
        }
    };

    // Delete user
    const deleteUser = async (email) => {
        try {
            await api.delete(`/user/${email}`);
            setUsers(prev => prev.filter(u => u.email !== email));
            toast.success("User deleted");
        } catch (err) {
            toast.error("Failed to delete user");
            console.log(err);
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen p-8">
            <div className="max-w-7xl mx-auto space-y-10">
                {/* Header */}
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-gray-800">User Management</h1>
                    <p className="text-gray-500 mt-2">
                        Manage all staff and users within your department
                    </p>
                </div>

                {/* Users Table */}
                <div className="bg-white shadow rounded-2xl p-6">
                    <h2 className="text-xl font-semibold text-gray-700 mb-4">Users List</h2>

                    {loading ? (
                        <p className="text-center text-gray-500">Loading users...</p>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">First Name</th>
                                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Last Name</th>
                                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Email</th>
                                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Role</th>
                                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Status</th>
                                        <th className="px-6 py-3 text-center text-sm font-medium text-gray-500">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {users.map((user) => {
                                        const statusText = user.approved ? "Approved" : user.status === "Declined" ? "Declined" : "Pending";
                                        const badgeClass =
                                            statusText === "Approved"
                                                ? "bg-green-100 text-green-800"
                                                : statusText === "Declined"
                                                    ? "bg-red-100 text-red-800"
                                                    : "bg-yellow-100 text-yellow-800";

                                        return (
                                            <tr key={user.email}>
                                                <td className="px-6 py-4">{user.firstName}</td>
                                                <td className="px-6 py-4">{user.lastName}</td>
                                                <td className="px-6 py-4">{user.email}</td>
                                                <td className="px-6 py-4">{user.role}</td>
                                                <td className="px-6 py-4">
                                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${badgeClass}`}>
                                                        {statusText}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 text-center space-x-2">
                                                    <button
                                                        onClick={() => approveUser(user.email)}
                                                        className="px-3 py-1 bg-green-500 hover:bg-green-600 text-white rounded text-sm font-medium"
                                                    >
                                                        Approve
                                                    </button>
                                                    <button
                                                        onClick={() => declineUser(user.email)}
                                                        className="px-3 py-1 bg-yellow-500 hover:bg-yellow-600 text-white rounded text-sm font-medium"
                                                    >
                                                        Decline
                                                    </button>
                                                    <button
                                                        onClick={() => deleteUser(user.email)}
                                                        className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded text-sm font-medium"
                                                    >
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

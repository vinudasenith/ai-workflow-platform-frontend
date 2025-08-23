import api from "../../api/axios"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

export default function AdminUsersManagment() {

    const { tenantId } = useParams();
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch all users and filter by tenantId
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await api.get("/user/all");
                const tenantUsers = res.data.filter((user) => user.tenantId === tenantId);
                setUsers(tenantUsers);
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, [tenantId]);

    //Approve user
    const approveUser = async (email) => {
        try {
            await api.put(`/user/approve/${email}`);
            setUsers((prev) =>
                prev.map((user) =>
                    user.email === email ? { ...user, approved: true } : user
                )
            )
        } catch (err) {
            console.log(err);
        }
    }

    //Decline user
    const declineUser = async (email) => {
        try {
            await api.put(`/user/decline/${email}`);
            setUsers((prev) =>
                prev.map((user) =>
                    user.email === email ? { ...user, approved: false } : user
                )
            );
            toast.success("User declined");
        } catch (err) {
            console.error(err);
            toast.error("Failed to decline user");
        }
    };

    // Delete user
    const deleteUser = async (email) => {
        try {
            await api.delete(`/user/${email}`);
            setUsers((prev) => prev.filter((user) => user.email !== email));
            toast.success("User deleted");
        } catch (err) {
            console.error(err);
            toast.error("Failed to delete user");
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <p className="text-gray-600 text-lg">Loading users...</p>
            </div>
        );
    }


    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-2xl font-bold mb-6">Users Management</h1>

            <div className="overflow-x-auto bg-white shadow rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">

                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">First name</th>
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Last name</th>
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Email</th>
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Role</th>
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Status</th>
                            <th className="px-6 py-3 text-center text-sm font-medium text-gray-500">Action</th>
                        </tr>
                    </thead>

                    <tbody className="bg-white divide-y divide-gray-200">
                        {users.map((user) => (
                            <tr key={user.email}>
                                <td className="px-6 py-4">{user.firstName}</td>
                                <td className="px-6 py-4">{user.lastName}</td>
                                <td className="px-6 py-4">{user.email}</td>
                                <td className="px-6 py-4">{user.role}</td>

                                <td className="px-6 py-4 text-center">
                                    {user.approved ? (
                                        <span className="px-2 py-1 rounded-full bg-green-100 text-green-800 text-xs font-semibold">
                                            Active
                                        </span>
                                    ) : (
                                        <span className="px-2 py-1 rounded-full bg-red-100 text-red-800 text-xs font-semibold">
                                            Pending
                                        </span>
                                    )}
                                </td>
                                {/* Action Column */}
                                <td className="px-6 py-4 text-center flex justify-center gap-2">

                                    {/* Approve button is only shows if not approved */}
                                    {!user.approved && (
                                        <button
                                            onClick={() => approveUser(user.email)}
                                            className="px-3 py-1 bg-green-500 hover:bg-green-600 text-white rounded font-medium text-sm"
                                        >
                                            Approve
                                        </button>
                                    )}

                                    {/* Decline button is always visible */}
                                    <button
                                        onClick={() => {
                                            declineUser(user.email);
                                            setUsers((prev) =>
                                                prev.map((u) =>
                                                    u.email === user.email ? { ...u, approved: false } : u
                                                )
                                            );
                                        }}
                                        className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded font-medium text-sm"
                                    >
                                        Decline
                                    </button>

                                    {/* Delete button */}
                                    <button
                                        onClick={() => deleteUser(user.email)}
                                        className="px-3 py-1 bg-gray-500 hover:bg-gray-600 text-white rounded font-medium text-sm"
                                    >
                                        Delete
                                    </button>
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
import { useState, useEffect } from "react";
import api from "../../api/axios";
import { toast } from "react-hot-toast";
export default function OrganizationManagment() {

    const [organizations, setOrganizations] = useState([]);
    const [loading, setLoading] = useState(true);

    //fetch organizations from backend
    const fetchOrganizations = async () => {
        try {
            const res = await api.get("/organizations/all", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }

            });
            setOrganizations(res.data);
        } catch (err) {
            toast.error("Failed to fetch organizations");
            console.log(err);
        } finally {
            setLoading(false);
        }
    }

    // Approve organization
    const updateStatus = async (id) => {
        try {
            await api.put(`/organizations/approve/${id}`, null, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
            toast.success("Organization approved");
            fetchOrganizations();
        } catch (err) {
            toast.error("Failed to approve organization");
            console.log(err);
        }
    };


    // Delete organization
    const deleteOrganization = async (id) => {
        try {
            await api.delete(`/organizations/${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
            toast.success("Organization deleted");
            fetchOrganizations();
        } catch (err) {
            toast.error("Failed to delete organization");
            console.log(err);
        }
    };

    useEffect(() => {
        fetchOrganizations();
    })

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-8xl mx-auto">
                <h1 className="text-2xl font-bold text-gray-900">Organizations</h1>

                <div className="mt-6 overflow-x-auto bg-white border rounded-2xl shadow-sm">
                    {loading ? (
                        <p className="p-6 text-gray-600">Loading...</p>
                    ) : organizations.length === 0 ? (
                        <p className="p-6 text-gray-600">No organizations found.</p>
                    ) : (

                        // Table
                        <table className="min-w-full table-auto">
                            <thead className="bg-gray-50">
                                <tr className="text-left">
                                    <th className="px-6 py-3 text-sm font-semibold text-gray-700">
                                        Name
                                    </th>
                                    <th className="px-6 py-3 text-sm font-semibold text-gray-700">
                                        Industry
                                    </th>
                                    <th className="px-6 py-3 text-sm font-semibold text-gray-700">
                                        Organization Size
                                    </th>
                                    <th className="px-6 py-3 text-sm font-semibold text-gray-700">
                                        Name
                                    </th>
                                    <th className="px-6 py-3 text-sm font-semibold text-gray-700">
                                        Owner Email
                                    </th>
                                    <th className="px-6 py-3 text-sm font-semibold text-gray-700">
                                        Phone Number
                                    </th>
                                    <th className="px-6 py-3 text-sm font-semibold text-gray-700">
                                        Status
                                    </th>
                                    <th className="px-6 py-3 text-sm font-semibold text-gray-700">
                                        Action
                                    </th>
                                </tr>
                            </thead>

                            {/* Table body */}
                            <tbody className="divide-y divide-gray-200">
                                {organizations.map((org) => (
                                    <tr
                                        key={org.id}
                                        className="hover:bg-gray-50"
                                    >
                                        <td className="px-6 py-4 text-gray-900">{org.name}</td>
                                        <td className="px-6 py-4 text-gray-700">{org.industry}</td>
                                        <td className="px-6 py-4 text-gray-700">{org.organizationSize}</td>
                                        <td className="px-6 py-4 text-gray-700">{org.ownerName}</td>
                                        <td className="px-6 py-4 text-gray-700">{org.ownerEmail}</td>
                                        <td className="px-6 py-4 text-gray-700">{org.phoneNumber}</td>
                                        <td className="px-6 py-4 text-gray-700">{org.approved}</td>
                                        <td className="px-6 py-4">
                                            {org.approved === true ? (
                                                <span className="px-2 py-1 text-xs rounded-lg bg-green-100 text-green-700">
                                                    Approved
                                                </span>
                                            ) : org.approved === false ? (
                                                <span className="px-2 py-1 text-xs rounded-lg bg-red-100 text-red-700">
                                                    Declined
                                                </span>
                                            ) : (
                                                <span className="px-2 py-1 text-xs rounded-lg bg-gray-100 text-gray-600">
                                                    Pending
                                                </span>
                                            )}
                                        </td>

                                        {/* Action buttons */}
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-2">
                                                <button
                                                    onClick={() => updateStatus(org.id)}
                                                    className="px-3 py-1.5 rounded-lg bg-green-600 text-white text-sm hover:bg-green-700"
                                                >
                                                    Approve
                                                </button>
                                                <button
                                                    onClick={() => deleteOrganization(org.id)}
                                                    className="px-3 py-1.5 rounded-lg bg-red-600 text-white text-sm hover:bg-red-700"
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </div >
    );

}
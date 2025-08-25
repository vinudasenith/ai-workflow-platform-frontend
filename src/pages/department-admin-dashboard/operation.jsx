import { useState, useEffect } from "react";
import api from "../../api/axios";
import { toast } from "react-hot-toast";
export default function Operations() {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [loading, setLoading] = useState(true);
    const [workflows, setWorkflows] = useState([]);

    //fetch all the workflows
    useEffect(() => {
        fetchWorkflows();
    }, [])

    const fetchWorkflows = async () => {
        try {
            const res = await api.get("/workflow/tenant/all", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            });
            setWorkflows(res.data);
        } catch (err) {
            toast.error("Failed to fetch workflows");
            console.log(err);
        } finally {
            setLoading(false);
        }

    }

    //create workflow
    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(name, description);
        api.post("/workflow/register", {
            name: name,
            description: description
        }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        }).then((res) => {
            toast.success("Workflow created successfully");
            setName('');
            setDescription('');
            fetchWorkflows();
        }).catch((err) => {
            toast.error("Something went wrong");
        })
    }

    //delete workflow
    const deleteWorkflow = async (id) => {
        try {
            await api.delete(`/workflow/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                });
            toast.success("Workflow deleted successfully");
            setWorkflows(workflows.filter((workflow) => workflow.id !== id));
        } catch (err) {
            toast.error("Something went wrong");

        }
    }


    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-5xl mx-auto space-y-10">

                {/* Page Header */}
                <h1 className="text-3xl font-bold text-gray-900">Workflow Management</h1>

                {/* Create Workflow Section */}
                <div className="bg-white shadow rounded-2xl p-6 space-y-6">
                    <h2 className="text-xl font-semibold text-gray-800">Create Workflow</h2>
                    <form onSubmit={handleOnSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                placeholder="Enter workflow name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="mt-1 block w-full rounded-lg border border-gray-300 p-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Description</label>
                            <textarea
                                placeholder="Enter workflow description"
                                rows={3}
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className="mt-1 block w-full rounded-lg border border-gray-300 p-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="px-4 py-2 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700"
                        >
                            Create Workflow
                        </button>
                    </form>
                </div>

                {/* Workflows List */}
                <div className="bg-white shadow rounded-2xl p-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Workflows List</h2>

                    {loading ? (
                        <p className="text-gray-500 text-center">Loading workflows...</p>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Name</th>
                                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Description</th>
                                        <th className="px-6 py-3 text-center text-sm font-medium text-gray-500">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {workflows.map((wf) => (
                                        <tr key={wf.id}>
                                            <td className="px-6 py-4">{wf.name}</td>
                                            <td className="px-6 py-4">{wf.description}</td>
                                            <td className="px-6 py-4 text-center">
                                                <button
                                                    onClick={() => deleteWorkflow(wf.id)}
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


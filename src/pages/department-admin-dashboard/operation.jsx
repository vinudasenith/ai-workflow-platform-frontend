import { useState } from "react";
import api from "../../api/axios";
import { toast } from "react-hot-toast";
export default function Operations() {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(name, description);
        api.post("/workflow/register", {
            name: name,
            description: description
        }).then((res) => {
            toast.success("Workflow created successfully");
        }).catch((err) => {
            toast.error("Something went wrong");
        })
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
            </div>
        </div>
    );
}


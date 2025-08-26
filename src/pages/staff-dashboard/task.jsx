import { useState, useEffect } from 'react'
import api from '../../api/axios'
import { toast } from "react-hot-toast";

export default function Task() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [tasks, setTasks] = useState([]);

    //handle form submission for creating task
    function handleOnSubmit(e) {
        e.preventDefault();
        console.log(name, description);
        api.post("/tasks/register", {
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
            fetchTasks();
        }).catch((err) => {
            toast.error("Something went wrong");
        })
    }

    //fetch all the tasks
    const fetchTasks = async () => {
        try {
            const res = await api.get("/tasks/tenant/all", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            })
            setTasks(res.data);
        } catch (err) {
            console.error(err);
            toast.error("Something went wrong");
        }
    }

    useEffect(() => {
        fetchTasks();
    }, []);

    // Delete task by ID
    const handleDelete = async (id) => {
        try {
            await api.delete(`/tasks/delete/${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            });
            toast.success("Task deleted successfully");
            fetchTasks();
        } catch (err) {
            console.error(err);
            toast.error("Failed to delete task");
        }
    };




    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-50 flex flex-col items-center py-12 px-4">

            {/* Page Header */}
            <div className="max-w-3xl w-full text-center mb-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-2">Create New Task</h1>
                <p className="text-gray-600 text-sm">
                    Fill in the details below to create a new task for your department. Make sure the title and description are clear so everyone understands the task.
                </p>
            </div>

            {/* Task Form Card */}
            <div className="w-full max-w-xl bg-white p-8 rounded-2xl shadow-xl">
                <form onSubmit={handleOnSubmit} className="space-y-6">
                    {/* Task Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Task Name</label>
                        <input
                            type="text"
                            placeholder="Enter task name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
                        />
                    </div>

                    {/* Task Description */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                        <textarea
                            placeholder="Enter task description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 resize-none text-gray-900"
                            rows="5"
                        ></textarea>
                    </div>

                    {/* Optional Instruction */}
                    <p className="text-gray-500 text-sm">
                        Tip: Keep tasks concise and assign deadlines clearly to help your team stay on track.
                    </p>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 transition-colors font-semibold text-lg"
                    >
                        Create Task
                    </button>
                </form>
            </div>


            {/* Task List Section */}
            <div className="w-full max-w-3xl mt-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Existing Tasks
                </h2>
                {tasks.length === 0 ? (
                    <p className="text-gray-500">No tasks created yet.</p>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200 border rounded-lg">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Name</th>
                                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Description</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {tasks.map((task) => (
                                    <tr key={task.id}>
                                        <td className="px-6 py-4 text-gray-900">{task.name}</td>
                                        <td className="px-6 py-4 text-gray-600">{task.description}</td>
                                        <td className="px-6 py-4">
                                            <button
                                                onClick={() => handleDelete(task.id)}
                                                className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition-colors"
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
    );
}

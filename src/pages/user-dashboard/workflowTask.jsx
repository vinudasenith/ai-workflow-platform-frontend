import { useEffect, useState } from "react";
import api from "../../api/axios";
import { toast } from "react-toastify";

export default function WorkflowTask() {
    // state
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedFiles, setSelectedFiles] = useState({});

    // fetch tasks from backend
    const fetchTasks = async () => {
        try {
            const res = await api.get("/tasks/tenant/all", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
            setTasks(res.data);
        } catch (err) {
            toast.error("Failed to fetch tasks");
            console.log(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    // handle file selection
    const handleFileChange = (e, taskId) => {
        setSelectedFiles({
            ...selectedFiles,
            [taskId]: e.target.files[0],
        });
    };

    // handle file upload
    const handleUpload = async (taskId) => {
        const file = selectedFiles[taskId];
        if (!file) {
            toast.error("No file selected");
            return;
        }

        const formData = new FormData();
        formData.append("file", file);

        // upload file
        try {
            await api.post(`/tasks/${taskId}/upload`, formData, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                    "Content-Type": "multipart/form-data",
                },
            });
            toast.success("File uploaded successfully ");
            fetchTasks();
        } catch (err) {
            toast.error("Something went wrong ");
        }
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold text-indigo-600 mb-6">Workflow Tasks</h1>

            {loading ? (
                <p>Loading...</p>
            ) : tasks.length === 0 ? (
                <p>No tasks found.</p>
            ) : (
                <ul className="space-y-4">
                    {tasks.map((task) => (
                        <li
                            key={task._id || task.id}
                            className="flex justify-between items-start p-6 border rounded-lg bg-white shadow-sm"
                        >
                            <div className="w-2/3">
                                <h2 className="text-lg font-semibold text-gray-800">{task.name}</h2>
                                <p className="text-gray-600 mb-2">{task.description || "No description"}</p>
                            </div>

                            {/* Upload File */}
                            <div className="ml-6 w-1/3 border-l pl-4">
                                <h3 className="text-sm font-medium text-gray-700 mb-2">Upload File</h3>
                                <input
                                    type="file"
                                    className="mb-2 block w-full text-sm text-gray-500
                                    file:mr-3 file:py-2 file:px-3
                                    file:rounded-full file:border-0
                                    file:text-sm file:font-semibold
                                    file:bg-indigo-50 file:text-indigo-600
                                    hover:file:bg-indigo-100"
                                    onChange={(e) => handleFileChange(e, task.id)}
                                />
                                <button
                                    onClick={() => handleUpload(task.id)}
                                    className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
                                >
                                    Upload
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

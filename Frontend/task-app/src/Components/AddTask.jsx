import React from "react";

export default function AddTaskModal({
  formData,
  setFormData,
  closeModal,
  saveTask,
}) {
  return (

    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-40" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-lg">
        <h3 id="modal-title" className="text-lg font-semibold mb-4">Add New Task</h3>

        {/* task title input vangurom  */}
        <input
          type="text"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          placeholder="Task Title"
          className="border border-gray-300 rounded p-2 w-full mb-3 focus:outline-indigo-500"
          aria-label="Task Title"
        />

        {/* taask description  */}
        <textarea
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
          placeholder="Description"
          className="border border-gray-300 rounded p-2 w-full mb-3 focus:outline-indigo-500"
          rows={4}
          aria-label="Task Description"
        />

        {/* due date input kekurom */}
        <input
          type="date"
          value={formData.dueDate}
          onChange={(e) =>
            setFormData({ ...formData, dueDate: e.target.value })
          }
          className="border border-gray-300 rounded p-2 w-full mb-3 focus:outline-indigo-500"
          aria-label="Due Date"
        />

        {/* priority select panrom */}
        <select
          value={formData.priority}
          onChange={(e) =>
            setFormData({ ...formData, priority: e.target.value })
          }
          className="border border-gray-300 rounded p-2 w-full mb-5 focus:outline-indigo-500"
          aria-label="Task Priority"
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>

        {/* action buttons */}
        <div className="flex justify-end gap-4">
          <button
            onClick={closeModal}
            className="border border-gray-400 rounded px-4 py-2 hover:bg-gray-100"
            aria-label="Cancel"
            type="button"
          >
            Cancel
          </button>
          <button
            onClick={saveTask}
            className="bg-indigo-600 text-white rounded px-4 py-2 hover:bg-indigo-700"
            aria-label="Save Task"
            type="button"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

import React from 'react'

const priorityColor = (priority) => {
  if (priority === "High") return "bg-red-100 text-red-700 ";
  if (priority === "Medium") return "bg-yellow-100 text-yellow-700";
  return "bg-green-100 text-green-700";
};

const formatDate = (date) =>
  new Date(date + "T00:00:00").toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
  });

const TaskItem = ({ task, updateTask, requestDelete }) => {
  return (
<li className="flex items-start gap-3">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => updateTask(task.id, { completed: !task.completed })}
      />
      <div className="flex-1">
        <div className="flex justify-between">
          <div>
            <div className="font-semibold">{task.title}</div>
            <div className="text-xs text-gray-500">{task.description}</div>
          </div>
          <div
            className={`px-2 py-1 rounded text-xs ${priorityColor(
              task.priority
            )}`}
          >
            {task.priority}
          </div>
        </div>
        <div className="flex gap-3 mt-1 text-xs text-gray-500">
          <span>{formatDate(task.dueDate)}</span>
          <button
            onClick={() => requestDelete(task.id)}
            className="text-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    </li>
  )
}

export default TaskItem
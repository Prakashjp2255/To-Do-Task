import React from 'react'
import TaskItem from './TaskItem'

const Tasklist = ({categorized, updateTask, requestDelete}) => {
  return (
    <div className="space-y-6">
      {Object.entries(categorized).map(([category, list]) => (
        <div key={category} className="bg-white rounded-2xl p-4 shadow-sm">
          <h2 className="font-medium text-lg mb-4">{category}</h2>
          {list.length === 0 ? (
            <p className="text-sm text-gray-500">No tasks</p>
          ) : (
            <ul className="space-y-3">
              {list.map((task) => (
                <TaskItem
                  key={task.id}
                  task={task}
                  updateTask={updateTask}
                  requestDelete={requestDelete}
                />
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  )
}

export default Tasklist
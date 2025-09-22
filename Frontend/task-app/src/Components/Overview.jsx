import React from 'react'

const Overview = ( {categorized, tasks, clearCompleted}) => {
  return (
     <div className="bg-white rounded-2xl p-4 ">
      <h3 className="font-medium mb-3">Quick Overview</h3>
      <div className="grid grid-cols-3 gap-3 text-sm mb-3">
        <div className="p-3 bg-gray-50 rounded-lg text-center">
          <div className="font-semibold">{categorized.Today.length}</div>
          <div className="text-gray-500">Today</div>
        </div>
        <div className="p-3 bg-gray-50 rounded-lg text-center">
          <div className="font-semibold">{categorized.Upcoming.length}</div>
          <div className="text-gray-500">Upcoming</div>
        </div>
        <div className="p-3 bg-gray-50 rounded-lg text-center">
          <div className="font-semibold">{categorized.Overdue.length}</div>
          <div className="text-gray-500">Overdue</div>
        </div>
      </div>
      <button onClick={clearCompleted} className="text-sm text-red-600">
        Clear Completed
      </button>
      <div className="text-xs text-gray-500 mt-3 text-center">
        Total Tasks: {tasks.length}
      </div>
    </div>
  )
}

export default Overview
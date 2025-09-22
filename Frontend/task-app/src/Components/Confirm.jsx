import React from 'react'

const Confirm = ({message, onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-6 max-w-sm w-full">
        <p className="mb-4">{message}</p>
        <div className="flex justify-end gap-3">
          <button onClick={onCancel} className="border px-3 py-1">
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="bg-red-600 text-white px-3 py-1 rounded"
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  )
}

export default Confirm

import React from "react";

export default function PreviewModal({ open, onClose, onConfirm, title, data }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-lg">
        <h2 className="text-xl font-semibold mb-4">{title || "Preview"}</h2>

        <div className="space-y-2 max-h-80 overflow-y-auto">
          {Object.entries(data).map(([key, value]) => (
            <div key={key} className="flex justify-between border-b pb-1">
              <span className="font-medium capitalize">{key}</span>
              <span className="text-gray-700">{String(value)}</span>
            </div>
          ))}
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <button
            className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
            onClick={onClose}
          >
            Edit
          </button>
          <button
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            onClick={onConfirm}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

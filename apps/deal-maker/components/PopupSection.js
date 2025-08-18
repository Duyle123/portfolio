import React, { useState } from 'react';

export default function PopupSection({ title, summary, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mb-4">
      <div className="flex justify-between items-center p-4 bg-gray-200 rounded">
        <div className="flex flex-col sm:flex-row sm:items-center">
          <span className="font-semibold mr-2">{title}</span>
          {summary && <span className="text-sm text-gray-600">{summary}</span>}
        </div>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="px-3 py-1 bg-blue-500 text-white rounded"
        >
          Expand
        </button>
      </div>
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg max-h-[90vh] overflow-y-auto w-[90%] max-w-2xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">{title}</h2>
              <button type="button" onClick={() => setOpen(false)} className="text-gray-600">
                ✕
              </button>
            </div>
            {children}
          </div>
        </div>
      )}
    </div>
  );
}

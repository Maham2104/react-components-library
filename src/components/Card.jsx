import React from "react";

export default function Card({ title, children, footer }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 mb-6 max-w-lg mx-auto">
      {title && (
        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
          {title}
        </h2>
      )}
      <div>{children}</div>
      {footer && (
        <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
          {footer}
        </div>
      )}
    </div>
  );
}

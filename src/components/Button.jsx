import React from "react";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  icon: Icon,
  loading = false,
  ...props
}) {
  const base =
    "inline-flex items-center justify-center font-medium rounded-2xl focus:outline-none transition-all";

  const variants = {
    primary:
      "bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:opacity-90",
    secondary:
      "bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600",
    outline:
      "border border-gray-300 text-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-700",
    ghost:
      "text-blue-600 hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-gray-700",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-5 py-3 text-lg",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} disabled:opacity-50`}
      disabled={loading}
      {...props}
    >
      {loading ? (
        // Fallback custom spinner
        <span
          className="mr-2 h-5 w-5 border-2 border-white border-t-transparent rounded-full"
          style={{
            display: "inline-block",
            animation: "spin 1s linear infinite",
          }}
        ></span>
      ) : Icon ? (
        <Icon className="mr-2 h-5 w-5" />
      ) : null}
      {children}
    </button>
  );
}

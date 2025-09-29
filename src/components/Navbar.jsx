import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-gray-800 dark:text-gray-200">
        ⚡ My UI Library
      </h1>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
      >
        {darkMode ? (
          <Sun className="h-5 w-5 text-yellow-400" />
        ) : (
          <Moon className="h-5 w-5 text-gray-800" />
        )}
      </button>
    </nav>
  );
}

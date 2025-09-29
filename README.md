📘 React Components Library

📌 Project Description
This project is a React Components Library built using React, TailwindCSS, Framer Motion, and Lucide Icons.
It includes reusable, customizable, and responsive UI components such as:

🌙 Navbar with Dark Mode toggle
🎨 Multiple Button variants (primary, secondary, outline, ghost) with loading state
🧩 Card component with header, body, and footer
🌀 Modal component with smooth animations
🔄 Simulated API call example using a Loading Button

The goal is to provide ready-to-use, styled components that can be reused across applications.

⚙️ Installation Instructions

- Clone the repository
git clone https://github.com/Maham2104/react-components-library.git
cd react-components-library

- Install dependencies
npm install

- Run the development server
npm run dev

- Open your browser at 👉 http://localhost:5173

📖 Usage Guidelines

Here’s an example of how to use the components inside App.jsx:

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Button from "./components/Button";
import Card from "./components/Card";
import Modal from "./components/Modal";
import { Plus } from "lucide-react";
export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleFakeRequest = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("✅ Task Completed!");
    }, 2000);
  };
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Navbar with dark mode toggle */}
      <Navbar />
      <div className="p-8">
        {/* Card Component */}
        <Card title="Demo Card" footer="Card Footer">
          <p>This is a reusable card component.</p>
          <Button variant="primary" icon={Plus} onClick={() => setIsOpen(true)}>
            Open Modal
          </Button>
        </Card>
        {/* Buttons Section */}
        <div className="mt-6 flex gap-4 flex-wrap justify-center">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          {/* Loading simulation button */}
          <Button variant="primary" loading={loading} onClick={handleFakeRequest}>
            {loading ? "Processing..." : "Start Task"}
          </Button>
        </div>
        {/* Modal Component */}
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <h2 className="text-xl font-bold mb-2">Modal Title</h2>
          <p>This is a modal with smooth animation.</p>
        </Modal>
      </div>
    </div>
  );

  📜 License

MIT License © 2025 Maham

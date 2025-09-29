import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Button from "./components/Button";
import Card from "./components/Card";
import Modal from "./components/Modal";
import { Plus } from "lucide-react";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  // Fake API request simulation
  const handleFakeRequest = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("✅ Task Completed!");
    }, 2000); // 2 seconds loading
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Navbar */}
      <Navbar />

      <div className="p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">
          🚀 Advanced React Components
        </h1>

        {/* Card Example */}
        <Card title="Interactive Card" footer="Card footer">
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Here’s an advanced card with dark mode support.
          </p>
          <Button variant="primary" icon={Plus} onClick={() => setIsOpen(true)}>
            Open Modal
          </Button>
        </Card>

        {/* Button Variants */}
        <div className="mt-6 flex gap-4 flex-wrap justify-center">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>

          {/* Loading button with real action */}
          <Button variant="primary" loading={loading} onClick={handleFakeRequest}>
            {loading ? "Processing..." : "Start Task"}
          </Button>
        </div>

        {/* Modal */}
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <h2 className="text-xl font-bold mb-2">Modal Title</h2>
          <p>This is a modal with smooth animation.</p>
        </Modal>
      </div>
    </div>
  );
}

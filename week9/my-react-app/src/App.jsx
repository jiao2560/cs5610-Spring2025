import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import TasksList from "./components/TasksList";

export default function App() {
  const [showForm, setShowForm] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true); // ✅ Track loading state

  // Fetch tasks from fake server when component mounts
  useEffect(() => {
    async function fetchData() {
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate delay

      setLoading(true); // ✅ Start loading
      try {
        const response = await fetch("http://localhost:5001/tasks");

        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status}`);
        }

        const data = await response.json();
        setTasks(data);
      } catch (error) {
        console.error("Fetch Error:", error.message);
      } finally {
        setLoading(false); // ✅ Stop loading after fetch
      }
    }

    fetchData();
  }, []);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="app-container">
      <Header onToggleForm={toggleForm} showForm={showForm} />
      {showForm && <AddTask setTasks={setTasks} tasks={tasks} />}

      {/* ✅ Conditional Rendering: Show "Loading..." while fetching */}
      {loading ? (
        <p className="loading-message">Loading...</p>
      ) : (
        <TasksList tasks={tasks} setTasks={setTasks} />
      )}
    </div>
  );
}

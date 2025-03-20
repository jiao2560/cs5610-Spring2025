import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import TasksList from "./components/TasksList";

export default function App() {
  const [showForm, setShowForm] = useState(false);
  const [tasks, setTasks] = useState([]); // Moved tasks state from TasksList.jsx

  // Fetch tasks from fake server when component mounts
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:5000/tasks");

        if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json(); // Converts response to JavaScript object
        setTasks(data); // Update state with fetched tasks
      } catch (error) {
        console.error("Failed to fetch tasks:", error.message);
      }
    }

    fetchData();
  }, []); // Runs only once when component mounts

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="app-container">
      <Header onToggleForm={toggleForm} showForm={showForm} />
      {showForm && <AddTask setTasks={setTasks} tasks={tasks} />}
      <TasksList tasks={tasks} setTasks={setTasks} /> {/* Pass tasks as a prop */}
    </div>
  );
}

import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import TasksList from "./components/TasksList";

export default function App() {
  const [showForm, setShowForm] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch tasks from fake server when component mounts
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
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
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  // ✅ DELETE function to remove task from server and UI
  const deleteTask = async (id) => {
    try {
      const response = await fetch(`http://localhost:5001/tasks/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error(`Failed to delete task with id ${id}`);
      }

      console.log(`Task ${id} deleted successfully`);

      // ✅ Update state to remove deleted task from UI
      setTasks(tasks.filter(task => task.id !== id));
    } catch (error) {
      console.error("Delete Error:", error.message);
    }
  };

  return (
    <div className="app-container">
      <Header onToggleForm={toggleForm} showForm={showForm} />
      {showForm && <AddTask setTasks={setTasks} tasks={tasks} />}
      {loading ? (
        <p className="loading-message">Loading...</p>
      ) : (
        <TasksList tasks={tasks} setTasks={setTasks} onDelete={deleteTask} />
      )}
    </div>
  );
}

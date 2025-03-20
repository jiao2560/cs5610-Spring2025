import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import TasksList from "./components/TasksList";

export default function App() {
  const [showForm, setShowForm] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch tasks from fake server when component mounts
  useEffect(() => {
    async function fetchData() {
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate delay

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

  // ✅ Function to toggle form visibility
  const toggleForm = () => {
    setShowForm(!showForm);
  };

  // ✅ Function to DELETE task from server and update UI
  const deleteTask = async (id) => {
    try {
      const response = await fetch(`http://localhost:5001/tasks/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error(`Failed to delete task with id ${id}`);
      }

      console.log(`Task ${id} deleted successfully`);

      // ✅ Remove task from UI
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (error) {
      console.error("Delete Error:", error.message);
    }
  };

  // ✅ Function to ADD a new task (POST request)
  const addTask = async (newTask) => {
    try {
      const response = await fetch("http://localhost:5001/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTask),
      });

      if (!response.ok) {
        throw new Error("Failed to add task");
      }

      const addedTask = await response.json();

      // ✅ Update UI with new task
      setTasks([...tasks, addedTask]);
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  return (
    <div className="app-container">
      <Header onToggleForm={toggleForm} showForm={showForm} />
      {showForm && <AddTask onAddTask={addTask} />}
      {loading ? (
        <p className="loading-message">Loading...</p>
      ) : (
        <TasksList tasks={tasks} onDelete={deleteTask} />
      )}
    </div>
  );
}

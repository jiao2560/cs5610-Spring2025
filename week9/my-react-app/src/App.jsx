import React, { useState } from "react";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import TasksList from "./components/TasksList";

export default function App() {
  const [showForm, setShowForm] = useState(false);
  const [tasks, setTasks] = useState([
    { id: 1, title: "Review session 9 material", date: "June 4th at 1 pm" },
    { id: 2, title: "Do quiz 9", date: "June 4th at 6 pm" },
    { id: 3, title: "Work on assignment 2", date: "June 5th at 8 am" },
  ]);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="app-container">
      <Header onToggleForm={toggleForm} showForm={showForm} />
      {showForm && <AddTask setTasks={setTasks} tasks={tasks} />} {/* Pass setTasks */}
      <TasksList tasks={tasks} setTasks={setTasks} /> {/* Pass tasks and setTasks */}
    </div>
  );
}


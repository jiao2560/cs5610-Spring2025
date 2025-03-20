import React, { useState } from "react";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import TasksList from "./components/TasksList";

export default function App() {
  const [showForm, setShowForm] = useState(false); // Track form visibility

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="app-container">
      <Header onToggleForm={toggleForm} showForm={showForm} />
      {showForm && <AddTask />} {/* Show form only if showForm is true */}
      <TasksList />
    </div>
  );
}

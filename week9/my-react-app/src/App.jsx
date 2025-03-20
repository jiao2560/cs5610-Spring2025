import React from "react";
import Header from "./components/Header";
import TasksList from "./components/TasksList"; // Import TasksList component
import AddTask from "./components/AddTask"; // Import AddTask component

export default function App() {
  const appName = "My Awesome App";
  const version = 2;

  return (
    <div className="app-container">
      <Header myAppName={appName} version={version} />
      <AddTask /> {/* Render AddTask form below Header */}
      <TasksList /> {/* Render the task list */}
    </div>
  );
}

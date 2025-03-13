import React from "react";
import Header from "./components/Header";
import TasksList from "./components/TasksList"; // Import TasksList component

export default function App() {
  const appName = "My Awesome App";
  const version = 2;


  return (
    <div className="app-container">
      <Header myAppName={appName} version={version} />
      <TasksList /> {/* Use the component */}
    </div>
  );
}

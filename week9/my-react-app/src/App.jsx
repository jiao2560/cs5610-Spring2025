import React from "react";
import Header from "./components/Header";

export default function App() {
  const appName = "My Awesome App";
  const version = 2;

  const tasks = [
    { id: 1, title: "Review session 9 material" },
    { id: 2, title: "Do quiz 9" },
    { id: 3, title: "Work on assignment 2" },
  ];

  return (
    <div className="app-container">
      <Header myAppName={appName} version={version} />

      {/* Render List of Tasks */}
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className="task-item">{task.title}</li>
        ))}
      </ul>
    </div>
  );
}

import React from "react";

export default function Header({ myAppName, version }) {
  return (
    <header className="header">
      <h1>Welcome to {myAppName} (v{version})</h1>
      <button className="add-task-btn">Add A Task</button>
    </header>
  );
}


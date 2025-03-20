import React from "react";

export default function Header({ onToggleForm, showForm }) {
  return (
    <header className="header">
      <h1>Welcome to My App</h1>
      <button onClick={onToggleForm}>
        {showForm ? "Close Form" : "Add a Task"}
      </button>
    </header>
  );
}

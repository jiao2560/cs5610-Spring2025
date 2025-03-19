import React from "react";
import { FaTrash } from "react-icons/fa"; // Import trash icon

export default function Task({ task }) {
  return (
    <li className="task-item">
      <div className="task-content">
        <div className="task-text">
          <p className="task-title">{task.title}</p>
          <p className="task-date">{task.date}</p>
        </div>
        <FaTrash className="delete-icon" />
      </div>
    </li>
  );
}

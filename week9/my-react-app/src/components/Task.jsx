import React from "react";
import { FaTrash } from "react-icons/fa"; // Import trash icon

export default function Task({ task, onDelete }) {
  return (
    <li className="task-item">
      <div className="task-content">
        <div className="task-text">
          <p className="task-title">{task.title}</p>
          <p className="task-date">{task.date}</p>
        </div>
        <FaTrash className="delete-icon" onClick={() => onDelete(task.id)} />
      </div>
    </li>
  );
}

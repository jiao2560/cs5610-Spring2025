import { FaTrash } from "react-icons/fa";

export default function Task({ task, onDelete }) {
  return (
    <li className="task">
      <div className="task-content">
        <div>
          <strong>{task.title}</strong>
          <p className="task-date">{task.date}</p>
        </div>
        <FaTrash className="delete-icon" onClick={() => onDelete(task.id)} />
      </div>
    </li>
  );
}

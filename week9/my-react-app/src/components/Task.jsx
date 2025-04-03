import PropTypes from "prop-types";
import { FaTrash } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Task({ task, onDelete }) {
  return (
    <li className="task-item">
      <div className="task-container">
        <div className="task-content">
          <NavLink to={`/tasks/${task.id}`}>
            <strong>{task.title}</strong>
          </NavLink>
          <p>{task.date}</p>
        </div>
        <FaTrash className="delete-icon" onClick={() => onDelete(task.id)} />
      </div>
    </li>
  );
}

// Define PropTypes
Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Task;
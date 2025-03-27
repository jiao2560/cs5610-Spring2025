import PropTypes from "prop-types";
import Task from "./Task";

function TasksList({ tasks, onDelete }) {
  return (
    <ul>
      {tasks.length > 0 ? (
        tasks.map((task) => <Task key={task.id} task={task} onDelete={onDelete} />)
      ) : (
        <li><strong>No Tasks Left</strong></li>
      )}
    </ul>
  );
}

// Define PropTypes
TasksList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default TasksList;

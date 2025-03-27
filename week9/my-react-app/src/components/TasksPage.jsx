import TasksList from "./TasksList";
import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";

function TasksPage({ tasks, onDelete, loading }) {
  return (
    <>
      {loading ? <p>Loading...</p> : <TasksList tasks={tasks} onDelete={onDelete} />}
      <Outlet />
    </>
  );
}

TasksPage.propTypes = {
  tasks: PropTypes.array,
  onDelete: PropTypes.func,
  loading: PropTypes.bool,
};

export default TasksPage;
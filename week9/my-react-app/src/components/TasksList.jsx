import React from "react";
import Task from "./Task"; // Import Task component

export default function TasksList({ tasks, setTasks }) { // Receive tasks as a prop
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <ul className="task-list">
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <Task key={task.id} task={task} onDelete={deleteTask} />
        ))
      ) : (
        <li className="no-tasks">No Tasks Left</li>
      )}
    </ul>
  );
}

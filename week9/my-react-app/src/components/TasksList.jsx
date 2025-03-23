import React from "react";
import Task from "./Task";

export default function TasksList({ tasks, onDelete }) { // Receive onDelete prop
  return (
    <ul className="task-list">
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <Task key={task.id} task={task} onDelete={onDelete} /> // Pass delete function
        ))
      ) : (
        <li className="no-tasks">No Tasks Left</li>
      )}
    </ul>
  );
}

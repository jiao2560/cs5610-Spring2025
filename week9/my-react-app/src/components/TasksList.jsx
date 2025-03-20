import React from "react";
import Task from "./Task";

export default function TasksList({ tasks, setTasks }) {
  console.log("TasksList received tasks:", tasks); // ✅ Debugging

  return (
    <ul className="task-list">
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <Task key={task.id} task={task} onDelete={() => setTasks(tasks.filter(t => t.id !== task.id))} />
        ))
      ) : (
        <li className="no-tasks">No Tasks Left</li>
      )}
    </ul>
  );
}


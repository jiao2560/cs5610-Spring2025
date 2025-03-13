import React, { useState } from "react";

export default function TasksList() {
  // Declare a state variable for tasks
  const [tasks, setTasks] = useState([
    { id: 1, title: "Review session 9 material" },
    { id: 2, title: "Do quiz 9" },
    { id: 3, title: "Work on assignment 2" },
  ]);

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task.id} className="task-item">{task.title}</li>
      ))}
    </ul>
  );
}

import React, { useState } from "react";
import Task from "./Task"; // Import Task component

export default function TasksList() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Review session 9 material", date: "June 4th at 1 pm" },
    { id: 2, title: "Do quiz 9", date: "June 4th at 6 pm" },
    { id: 3, title: "Work on assignment 2", date: "June 5th at 8 am" },
  ]);

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <Task key={task.id} task={task} /> // Use Task component with key prop
      ))}
    </ul>
  );
}

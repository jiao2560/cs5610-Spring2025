import React, { useState } from "react";
import Task from "./Task"; // Import Task component

export default function TasksList() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Review session 9 material", date: "June 4th at 1 pm" },
    { id: 2, title: "Do quiz 9", date: "June 4th at 6 pm" },
    { id: 3, title: "Work on assignment 2", date: "June 5th at 8 am" },
  ]);

  // Function to delete a task
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

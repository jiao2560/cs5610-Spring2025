import React, { useState } from "react";

export default function AddTask({ setTasks, tasks }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const handleTitleChange = (event) => setTitle(event.target.value);
  const handleDateChange = (event) => setDate(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents page refresh

    if (title.trim() === "" || date.trim() === "") return; // Prevent adding empty tasks

    const newTask = {
      id: tasks.length + 1, // Generate a simple ID
      title,
      date,
    };

    setTasks([...tasks, newTask]); // Update tasks with new task
    console.log("New Task Added:", newTask);

    setTitle(""); // Reset input fields
    setDate("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-control">
        <label>Title</label>
        <input type="text" value={title} onChange={handleTitleChange} />
      </div>
      <div className="form-control">
        <label>Date</label>
        <input type="text" value={date} onChange={handleDateChange} />
      </div>
      <button type="submit">Save</button>
    </form>
  );
}

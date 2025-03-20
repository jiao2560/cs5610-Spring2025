import React, { useState } from "react";

export default function AddTask() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const handleTitleChange = (event) => setTitle(event.target.value);
  const handleDateChange = (event) => setDate(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents page refresh

    const newTask = { title, date };
    console.log("New Task:", newTask);

    // Reset inputs after submitting
    setTitle("");
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

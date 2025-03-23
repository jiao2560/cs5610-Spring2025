import React, { useState } from "react";

export default function AddTask({ onAddTask }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault(); // ✅ Prevents page refresh

    if (!title.trim() || !date.trim()) {
      alert("Please fill in both fields.");
      return;
    }

    const newTask = { title, date };

    onAddTask(newTask); // ✅ Send data to server via `App.jsx`

    // ✅ Reset form fields after submission
    setTitle("");
    setDate("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-control">
        <label>Title</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div className="form-control">
        <label>Date</label>
        <input type="text" value={date} onChange={(e) => setDate(e.target.value)} />
      </div>
      <button type="submit">Save</button>
    </form>
  );
}

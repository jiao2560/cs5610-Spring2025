import React, { useState } from "react";

export default function AddTask() {
  const [title, setTitle] = useState(""); // Track title input
  const [date, setDate] = useState(""); // Track date input

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  return (
    <form>
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

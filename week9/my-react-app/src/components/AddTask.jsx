import { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

function AddTask({ onAddTask }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!title || !date) {
      alert("Please fill in both fields!");
      return;
    }

    const newTask = { title, date };

    // ✅ Pass callback to handle navigation
    onAddTask(newTask, (newId) => {
      navigate(`/tasks/${newId}`);
    });

    setTitle("");
    setDate("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-control">
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Date</label>
        <input
          type="text"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <button type="submit">Save</button>
    </form>
  );
}

// Define PropTypes
AddTask.propTypes = {
  onAddTask: PropTypes.func.isRequired,
};

export default AddTask;
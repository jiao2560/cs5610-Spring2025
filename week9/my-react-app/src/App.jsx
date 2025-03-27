import { useState, useEffect } from "react";
import { Routes, Route, Link, useLocation, useNavigate } from "react-router";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import TaskDetails from "./components/TaskDetails";
import TasksPage from "./components/TasksPage";

function App() {
  // const appName = "Welcome to My App";

  // State for tasks
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false); // Track form visibility

  // Fetch tasks from JSON Server
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:5001/tasks");

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setTasks(data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  // Function to toggle form visibility
  const toggleForm = () => {
    setShowForm((prev) => !prev);
  };

  // Function to add a new task
  const addTask = async (newTask, onSuccess) => {
    try {
      const response = await fetch("http://localhost:5001/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTask),
      });

      if (!response.ok) {
        throw new Error(`Failed to add task. Status: ${response.status}`);
      }

      const data = await response.json();
      setTasks((prevTasks) => [...prevTasks, data]); // Update UI
      setShowForm(false); // Hide form

      // ✅ Trigger navigation with new task ID
      if (onSuccess) {
        onSuccess(data.id);
      }
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  // Function to delete a task
  const deleteTask = async (id) => {
    try {
      const response = await fetch(`http://localhost:5001/tasks/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error(`Failed to delete task. Status: ${response.status}`);
      }
      setTasks((prev) => prev.filter((task) => task.id !== id));
      if (location.pathname === `/tasks/${id}`) {
        navigate("/tasks");
      }
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };
  const navigate = useNavigate();
  const location = useLocation();

  const showHeader = location.pathname === "/";

  return (
    <div className="app-container">
      {/* Always show navigation */}
      <nav>
        <Link to="/">Home</Link> <Link to="/tasks">Tasks</Link>
      </nav>

      {/* Show header only for valid routes */}
      {showHeader && (
        <Header
          appName="Welcome to My App"
          showForm={showForm}
          onToggleForm={toggleForm}
        />
      )}

      <Routes>
        <Route
          path="/"
          element={showForm ? <AddTask onAddTask={addTask} /> : null}
        />
        <Route
          path="/tasks"
          element={
            <TasksPage tasks={tasks} onDelete={deleteTask} loading={loading} />
          }
        >
          <Route path=":taskId" element={<TaskDetails />} />
        </Route>
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
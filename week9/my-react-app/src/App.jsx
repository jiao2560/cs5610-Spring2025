import { useState, useEffect } from "react";
import { Routes, Route, Link, useLocation, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import TaskDetails from "./components/TaskDetails";
import TasksPage from "./components/TasksPage";
import AuthenticationButton from "./components/AuthenticationButton";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "./components/Profile";

function App() {
  const { isAuthenticated } = useAuth0();

  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);

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

  const toggleForm = () => {
    setShowForm((prev) => !prev);
  };

  const fetchTasks = async () => {
    try {
      const response = await fetch("http://localhost:5001/tasks");
      if (!response.ok) throw new Error("Fetch failed");
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const addTask = async (newTask, onSuccess) => {
    try {
      const response = await fetch("http://localhost:5001/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTask),
      });

      if (!response.ok) throw new Error("Add failed");

      const data = await response.json();
      await fetchTasks();
      setShowForm(false);
      if (onSuccess) onSuccess(data.id);
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

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
        <Link to="/">Home</Link> <Link to="/tasks">Tasks</Link><Link to="/profile">Profile</Link> {/* ✅ Add this */}
      </nav>

      {/* Show login button if not authenticated */}
      <AuthenticationButton />


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
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;

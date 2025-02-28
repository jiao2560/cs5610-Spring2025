const express = require("express");
const router = express.Router();
const axios = require("axios"); // Import axios
const { ObjectId } = require("mongodb");
const { getAllTasks, addToDB, findOneTask } = require("../db");

// Route for /tasks - Fetch tasks from JSONPlaceholder
router.get("/newtask", (req, res) => {
  res.render("newtask"); // Render the Pug form
});

router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    addToDB(req.body);
    res.redirect("/tasks");
  } catch (err) {
    console.log("Post Handler", err);
  }
});

// Route to fetch all tasks from MongoDB and render a list
router.get("/", async (req, res) => {
    try {
      const tasks = await getAllTasks(); // Fetch tasks from database

      // Render the "tasks" template, passing tasks to it
      res.render("tasks", { tasks });
    } catch (error) {
      console.error("Error fetching tasks:", error);
      res.status(500).send("Error retrieving tasks.");
    }
  });

router.get("/", (req, res) => {
  axios
    .get("https://jsonplaceholder.typicode.com/todos")
    .then((response) => {
      res.json(response.data); // Send the fetched JSON data to the client
    })
    .catch((error) => {
      console.error("Error fetching tasks:", error);
      res.status(500).json({ error: "Failed to fetch tasks" });
    });
});

// Fetch a specific task by ID and render it using Pug
router.get("/:taskId", async (req, res) => {
    const taskId = req.params.taskId; // Get taskId from URL params

    try {
      // Convert string to ObjectId (MongoDB requires this format for querying _id)
      const query = { _id: new ObjectId(taskId) };
      const task = await findOneTask(query);

      if (!task) {
        return res.status(404).send("Task not found");
      }

      // Render the Pug template with task details
      res.render("task", {
        id: task._id,
        title: task.title,
        completed: task.completed ? "completed" : "not completed",
        dueDate: task.date // Pass the date field
      });
    } catch (error) {
      console.error(`Error fetching task ${taskId}:`, error);
      res.status(500).send("Task not found or failed to fetch task details.");
    }
  });


// Route for /tasks/:taskId/:userId
router.get("/:taskId/:userId", (req, res) => {
  const { taskId, userId } = req.params;
  res.send(`You are viewing task ${taskId} for user ${userId}`);
});

module.exports = router;
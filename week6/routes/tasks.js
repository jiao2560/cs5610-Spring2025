const express = require("express");
const router = express.Router();
const axios = require("axios"); // Import axios
const { addToDB } = require("../db");
const path = require('path');

// Route for /tasks
// router.get('/', (req, res) => {
//     res.send('<h1>List of all the tasks</h1>');
// });

// Route for /tasks - Fetch tasks from JSONPlaceholder
router.get('/newtask', (req, res) => {
    res.render('newtask'); // Render the Pug form
});

router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    addToDB(req.body);
    res.redirect('/tasks');
  } catch (err) {
    console.log("Post Handler",err);
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

// Fetch a specific task by ID and also fetch user details
router.get("/:taskId", async (req, res) => {
  const taskId = req.params.taskId;
  const taskUrl = `https://jsonplaceholder.typicode.com/todos/${taskId}`;

  try {
    // Fetch task details
    const taskResponse = await axios.get(taskUrl);
    const task = taskResponse.data;

    // Fetch user details using userId from the task
    const userUrl = `https://jsonplaceholder.typicode.com/users/${task.userId}`;
    const userResponse = await axios.get(userUrl);
    const user = userResponse.data;

    // Render the Pug template with task and user details
    res.render("task", {
      id: task.id,
      title: task.title,
      completed: task.completed ? "Completed" : "Not Completed",
      userName: user.name, // User's name
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
// routes/tasks.js
const express = require('express');
const router = express.Router();

// Route to get all tasks
router.get('/', function(req, res) {
  res.send('<h1>Task List</h1>');
});

// Route to get a specific task using Pug template
router.get('/:taskId', function(req, res) {
  const taskId = req.params.taskId;
  res.render('task', { id: taskId }); // Passing taskId as "id" to the template
});

// Export the router
module.exports = router;

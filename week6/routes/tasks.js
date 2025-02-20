const express = require('express');
const axios = require('axios');
const router = express.Router();


router.get('/', (req, res) => {
  axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(response => {
          res.json(response.data); // Send the fetched JSON data to the client
      })
      .catch(error => {
          console.error('Error fetching tasks:', error);
          res.status(500).json({ error: 'Failed to fetch tasks' });
      });
});

// ✅ Route to get a specific task and fetch the responsible user's name
router.get('/:taskId', async function (req, res) {
    try {
        const taskId = req.params.taskId;

        // 1️⃣ Fetch task details
        const taskResponse = await axios.get(`https://jsonplaceholder.typicode.com/todos/${taskId}`);
        const task = taskResponse.data;

        // 2️⃣ Fetch user details using task.userId
        const userResponse = await axios.get(`https://jsonplaceholder.typicode.com/users/${task.userId}`);
        const user = userResponse.data;

        // 3️⃣ Render the template with task and user data
        res.render('task', { task, user });
    } catch (error) {
        console.error('Error fetching task or user:', error);
        res.status(500).json({ error: 'Failed to fetch task or user' });
    }
});

// Export the router
module.exports = router;


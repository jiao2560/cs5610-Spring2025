const express = require('express');
const axios = require('axios');
const router = express.Router();

// Route to fetch all tasks from an external API
router.get('/', function (req, res) {
    axios.get('https://jsonplaceholder.typicode.com/todos/')
        .then(response => {
            res.json(response.data); // Send the API response to the browser
        })
        .catch(error => {
            console.error('Error fetching tasks:', error);
            res.status(500).json({ error: 'Failed to fetch tasks' });
        });
});

// ✅ Route to get a specific task and render it using Pug
router.get('/:taskId', function (req, res) {
    const taskId = req.params.taskId;

    axios.get(`https://jsonplaceholder.typicode.com/todos/${taskId}`)
        .then(response => {
            res.render('task', { task: response.data }); // Pass full task object to the template
        })
        .catch(error => {
            console.error('Error fetching task:', error);
            res.status(500).json({ error: 'Failed to fetch task' });
        });
});

// Export the router
module.exports = router;

const fs = require('fs');

const filePath = 'message.txt';
const message = 'Hello, this is a test message written to a file!';


// Write the message to a new file
fs.writeFile(filePath, message, (err) => {
    if (err) {
        console.error('Error writing to file:', err);
        return;
    }
    console.log('Message successfully written to file.');

    // Read the message back
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }
        console.log('Read from file:', data);
    });
});

// app.js

// Import logger module
const logger = require('./logger');

// Call the log function
logger.log();  // Output: logged successfully

// Print the version variable
console.log(`Logger version: ${logger.version}`);  // Output: Logger version: 2.6

const express = require('express');
const app = express();

// Set Pug as the template engine
app.set('view engine', 'pug');
app.set('views', './views'); // Specify the views directory

// Serve static files from "public" folder
app.use(express.static('public'));

// Import the tasks router
const tasksRouter = require('./routes/tasks');

// Mount the tasks router at /tasks
app.use('/tasks', tasksRouter);

// Root route
app.get('/', function(req, res) {
  res.send('Hello World!');
});

// About route
app.get('/about', function(req, res) {
  res.send('This is the About Page!');
});

// Start server on port 3000
const port = 3000;
app.listen(port, function() {
  console.log(`Server running at http://localhost:${port}`);
});



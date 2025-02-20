const fs = require('fs');
const util = require('util');

const filePath = 'message.txt';
const message = 'Hello, this is a test message written to a file!';

// Convert fs.writeFile and fs.readFile into promise-based functions
const writeFileAsync = util.promisify(fs.writeFile);
const readFileAsync = util.promisify(fs.readFile);

console.log('Starting file operations...');

/*
// ✅ Commenting out the .then() and .catch() approach
writeFileAsync(filePath, message)
    .then(() => {
        console.log('Message successfully written to file.');
        return readFileAsync(filePath, 'utf8');
    })
    .then((data) => {
        console.log('Read from file:', data);
    })
    .catch((err) => {
        console.error('Error:', err);
    });
*/

// ✅ Keeping only the async/await approach
async function handleFileOperations() {
    try {
        await writeFileAsync(filePath, message);
        console.log('Message successfully written to file.');

        const data = await readFileAsync(filePath, 'utf8');
        console.log('Read from file:', data);
    } catch (err) {
        console.error('Error:', err);
    }
}

// Call the async function
handleFileOperations();


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



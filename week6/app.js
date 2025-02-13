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

// Define a simple route
app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

// Start the server on port 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});



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

// Route for the root URL "/"
app.get('/', function(req, res) {
  res.send('Hello World!');
});

// Start server on port 3000
const port = 3000;
app.listen(port, function() {
  console.log(`Example app listening on http://localhost:${port}`);
});



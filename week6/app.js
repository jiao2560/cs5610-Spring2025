// const fs = require('fs');
// // Define the file path and message
// const filePath = 'message.txt';
// const message = 'Hello, this is a message written using Node.js!';

// Write the message to a new file
// fs.writeFile(filePath, message, (err) => {
//     if (err) {
//         console.error('Error writing to file:', err);
//         return;
//     }
//     console.log('File written successfully.');

//     // Read the message back from the file
//     fs.readFile(filePath, 'utf8', (err, data) => {
//         if (err) {
//             console.error('Error reading the file:', err);
//             return;
//         }
//         console.log('File content:', data);
//     });
// });

const fs = require("fs");
const util = require("util");

// Convert fs.writeFile and fs.readFile into promise-based functions
const writeFile = util.promisify(fs.writeFile);
const readFile = util.promisify(fs.readFile);

const filePath = "message.txt";
const message =
  "Hello, this is a message written using Node.js with async/await!";

// Write to file and then read it using .then() and .catch()
// writeFile(filePath, message)
//     .then(() => {
//         console.log('File written successfully.');
//         return readFile(filePath, 'utf8'); // Return the promise
//     })
//     .then((data) => {
//         console.log('File content:', data);
//     })
//     .catch((err) => {
//         console.error('Error:', err);
//     });

// Function using async/await
async function writeAndReadFile() {
  try {
    await writeFile(filePath, message);
    console.log("File written successfully.");

    const data = await readFile(filePath, "utf8");
    console.log("File content:", data);
  } catch (err) {
    console.error("Error:", err);
  }
}

// Call the function (Ensure .then() is removed)
writeAndReadFile();

const logger = require("./logger.js");
logger.log();
console.log("Logger version:", logger.version);

const express = require("express");
const app = express();
const tasksRouter = require("./routes/tasks"); // Import tasks router

// Root route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Tasks route
// app.get('/tasks', (req, res) => {
//     res.send('<h1>List of all the tasks</h1>');
// });
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Serve static files from the "public" folder
app.use(express.static("public"));

// Set Pug as the view engine
app.set("view engine", "pug");

// Specify the folder for Pug templates
app.set("views", "./views");

// Mount the tasks router at /tasks
app.use("/tasks", tasksRouter);

// Route to handle taskId parameter
// app.get('/tasks/:taskId', (req, res) => {
//     const taskId = req.params.taskId; // Extract taskId from the route
//     res.send(`You are viewing task ${taskId}`);
// });

// app.get('/tasks/:taskId/:userId', (req, res) => {
//     const { taskId, userId } = req.params; // Extract taskId and userId
//     res.send(`You are viewing task ${taskId} for user ${userId}`);
// });

// Redirect /newtask to /tasks/newtask
app.get("/newtask", (req, res) => {
  res.redirect("/tasks/newtask");
});

// Start the server
const { connectDB, addToDB, findOneTask } = require("./db");
const port = 3000;
app.listen(port, async () => {
  console.log(`Server is running on http://localhost:${port}`);
  await connectDB(); // Connect to MongoDB after server starts
  console.log("connected to databse");
//   addToDB({ task: "Reading", user: "Me" });

  // Test findOneTask function
  const testQuery = { title: "Read" }; // ✅ Test with a hardcoded query
  const task = await findOneTask(testQuery);
  console.log("Found Task:", task);
});
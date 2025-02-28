require("dotenv").config(); // Load environment variables
const { MongoClient } = require("mongodb");

const uri = process.env.MONGO_URI; // Get MongoDB URI from .env
const client = new MongoClient(uri);

async function connectDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB Atlas successfully!");
  } catch (err) {
    console.error("MongoDB Connection Error:", err);
    process.exit(1);
  }
}

// Function to insert a new task
async function addToDB(doc) {
  try {
    const result = await client.db("cs5610").collection("tasks").insertOne(doc);
    console.log("Task added:", result.insertedId);
  } catch (err) {
    console.log("addToDB Error:", err);
  }
}

// Function to retrieve all tasks
async function getAllTasks() {
  try {
    const tasks = await client
      .db("cs5610")
      .collection("tasks")
      .find()
      .toArray();
    return tasks; // Returns an array of tasks
  } catch (err) {
    console.error("getAllTasks Error:", err);
    return [];
  }
}

// Function to find one task by query
async function findOneTask(query) {
    try {
      const task = await client.db("cs5610").collection("tasks").findOne(query);
      if (!task) {
        console.log("No task found with this query.");
        return null;
      }
      return task;
    } catch (err) {
      console.error("findOneTask Error:", err);
      return null;
    }
  }

  module.exports = { connectDB, addToDB, getAllTasks, findOneTask };
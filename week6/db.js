require("dotenv").config(); // Load environment variables

const { MongoClient } = require("mongodb");

const uri = process.env.MONGO_URI; // Get MongoDB URI from .env
const client = new MongoClient(uri);

module.exports = {
  connect: async function () {
    const client = new MongoClient(uri);
    await client.connect();
  },
  addToDB: async function (doc) {
    try {
      const result = await client.db("cs5610").collection("tasks").insertOne(doc);
      console.log(result);
    } catch (err) {
      console.log("addToDB", err);
    }
  },
};
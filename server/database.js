const mongoose = require("mongoose");
require("dotenv").config();

const username = process.env.MONGO_USERNAME;
const password = process.env.MONGO_PASSWORD;
const database = process.env.MONGO_DATABASE;

async function dbConnect() {
  try {
    console.log("connecting to mongodb...");
    const db = await mongoose.connect(
      `mongodb://${username}:${password}@localhost:27017/${database}?authSource=admin`
    );
    console.log("successfully connected to mongodb.");
    return db;
  } catch (error) {
    console.log("could not connect to mongodb.");
    console.log(error);
  }
}

module.exports = { dbConnect };

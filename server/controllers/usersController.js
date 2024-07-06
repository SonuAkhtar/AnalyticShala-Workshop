const mongoose = require("mongoose");

const DB_URL =
  "mongodb+srv://riyazsa03:Dec%40%4098786@cluster0.infhabi.mongodb.net/analyticShala?retryWrites=true&w=majority&appName=Cluster0";

// Method to create MongoDB connection
const usersController = async () => {
  try {
    const conn = await mongoose.connect(DB_URL);
    console.log("DB Connected");
  } catch (error) {
    console.log("DB Connection Error :", error);
  }
};

module.exports = usersController;

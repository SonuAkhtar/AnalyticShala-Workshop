const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  city: String,
  attending: String,
  profession: String,
  excited: String,
  expect: String,
});

const userModel = mongoose.model("user", userSchema);
module.exports = userModel;

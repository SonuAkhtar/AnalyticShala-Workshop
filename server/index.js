// npm packages
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

// application functions
const usersController = require("./controllers/usersController.js");
const userModel = require("./models/usersModel.js");

const app = express(); // initialize express

app.use(cors());
app.use(bodyParser.json());

// start server
app.listen(3000, () => {
  console.log("Running on Port: 3000");
});

// call controller method to create DB connection
usersController();

// method to execute on API request
app.post("/", (req, res) => {
  userModel
    .create(req.body)
    .then((user) => res.status(200).send(user))
    .catch((error) => res.send(error));
});

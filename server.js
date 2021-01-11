// environment variables
require("dotenv").config();

const port = process.env.PORT;

// connect to mongodb
const dbConnect = require("./config/dbConnect");

dbConnect();

// initiate express app
const cors = require("cors");
const express = require("express");
const app = express();

app.use(cors());
app.use(express.json());

// routes
app.post("/api/users/register", (req, res) => {
  res.send("register route");
});

app.post("/api/users/login", (req, res) => {
  res.send("login route");
});

app.put("/api/users/update", (req, res) => {
  res.send("update route");
});

app.delete("/api/users/:id", (req, res) => {
  res.send("delete route");
});

// server
app.listen(8000, console.log(`express app running on port:${port}`));

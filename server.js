// environment variables
require("dotenv").config();

const port = process.env.PORT;

// import middleware
const error = require("./middleware/errorMiddlewareHandler");

// connect to mongodb
const dbConnect = require("./config/dbConnect");

dbConnect();

// initiate express app
const cors = require("cors");
const express = require("express");
const app = express();

app.use(cors());
app.use(error.errorMiddlewareHandler);
app.use(express.json());

// routes
const usersRoute = require("./routes/usersRoute");

app.use("/api/users", usersRoute);

// server
app.listen(8000, console.log(`express app running on port:${port}`));

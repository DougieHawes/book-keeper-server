const mongoose = require("mongoose");

const mongoUri = process.env.MONGODB_URI;

const dbConnect = () => {
  mongoose
    .connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("mongodb connected"))
    .catch((error) => console.log(error));
};

module.exports = dbConnect;

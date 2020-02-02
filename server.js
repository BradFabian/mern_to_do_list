const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const todos = require("./routes/api/todos");

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());
// DB Config
const db = require("./config/keys").mongoURI;

// Connect to Mongo
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Mongo DB Connected..."))
  .catch(err => console.log(err));

// Use Routes
app.use("/api/todos", todos);

const port = process.env.PORT || 5000;
// express listen to port 5000 or env file port and log which port it starts on
app.listen(port, () => console.log(`Server started on port ${port}`));

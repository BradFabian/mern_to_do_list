const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ToDoSchema = new Schema({
  todo: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Item = mongoose.model("todo", ToDoSchema);

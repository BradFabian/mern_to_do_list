const express = require("express");
const router = express.Router();

// Todos Model

const Todo = require("../../models/Todos");

// @route GET api/todos
// @desc GET All Items
// @access Public
router.get("/", (req, res) => {
  Todo.find()
    .sort({ date: -1 })
    .then(todos => res.json(items));
});

// @route Post api/todos
// @desc Create A Post
// @access Public

// @route DELETE api/todos/:id
// @desc Delete A Todo
// @access Public

// @route Update api/todos/:id
// @desc Update A Todo
// @access Public

module.exports = router;
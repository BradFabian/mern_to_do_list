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
    .then(todos => res.json(todos));
});

// @route Post api/todos
// @desc Create A Post
// @access Public
router.post("/", (req, res) => {
  const newTodo = new Todo({
    todo: req.body.todo
  });

  newTodo.save().then(todo => res.json(todo));
});

// @route DELETE api/todos/:id
// @desc Delete A Todo
// @access Public
router.delete("/:id", (req, res) => {
  Todo.findByIdAndRemove()
    .remove({ _id: req.params.id })
    .then(todos => res.json(todos));
});

// @route Update api/todos/:id
// @desc Update A Todo
// @access Public

module.exports = router;

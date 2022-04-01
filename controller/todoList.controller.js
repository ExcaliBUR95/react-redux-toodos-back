const TodoList = require("../models/TodoList.model");

module.exports.todoListController = {
  addTodo: async (req, res) => {
    try {
      const todolistok = await TodoList.create({
        text: req.body.text,
        completed: req.body.completed,
      });
      res.json(todolistok);
    } catch (e) {
      console.log(e);
    }
  },
  getAllTodo: async (req, res) => {
    try {
      const todo = await TodoList.find();
      res.json(todo);
    } catch (e) {
      console.log(e);
    }
  },
  putTodo: async (req, res) => {
    try {
      await TodoList.findByIdAndUpdate(req.params.id, {
        text: req.body.text,
        completed: req.body.completed,
      });
      res.json("added");
    } catch (e) {
      console.log(e);
    }
  },
  deleteTodo: async (req, res) => {
    try {
      await TodoList.findByIdAndDelete(req.params.id);
      res.json("deleted");
    } catch (error) {
      console.log(error);
    }
  },
};

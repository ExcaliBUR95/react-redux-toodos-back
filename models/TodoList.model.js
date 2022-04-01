const mongoose = require("mongoose");

const todoListSchema = mongoose.Schema({
  text: String,
  completed: {
    type: Boolean,
    default: false,
  },
});
const TodoList = mongoose.model("TodoList", todoListSchema);

module.exports = TodoList;

const { Router } = require("express");

const { todoListController } = require("../controller/todoList.controller");

const router = Router();

router.post("/todo", todoListController.addTodo);
router.patch("/todo/:id", todoListController.putTodo);
router.get("/todo", todoListController.getAllTodo);
router.delete("/todo/:id", todoListController.deleteTodo);

module.exports = router;

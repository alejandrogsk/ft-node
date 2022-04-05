const Router = require("express").Router;
const {
    getAllTodo,
    getOneTodo,
    createTodo,
    updateTodo,
    deleteTodo,
} = require("../controllers/TodoController");
const route = Router();

route.get("/all", getAllTodo);
route.get("/one/:id", getOneTodo);
route.post("/create", createTodo);
route.put("/one/:id", updateTodo);
route.delete("/one/:id", deleteTodo);

module.exports = route;

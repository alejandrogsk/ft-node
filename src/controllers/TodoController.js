const Todo = require('../models/TodoModel');

const getAllTodo = async (req,res)=> {
    const todos = await Todo.find();
    console.log(todos)

    if(todos.length===0 || todos === null) {
        return res.json({
            ok: false,
            message: "No todo could be found"
        });
    }


    return res.status(200).json({
        ok: true,
        message: "Take",
        todos: todos
    });
}
const getOneTodo = async (req,res)=> {
    const id = req.params.id;
    try {
        const todo = await Todo.findById(id);
        return res.status(200).json({
            ok: true,
            message: "Take",
            todo: todo
        })
    } catch (error) {
        return res.status(400).json({
            ok: false,
            message: "Seems to be a problem, probablly not found",
            todo_id: id
        })
    }
}
const createTodo = async (req, res) => {
    console.log(req.body);
    const todo = await Todo.create(req.body);
    return res.json({
        ok: true,
        message: "Everithing is ok",
        todo: todo
    })
}


const updateTodo = async (req,res)=> {
    const id = req.params.id;
    const data = req.body;
    try {
        const todo = await Todo.findByIdAndUpdate(id, data);
        return res.status(200).json({
            ok: true,
            message: "Todo Updated",
            todo: todo
        })
    } catch (error) {
        return res.status(400).json({
            ok: false,
            message: "Seems to be a problem, probablly not found",
            todo_id: id
        })
    }
}
const deleteTodo = async (req,res)=> {
    const id = req.params.id;
    try {
        await Todo.findByIdAndRemove(id);
        return res.status(200).json({
            ok: true,
            message: "Todo Deleted"
        })
    } catch (error) {
        return res.status(400).json({
            ok: false,
            message: "Seems to be a problem, probablly not found",
            todo_id: id
        })
    }
}



module.exports = {
    getAllTodo,
    getOneTodo,
    createTodo,
    updateTodo,
    deleteTodo
}
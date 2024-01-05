const express = require('express');
const mongoose = require('mongoose');
const { boolean } = require('zod');
const { createTodo, updateTodo } = require('./types');

const app = express();
app.use(express.json());

const todoSchema = new mongoose.schema({
    id: { type: Number, required: true },
    title: { type: String, required: true },
    description: { type: String, default: '' },
    Completed: { type: Boolean, defaul: false }
})

const Todo = mongoose.model('Todo', todoSchema);



let counter = 5;



let todos = [];

app.get("/", (req, res) => {
    // if (todos.length != 0) {
    //     res.json(todos)

    // }
    // else {
    //     res.send("No todo task on your list");
    // };

    todos.length != 0 ? res.json(todos) : res.send("No todo task on your list");;

})

app.post("/createTodo", (req, res) => {
    // console.log("adding called")
    const createPayLoad = req.body;
    const ParsePayLoad = createTodo.safeParse(createPayLoad);
    if (!ParsePayLoad.success) {
        res.status(411).json({
            msg: "Please Enter Correct Inputs"
        })

    }

})

app.put('/completed', (req, res) => {
    const updatePayLoad = req.body;
    const ParsePayLoad = updateTodo.safeParse(updatePayLoad);
    if (!ParsePayLoad.success) {
        res.status(411).json({
            msg: "TODO TASK NOT FOUND"
        })
    }

})




app.listen(3000);

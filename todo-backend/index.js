const express = require('express');
const mongoose = require('mongoose');
const { boolean } = require('zod');

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
    console.log(req.body.title);
    const newTodo = {
        id: counter,
        title: req.body.title,
        description: req.body.description
    }
    todos.push(newTodo);
    counter++;

    res.send("Todo added Successfully");
    console.log(JSON.stringify(todos));

})

app.put('/completed', (req, res) => {
    let todoId = req.body.id;
    //getting the required Item from the array
    todos.filter(function (todo) {
        todoId = todo.id;
        console.log


    })


})

app.listen(3000);

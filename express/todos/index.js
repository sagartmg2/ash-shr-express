const express = require("express")
const mongoose = require('mongoose');
const Todo = require("./todosModal")

mongoose.connect('mongodb://127.0.0.1:27017/todos')
    .then(() => console.log('Connected!'));

const app = express()
const todos = require("./todos");

async function getTodos(req, res) {
    let todos = await Todo.find()
    res.send(todos)

    // res.send([
    //     {title:"html",status:true},
    //     {name:"css",status:"compolted"},
    //     {name:"js",status:"compolted"}
    // ])
}

app.get("/api/todos", getTodos)

app.post("/api/todos", todos.createTodos)




/* now you can access via localhost:8000/api/todos */
app.listen(8000, () => {
    console.log("server started.")
})



/* 
core module
    eg: fs
        path
        http

third party 
    express
    bcrypt
    mongoose
 */


/* 
    CRUD  create read update delete

    http request methods
    get - read
    post - create
*/
const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    task:String,
    done: Boolean
})

const TodoModel = mongoose.model("todos", todoSchema)
module.exports = todoModel
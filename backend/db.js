const mongoose = require("mongoose");

// mongodb+srv://spammailshivam:EGe0h9ON15prn7dj@cluster0.lvx6n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

mongoose.connect("mongodb+srv://spammailshivam:EGe0h9ON15prn7dj@cluster0.lvx6n.mongodb.net/todos")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos' , todoSchema);

module.exports = {
    todo
}
//Import mongoose package
const mongoose = require('mongoose')

//Build the customer schema
//inside of those parentheses we're making an object. That object is going to have our blueprint.

const todoSchema = new mongoose.Schema({     //making our schema object
    name: String,
    age: Number
})

//Create a new model file
const Todo = mongoose.model('Todo', todoSchema)

//Export it
module.exports = Todo;

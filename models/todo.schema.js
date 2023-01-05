const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Todo = new Schema({
    user_id: {
        type: Number,
        required: true
    },
    todo_name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false,
        default: 'new todo'
    },
    created_at:{
        type:Date,
        required:true
    }


}, { timestamps: true })

module.exports = mongoose.model('Todo', Todo)
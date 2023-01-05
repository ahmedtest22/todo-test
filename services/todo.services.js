const todoSchema = require('../models/todo.schema')

const listUserTodos = async (data) => {

    return todoSchema.find({user_id:data.user_id}).skip(data.pageNo || 0).limit(data.pageSize || 10)
}

const addNewTodo = async (data) => {
    return todoSchema.collection.insertOne(data)
}

const updateTodoById = async(todo_id , data)=>{
    return todoSchema.findByIdAndUpdate({_id:todo_id} , data)   
}

const deleteTodoById = async(todo_id)=>{
    return todoSchema.findByIdAndDelete(todo_id)
}

const deleteUserTodo = async(user_id)=>{
    return todoSchema.deleteMany(user_id)
}



module.exports = {
    listUserTodos,
    addNewTodo,
    updateTodoById,
    deleteTodoById,
    deleteUserTodo
}
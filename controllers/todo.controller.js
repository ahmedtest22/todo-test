const todoService = require('../services/todo.services')
const Constants = require('../utils/constants')


const todoInfo = async (req,res)=>{
        const data =  await todoService.listUserTodos(req.query)
        return  res.status(Constants.messageStatus.Ok).json({
            data
        })
} 

const newTodo = async(req,res)=>{
   
        const {user_id , todo_name , description} = req.body
        const created_at = new Date()
        try{
            await todoService.addNewTodo({user_id , todo_name , description , created_at})
            return  res.status(Constants.messageStatus.Ok).json({
                message:'data added succesfully'
            })

        }catch(err){
            return res.status(Constants.messageStatus.Bad).json({
                message:'some error happen'
            })
        }
        
        
   
}

const updateTodoById = async (req,res)=>{
    
    const todo_id = req.query.todo_id
    const todo_name =  req.query.todo_name
    const description = req.query.description
    const newData = await todoService.updateTodoById(todo_id , {todo_name , description})
    try{
        return  res.status(Constants.messageStatus.Ok).json({
            message:'Todo has been updated succesfully',
        })
    }catch(err){
        return res.status(Constants.messageStatus.Bad).json({
            message:'some error happen'
        })
    }
}

const deleteTodoById = async (req,res)=>{
    try{
        await todoService.deleteTodoById(req.query)
        return  res.status(Constants.messageStatus.Ok).json({
            message:'Todo has been deleted succesfully'
        })
    }catch(err){
        return res.status(Constants.messageStatus.Bad).json({
            message:'some error happen'
        })
    }
    
}

const deleteUserTodos = async (req,res)=>{
    try{
        await todoService.deleteUserTodo(req.query)
        return  res.status(Constants.messageStatus.Ok).json({
            message:'All Todos has been deleted succesfully'
        })
    }catch(err){
        return res.status(Constants.messageStatus.Bad).json({
            message:'some error happen'
        })
    }
   
}

module.exports = {
    todoInfo,
    newTodo,
    updateTodoById,
    deleteTodoById,
    deleteUserTodos
}
const Joi = require('joi')
const validator = require('../../utils/joiValidator')

const getTodo = (req,res,next)=>{
    const schema  = Joi.object({
        user_id:Joi.number().required(),
        pageNo:Joi.number().required(),
        pageSize:Joi.number().required()
    })
    const validateFields = validator.validateFields(req.query , res , schema)
    if(validateFields)  next()
}

const addTodo = (req,res,next)=>{
    const schema  = Joi.object({
        user_id:Joi.number().required(),
        todo_name:Joi.string().required(),
        description:Joi.string().optional()
    })
    const validateFields = validator.validateFields(req.body , res , schema)
    if(validateFields)  next()
}
const updateTodo = (req,res,next)=>{
    const schema  = Joi.object({
        todo_id:Joi.string().required(),
        todo_name:Joi.string().optional(),
        description:Joi.string().optional()
    })
    const validateFields = validator.validateFields(req.query , res , schema)
    if(validateFields)  next()
}

const deleteById = (req,res,next)=>{
    const schema  = Joi.object({
        _id:Joi.string().required()
    })
    const validateFields = validator.validateFields(req.query , res , schema)
    if(validateFields)  next()
}

const deleteAll = (req,res,next)=>{
    const schema  = Joi.object({
        user_id:Joi.number().required()
    })
    const validateFields = validator.validateFields(req.query , res , schema)
    if(validateFields)  next()
}

module.exports = {
    getTodo,
    addTodo,
    updateTodo,
    deleteById,
    deleteAll
}
var express = require('express');
var app = express();
const todoApp = require('../routes/todoCrud')


module.exports = (app) =>{
    app.use('/todo' ,todoApp )
}

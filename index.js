require('custom-env').env()

var express = require('express');
var app = express();
const bodyParser  = require('body-parser')

app.use(bodyParser.json());
require("./stratups/mongodb")
require("./stratups/routes")(app)

const PORT = process.env.PORT || 3010

app.listen(PORT,()=>{
    console.log('server running on 3010')
})
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_DB_URI).then(()=>{
    console.log('MongoDB Connection ok!')
}).catch((err)=>{
    //console.log(err)
    console.log('Falied to Connect MongoDB')
})
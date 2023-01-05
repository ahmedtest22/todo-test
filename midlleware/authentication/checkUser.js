const jwt = require('jsonwebtoken');

const verfiyUsers = (req,res)=>{
    data = {
        user_id:1
    }
    const token = jwt.sign(data, process.env.JWT_SECRET_KEY);
}
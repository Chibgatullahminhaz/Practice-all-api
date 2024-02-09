const user = require('../model/users.model')
const getAllusers =  (req,res)=>{
    res.status(200).send(user)
};



module.exports = {
    getAllusers
}

const {v4: uuidv4} = require('uuid');
const User = require('../model/users.model');

const getAllusers = async (req,res)=>{
    try {
        const user = await User.find();
        res.status(200).json(user)
    } catch (error) {
        res.status(500).send(error.message)
    }
};

const getOneUser = async (req,res)=>{
    try {
        const user = await User.findOne({id:req.params.id});
        res.status(200).json(user)
    } catch (error) {
        res.status(500).send(error.message)
    }
};

const creatUser = async (req,res)=>{
    try {
       const newUser = new User({
        id:uuidv4(),
        name:req.body.name,
        age:Number(req.body.age)
       })
     await newUser.save()
     res.status(201).json(newUser);
    } catch (error) {
        res.status(500).send(error.message)
    }
};

const updateUser = async  (req,res)=>{
try {
    const updatedUser = await User.findOne({id:req.params.id});
    updatedUser.name = req.body.name;
    updatedUser.age = Number(req.body.age);
    await updatedUser.save();
    res.status(202).json(updatedUser);
} catch (error) {
 res.status(500).send(error.message)   
}
};

const deletUser = async (req,res)=>{
try {
    const deletedUser =await User.deleteOne({id:req.params.id});
   res.status(200).json(deletedUser) 
} catch (error) {
    res.status(500).send(error.message)
}
};




module.exports = {
    getAllusers,
    getOneUser,
    updateUser,
    deletUser,
    creatUser
}
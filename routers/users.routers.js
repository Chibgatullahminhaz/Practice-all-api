// import db 
const {getAllusers, getOneUser, creatUser, updateUser, deletUser} = require('../controller/users.controller')

// import routers from express
const express = require('express');
const router = express.Router();
router.get('/',getAllusers)
router.get('/:id',getOneUser)
router.post('/',creatUser)
router.patch('/:id',updateUser)
router.delete('/:id',deletUser)


module.exports = router;
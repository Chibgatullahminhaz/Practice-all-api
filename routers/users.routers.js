// import db 
const {getAllusers} = require('../controller/users.controller')

// import routers from express
const express = require('express');
const router = express.Router();
router.get('/',getAllusers)
router.get('/:id',getAllusers)
router.post('/',getAllusers)
router.patch('/:id',getAllusers)
router.delete('/:id',getAllusers)


module.exports = router;
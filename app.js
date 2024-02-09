// require all nessary pakages
const express = require('express');
const app = express();
const cors = require('cors');
const bodyPrser = require('body-parser');
// require local module
const userRouters = require('./routers/users.routers');
require('./config/db')

// using all pakages
app.use(cors());
app.use(bodyPrser.urlencoded({extended:false}));
app.use(bodyPrser.json());
app.use("/user",userRouters);

// create home router
app.get('/', (req,res)=>{
    res.status(200).sendFile(__dirname + "/views/index.html")
})
// routers error 
app.use((req,res,next)=>{
    res.status(404).send('404 ! page not fond');

});

//server error handaling 
 app.use((err,req,res,next)=>{
    res.status(500).send({
        message: 'server error'
    })
 }) 


module.exports = app;
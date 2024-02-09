const mongoose = require('mongoose');
const config = require('./config');

const dbURL = config.db.url;

mongoose.connect(dbURL).then(()=>{
    console.log("mongod atlas is connected")
}).catch((error)=>{
    console.log(error.message);
    process.exit(1);
})
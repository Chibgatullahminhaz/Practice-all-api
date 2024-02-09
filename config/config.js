require('dotenv').config();


const develop = {
    app:{
        port:process.env.PORT || 3000
    },
    db:{
        url:process.env.DB_URL
    }
}

module.exports = develop;
const mongoose = require('mongoose')


const Login = mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    password: {
        type:String,
        require:true,
        max: 1024,
        min: 6 
    }
})

module.exports = mongoose.model("login",Login)
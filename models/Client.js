const mongoose = require('mongoose')


const Message = mongoose.Schema({
    name :{
        type:String,
        require : true
    } ,
    email : {
        type : String ,
        require : true
    },
    text : {
        type : String , 
        require : true
    }
})
module.exports = mongoose.model("message",Message)
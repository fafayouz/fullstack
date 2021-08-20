const mongoose = require('mongoose')


const PostSchema = mongoose.Schema({
    title:String,
    price:Number,
    salle:String,
    douche:Number,
    bio:String,
    wilaya:String,
    area:String,
    typedebien:String,
    transaction:String,
    garage:String,
    images:[],
    
    

});

module.exports = mongoose.model('PostHouse',PostSchema)
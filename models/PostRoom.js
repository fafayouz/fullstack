const mongoose = require('mongoose')


const Posts = mongoose.Schema({
    price: {
        type: String,
      },
      typedebien: {
        type: String,
      },
      salle: {
        type: String,
      },
      douche: {
        type: String,
      },
      picture: {
        type: String,
      },
      bio: {
        type: String,
      },
      title: {
        type: String,
      },
      wilaya: {
        type: String,
      },
      area: {
        type: Number,
      },
      transaction: {
        type: String,
      },
     

})

module.exports = mongoose.model('posts',Posts)
const NewMessage = require('../models/Client')



module.exports.Message =  (req ,res) => {
   
    const message = new NewMessage()

     message.name = req.body.name
     message.email = req.body.email
     message.text = req.body.text

     message.save().then(ok => {
         res.send({error : false , message : 'Message Sent' , data : ok} )
     })
     .catch(err => {
         console.log(err)
     })
    
}

module.exports.getMessage = async (req , res) =>{
    try {
        const allmessage = await NewMessage.find();
        res.status(200).json(allmessage)
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}
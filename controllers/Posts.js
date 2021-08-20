const PostHouse = require('../models/PostHouse')




module.exports.getPosts = async (req,res) => {
    try {
        const PostHouses = await PostHouse.find();
        res.status(200).json(PostHouses)
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}
module.exports.getPostsVendre = async (req,res) => {
    try {
        const PostVendre = await PostHouse.find({transaction : "Vendre"})
        res.status(200).json(PostVendre)
    } catch (err) {
        res.status(404).json({message : error.message})
    }
}
module.exports.getPostsLouer = async (req,res) => {
    try {
        const PostLouer = await PostHouse.find({transaction : "Louer"})
        res.status(200).json(PostLouer)
    } catch (err) {
        res.status(404).json({message : error.message})
    }
}
module.exports.getPostsLouerAppartement = async (req , res) => {
    try {
        const PostLouerAppartement = await PostHouse.find({transaction : "Louer" , typedebien : "Appartement" })
        res.status(200).json(PostLouerAppartement)
    } catch (err) {
        res.status(404).json({message : error.message})
    }
}
module.exports.getPostsLouerVilla = async (req , res) => {
    try {
        const PostLouerVilla = await PostHouse.find({transaction : "Louer" , typedebien : "Villa" })
        res.status(200).json(PostLouerVilla)
    } catch (err) {
        res.status(404).json({message : error.message})
    }
}
module.exports.getPostsVendreVilla = async (req , res) => {
    try {
        const PostVendreVilla = await PostHouse.find({transaction : "Vendre" , typedebien : "Villa" })
        res.status(200).json(PostVendreVilla)
    } catch (err) {
        res.status(404).json({message : error.message})
    }
}
module.exports.getPostsVendreAppartement = async (req , res) => {
    try {
        const PostVendreAppartement = await PostHouse.find({transaction : "Vendre" , typedebien : "Appartement" })
        res.status(200).json(PostVendreAppartement)
    } catch (err) {
        res.status(404).json({message : error.message})
    }
}
module.exports.CreatePost = async (req, res) => {
    const file = req.files
  
    const NewPost = new PostHouse() ;
    NewPost.title = req.body.title
    NewPost.typedebien = req.body.typedebien
    NewPost.price = req.body.price
    NewPost.salle = req.body.salle
    NewPost.area = req.body.area
    NewPost.douche = req.body.douche
    NewPost.bio = req.body.bio
    NewPost.wilaya = req.body.wilaya
    NewPost.transaction = req.body.transaction
    NewPost.garage = req.body.garage
    NewPost.images = file
    
    NewPost.save().then(ok => {
        res.send({eroor : false , message:'Propriété publiée avec succès'})
    }).catch(err => {
        console.log(err)
        res.send({error : true , message:err})
    })
    
}

//Supprimer Un Post 

module.exports.deletepost = (req , res) => {
    const id = req.params.id
    
    PostHouse.findByIdAndDelete(id).then(ok => {
        res.send({error : false , message:'post supprimé avec succès'})
    }).catch(err => {
        res.send({eroor : true , message : err})
    })
}



//Search Un Post

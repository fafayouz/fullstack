const express = require('express');
const { Signin, Signup } = require('../controllers/Auth');
const { getPosts, CreatePost, getPostsVendre, getPostsLouer, deletepost, getPostsLouerVilla, getPostsLouerAppartement, getPostsVendreAppartement, getPostsVendreVilla } = require('../controllers/Posts');
const {fileStorageEngine} = require('../middleware/ImagesUpload')
const router = express.Router();
const multer  = require('multer');
const { Message, getMessage } = require('../controllers/Message');
const upload = multer({storage: fileStorageEngine})


router.get('/Fetchhousesdata',getPosts)
router.post('/CreatePosts' , upload.array('images',5),CreatePost  )
router.get('/FetchAvendre' , getPostsVendre )
router.get('/FetchAvendreAppartement' , getPostsVendreAppartement )
router.get('/FetchAvendreVilla' , getPostsVendreVilla )
router.get('/FetchAvendre' , getPostsVendre )
router.get('/FetchAlouer' , getPostsLouer )
router.get('/FetchAlouerAppartement' , getPostsLouerAppartement )
router.get('/FetchAlouerVilla' , getPostsLouerVilla )
router.post('/PostMessage' , Message)
router.get('/allmessage' , getMessage)
router.delete('/delete/:id' , deletepost)
//admin login 
router.post('/Signin',Signin)
router.post('/Singup',Signup)

module.exports = router;
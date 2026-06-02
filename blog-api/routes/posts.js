const express=require('express')
const router=express.Router()
const protect=require('../middleware/auth')
const {
    getPosts,
    getPost,
    createPost,
    deletePost
}=require('../controllers/postController')
router.get('/',getPosts)
router.get('/:id',getPost)
router.post('/',protect,createPost)
router.put('/:id',protect,deletePost)
module.exports=router

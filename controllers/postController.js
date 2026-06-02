const Post=require('../models/Post')
const getPosts=async(req,res)=>{
    try{
        const posts= await Post.find().populate('author','name email')
        res.status(200).json(posts)
    }
    catch(err)
    {
        res.status(500).json({message:'Error',error:err.message})
    }
}
const getPost=async(req,res)=>{
    try{
        const post=await Post.findById(req.params.id).populate('author','name email')
        if(!post){
            return res.status(404).json({message:'Post not found'})
        }
        res.status(200).json(post)
    }
    catch(err)
    {
        res.status(500).json({message:'Error',error:err.message})
    }
}
const createPost=async(req,res)=>{
    try{
        const post=new Post({
            title:req.body.title,
            content:req.body.content,
            published:req.body.published,
            author:req.user.id
        })
        await post.save()
        res.status(201).json(post)
    }
    catch(err)
    {
        res.status(500).json({message:'Error',error:err.message})
    }
}
const updatePost=async(req,res)=>{
    try{
        const post= await Post.findByIdAndUpdate(req.params.id,req.body,{new:true})
        if(!post){
            return res.status(404).json({message:'Post not found'})
        }
        res.status(200).json({message:'Post updated successfully',post})
    }
    catch(err)
    {
        res.status(500).json({message:'Error',error:err.message})
    }
}
const deletePost=async(req,res)=>{
    try{
        const post=await Post.findByIdAndDelete(req.params.id)
        if(!post){
            return res.status(404).json({message:'Post not found'})
        }
        res.status(200).json({message:'Post deleted successfully'})
    }
    catch(err)
    {
        res.status(500).json({message:'Error',error:err.message})
    }
}
module.exports={getPosts,getPost,createPost,updatePost,deletePost}
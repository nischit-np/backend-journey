const express=require('express')
const router=express.Router()
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const User=require('../models/User')
router.post('/register',async(req,res)=>{
    try{
        const {name,email,password}=req.body
        const existingUser=await User.findOne({email})
        if(existingUser){return res.status(400).json({message:'User already exists'})}
        const salt=await bcrypt.genSalt(10)
        const hashedPassword=await bcrypt.hash(password,salt)
        const user=new User({name,
            email,
            password:hashedPassword
        })
        await user.save()
        res.status(201).json({message:'User registered successfully'})
    }
    catch(err){
        res.status(500).json({message:'Error',error:err.message})
    }
})
router.post('/Login',async(req,res)=>{
    try{
        const{email,password}=req.body
        const user=await User.findOne({email})
        if(!user){return res.status(400).json({message:'Invalid email or password'})}
        const isMatch=await bcrypt.compare(password,user.password)
        if(!isMatch){return res.status(400).json({message:'Invalid email or password'})}
        const token=jwt.sign({id:user._id,name:user.name},
            process.env.JWT_SECRET,
            {expiresIn:'7d'}
        )
        res.status(200).json({message:'Login Successfull',token})
    }
    catch(err){
        res.status(500).json({message:'Error',error:err.message})
    }
})
module.exports=router
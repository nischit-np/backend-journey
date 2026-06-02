const jwt=require('jsonwebtoken')
const Auth=require('../models/User')
const bcrypt=require('bcryptjs')
const registerUser=async(req,res)=>{
    try{
        const {name,email,password}=req.body
        const existingUser=await Auth.findOne({email})
        if(existingUser) {
            return res.status(400).json({message:'User already exists'})
        }
        const salt=await bcrypt.genSalt(10)
        const hashedPassword=await bcrypt.hash(password,salt)
        const auth= new Auth({name,
            email,
            password:hashedPassword
        })
        await auth.save()
        res.status(201).json({message:'User registered successfully'})
    }
    catch(err)
    {
        res.status(500).json({message:'Error',error:err.message})
    }

}
const loginUser=async(req,res)=>{
    try{
        const {email,password}=req.body
        const auth= await Auth.findOne({email})
        if(!auth) return res.status(400).json({message:'Invalid email or password'})
        const isMatch=await bcrypt.compare(password,auth.password)
        if(!isMatch)return res.status(400).json({message:'Invalid email or password'})
        const token=jwt.sign({id:auth._id,name:auth.name},
        process.env.JWT_SECRET,
        {expiresIn:'7d'})
        res.status(200).json({message:'Login Successful',token})
    }
    catch(err){
        res.status(500).json({message:'Error',error:err.message})
    }
}
module.exports={registerUser,loginUser}

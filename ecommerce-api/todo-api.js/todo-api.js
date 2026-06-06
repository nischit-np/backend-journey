const express=require('express')
const mongoose=require('mongoose')
const app=express()
app.use(express.json())
mongoose.connect('mongodb://localhost:27017/tododb')
.then(()=>{
    console.log("Mongoose connected")
})
.catch((err)=>{
    console.log("Error",err)
})
const TODOSchema=mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    author:{
        type:String,
        required:true,
    },
    description:{
        type:String,
    },
    completed:{
        type:Boolean,
        default:false,
    },
    createdAt:{
        type:Date,
        default:Date.now
    }

})
const TODO= mongoose.model("TODO",TODOSchema)
app.post('/todos',async(req,res)=>{
    try{
        const todo =new TODO(req.body)
        await todo.save()
        res.json(todo)
    }
    catch(err)
    {
        res.json({message:"Error",error:err.message})
    }

})
app.get('/todos',async(req,res)=>{
    try{
        const todos= await TODO.find()
        res.json(todos)
    }
    catch(err)
    {
        res.json({message:"Error",error:err.message})
    }
})
app.get('/todos/:id',async(req,res)=>{
    try{
        const todo= await TODO.findById(req.params.id)
        res.json(todo)
    }
    catch(err)
    {
        res.json({message:"Errrr",error:err.message})
    }
})
app.put('/todos/:id',async(req,res)=>{
    try{
        const todo=await TODO.findByIdAndUpdate(req.params.id, req.body, {new:true})
        res.json({message:"Data Updated: ", todo})
    }
    catch(err)

    {
        res.json({message:"Error",error:err.message})
    }
})
app.delete('/todos/:id',async(req,res)=>{
    try{
        const todo=await TODO.findByIdAndDelete(req.params.id)
        res.json({message:"Data deleted"})
    }
    catch(err)
    {
        res.json({message:"Error",error:err.message})

    }
})
app.listen(3000,()=>{
    console.log("Server is running on 3000 port")
})
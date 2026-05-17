const express=require('express')
const mongoose=require('mongoose')
const app=express()
app.use(express.json())
mongoose.connect('mongodb://127.0.0.1:27017/studentdb')
.then(()=>{console.log("Mongoose connected")})
.catch((err)=>{console.log("Error",err)})
const StudentSchema= new mongoose.Schema({
    name:{type: String, required: true},
    email:{type:String, required: true, unique:true},
    college:{type:String, required:true},
    semester:{type:Number, required:true},
    subjects:[String],
    isActive:{type:Boolean, default:true},
    createdAt:{type:Date, default:Date.now}
})
const Student = mongoose.model("Student", StudentSchema)
app.post('/students',async(req,res)=>{
    try{
        const student= new Student(req.body)
        await student.save()
        res.json(student)
    }
    catch(err)
    {
        res.json({message:"Error",error:err.message})
    }
})
app.get('/students',async(req,res)=>{
    try{
        const students= await Student.find()
        res.json(students)
    }
    catch(err)
    {
        res.json({message:"Error",error:err.message})
    }
})
app.get('/students/:id',async(req,res)=>{
    try{
        const student = await Student.findById(req.params.id)
        res.json(student)
    }
    catch(err)
    {
        res.json({message:"Error",error:err.message})
    }
})
app.put('/students/:id',async(req,res)=>{
    try{
        const student=await Student.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.json({message:"Students data updated: ",student})

    }
    catch(err)
    {
        res.json({message:"Error",error:err.message})
    }
})
app.delete('/students/:id',async(req,res)=>{
    try{
        const student = await Student.findByIdAndDelete(req.params.id)
        res.json({message:"Students data deleted"})
    }
    catch(err)
    {
        res.json({message:"Error",error:err.message})
    }
})
app.listen(3000,()=>{
    console.log("Server is running on 3000 port")
})
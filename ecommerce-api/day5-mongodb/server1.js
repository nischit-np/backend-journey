const express=require('express')
const mongoose=require('mongoose')
const app=express()
app.use(express.json())
mongoose.connect('mongodb://localhost:27017/mydb')
.then(()=>console.log('MongoDB connected'))
.catch(err=>console.log('Error: ',err))


const studentSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    college:{
        type:String,
        required:true
    },
    semester:{
        type:Number,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})
const Student= mongoose.model('Student',studentSchema)

app.post('/students',async (req,res)=>{
    try{
        const student=new Student(req.body)
        await student.save()
        res.json({message:'Student created', student})
    }
    catch(err)
{
    res.json({message:'Error', error:err.message})
}
})
app.get('/students',async (req,res)=>{
    try{
        const students= await Student.find()
        res.json({message:'Students details:', students})
    }
    catch(err)
    {
        res.json({message:'Error', error:err.message})

    }
})
app.get('/students/:id',async(req,res)=>{
    try{
        const student= await Student.findById(req.params.id)
        res.json(student)
    }
    catch(err)
    {
        res.json({message:"Error",error:err.message})
    }
})
app.put('/students/:id', async(req,res)=>{
    try{
        const student=await Student.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.json({message:"Updated students: ", student)
        
    }
    catch(err)
    {
        res.json({message:'Error',error:err.message})
    }
})
app.delete('/students/:id',async (req,res)=>{
    try{
        const student=await Student.findByIdAndDelete(req.params.id)
        res.json({message:'Student deleted'})
    }
    catch(err)
    {
        res.json({message:'Error',error:err.message})
    }
})
app.listen(3000,()=>{
    console.log('Server is running on port 3000')
})

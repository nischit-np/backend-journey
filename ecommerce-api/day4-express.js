const express=require('express')
const app=express()
app.use(express.json())
app.use((req,res,next)=>{
    console.log(`${req.method} request to ${req.url}`)
    next()
})
app.get('/students',(req,res)=>
{
    res.json([
        {id:17,name:"Nischit",semester:4},
        {id:18,name:"Nishan",semester:5},
        {id:11,name:"Bidhan",semester:4},
    ])
})
app.get('/students/:id',(req,res)=>{
    const id=req.params.id
    res.json({message:"Students with id:"+id})
})
app.post('/students',(req,res)=>
{
    const newStudent=req.body
    res.json({message:"Students created",student:newStudent})
})
app.put('/students/:id',(req,res)=>{
    const id=req.params.id
    const updatedData=req.body
    res.json({message:"Students with id: "+id+" updated", data:updatedData})
})
app.delete('/students/:id',(req,res)=>{
    const id=req.params.id
    res.json({message:"Students with id: "+id+" deleted"})
})
app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})
const Student=require('../models/Student')
const bcrypt=require('bcryptjs')
const getStudents=async(req,res)=>{
  try{
    const students=await Student.find()
    res.status(200).json(students)

  }
  catch(err)
  {
    res.status(500).json({message:'Error',error:err.message})
  }
}
const getStudent=async(req,res)=>{
  try{
    const student=await Student.findById(req.params.id)
    if(!student)return res.status(404).json({message:'Student not found'})
      res.status(200).json(student)

  }
  catch(err)
  {
    res.status(500).json({message:'Error',error:err.message})
  }
}
const createStudent=async(req,res)=>{
try{
  const student= new Student(req.body)
  const salt= await bcrypt.genSalt(10)
  student.password=await bcrypt.hash(student.password,salt)
  await student.save()
  res.status(201).json(student)


}
catch(err)
{
  res.status(500).json({message:'Error',error:err.message})
}
}
const updateStudent=async(req,res)=>{
  try{
    const student=await Student.findByIdAndUpdate(req.params.id,req.body,{new:true})
    if(!student)return res.status(404).json({message:'Student not found'})
    res.status(200).json(student)
  }
  catch(err)
  {
    res.status(500).json({message:'Error',error:err.message})
  }
}
const deleteStudent=async(req,res)=>{
  try{
    conststudent=await Student.findByIdAndDelete(req.params.id)
    if(!student) return res.status(404).json({message:'Student not found'})
    res.status(200).json({message:'Student deleted'})
  }
  catch(err)
  {
    res.status(500).json({message:'Error',error:err.message})
  }
}
module.exports={getStudents,getStudent,createStudent,updateStudent,deleteStudent}
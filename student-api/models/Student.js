const mongoose=require('mongoose')
const studentSchema= new mongoose.Schema({
  name:{type:String, required:true},
  email:{type:String,required:true,unique:true},
  college:{type:String,required:true},
  semester:{type:Number, required:true},
  subjects:[String],
  isActive:{type:Boolean, default:true},
  password: { type: String, required: true },
  createdAt:{type:Date, default:Date.now}
})
module.exports=mongoose.model('Student',studentSchema)
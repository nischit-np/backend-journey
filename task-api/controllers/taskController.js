const Task = require('../models/Task')
const createTask=async(req,res)=>{
    try{
        const {title,description,priority,status,dueDate}=req.body
        const task= new Task({
            title,
            description,
            priority,
            status,
            dueDate,
            user:req.user.id
        })
        await task.save()
        res.status(201).json({message:'New task created',task})
    }
    catch(err)
    {
        res.status(500).json({message:'Error',error:err.message})
    }
}
const getMyTasks=async(req,res)=>{
    try{
        const filter={user:req.user.id}
        if(req.query.status){filter.status=req.query.status}
        if(req.query.priority){filter.priority=req.query.priority}
        const tasks=(await Task.find(filter))
        res.status(200).json(tasks)
    }
    catch(err)
    {
        res.status(500).json({message:'Error',error:err.message})
    }
}
const getMyTask=async(req,res)=>{
    try{
        const task=await Task.findOne({_id:req.params.id,user:req.user.id})
        if(!task){return res.status(404).json({message:'Task not found'})}
        res.status(200).json(task)
    }
    catch(err)
    {
        res.status(500).json({message:'Error',error:err.message})
    }
}
const updateTask=async(req,res)=>{
    try{
        const task=await Task.findOneAndUpdate({_id:req.params.id,user:req.user.id},req.body,{new:true})
        if(!task){return res.status(404).json({message:'Task not found'})}
        res.status(200).json({message:'Task Updated',task})
    }
    catch(err)
    {
        res.status(500).json({message:'Error',error:err.message})
    }
}
const markComplete=async(req,res)=>{
    try{
        const task=await Task.findOneAndUpdate({_id:req.params.id,user:req.user.id},{status:'completed'},{new:true})
        if(!task){return res.status(404).json({message:'Task not found'})}
        res.status(200).json({message:'Task status is completed ', task})
    }
    catch(err)
    {
        res.status(500).json({message:'Error',error:err.message})
    }
}
const deleteTask=async(req,res)=>{
    try{
        const task=await Task.findOneAndDelete({_id:req.params.id,user:req.user.id})
        if(!task){return res.status(404).json({message:'Task not found'})}
        res.status(200).json({message:'Task deleted'})
    }
    catch(err)
    {
        res.status(500).json({message:'Error',error:err.message})
    }
}
module.exports={createTask,
    getMyTasks, 
    getMyTask, 
    updateTask, 
    deleteTask, 
    markComplete}

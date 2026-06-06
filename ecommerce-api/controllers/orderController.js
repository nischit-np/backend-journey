const Order = require('../models/Order')
const Product = require('../models/Product')
const placeOrder=async(req,res)=>{
    try{
        const {items}=req.body
        let totalAmount=0
        for(let item of items){
            const product=await Product.findById(item.product)
            if(!product){return res.status(404).json({message:'Product not found'})}
            totalAmount+=product.price*item.quantity
        }
        const order=new Order({
            user:req.user.id,
            items,
            totalAmount
        })
        await order.save()
        res.status(201).json(order)
    }
    catch(err)
    {
        res.status(500).json({message:'Error',error:err.message})
    }
}
const getMyOrders=async(req,res)=>{
    try{
        const orders= await Order.find({user:req.user.id}).populate('items.product','name price')
        res.status(200).json(orders)
    }
    catch(err) {
    res.status(500).json({ message: 'Error', error: err.message })
    }
}
module.exports = { placeOrder, getMyOrders }

const Product = require('../models/Product')
const getProducts=async(req,res)=>{
    try{
        const products= await Product.find()
        res.status(201).json(products)
    }
    catch(err)
    {
        res.status(500).json({message:'Error',error:err.message})
    }
}
const getProduct=async(req,res)=>{
    try{
        const product=await Product.findById(req.params.id)
        if(!product){
            return res.status(404).json({message:'Product not found'})
        }
        res.status(200).json(product)
    }
    catch(err)
    {
        res.status(500).json({message:'Error',error:err.message})
    }
}
const createProduct=async(req,res)=>{
    try{
        const product = new Product({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description
        })
        await product.save()
        res.status(201).json(product)
    }
    catch(err)
    {
        res.status(400).json({message:'Error',error:err.message})
    }
}
const updateProduct=async(req,res)=>{
    try{
        const product=await Product.findByIdAndUpdate(req.params.id, req.body, {new:true})
    if(!product){
        return res.status(404).json({message:'Product not found'})
    }
    res.status(200).json({message:'Product Updated ',product})
    }
    catch(err)
    {
        return res.status(500).json({message:'Error',error:err.message})
    }
}
const deleteProduct=async(req,res)=>{
    try{
        const product=await Product.findByIdAndDelete(req.params.id)
        if(!product) return res.status(404).json({ message: 'Product not found' })
    res.status(200).json({ message: 'Product deleted' })
  } catch(err) {
    res.status(500).json({ message: 'Error', error: err.message })
  }
}
module.exports={getProducts,getProduct,createProduct,updateProduct,deleteProduct}
const express = require('express')
const router = express.Router()
const { body } = require('express-validator')
const validateFields = require('../middleware/validate')
const protect = require('../middleware/auth')
const isAdmin = require('../middleware/isAdmin')
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct
} = require('../controllers/productController')
const productRules=[
    body('name').notEmpty().withMessage('Name is required'),
    body('description').notEmpty().withMessage('Description is required'),
    body('price').isNumeric().withMessage('Price must be a number'),
    body('category').notEmpty().withMessage('Category is required')
]
router.get('/', getProducts)
router.get('/:id', getProduct)
router.post('/', protect, isAdmin, productRules, validateFields, createProduct)
router.put('/:id', protect, isAdmin, productRules, validateFields, updateProduct)
router.delete('/:id', protect, isAdmin, deleteProduct)
module.exports = router
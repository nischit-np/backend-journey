const express = require('express')
const router = express.Router()
const protect = require('../middleware/auth')
const { placeOrder, getMyOrders } = require('../controllers/orderController')
const { body } = require('express-validator')
const validateFields = require('../middleware/validate')

const orderRules = [
  body('items').isArray({ min: 1 }).withMessage('Items must be a non empty array'),
  body('items.*.product').notEmpty().withMessage('Product ID is required'),
  body('items.*.quantity').isInt({ min: 1 }).withMessage('Quantity must be at least 1')
]

router.post('/', protect, orderRules, validateFields, placeOrder)
router.get('/my-orders', protect, getMyOrders)
module.exports = router

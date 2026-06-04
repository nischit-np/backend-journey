const express = require('express')
const router = express.Router()
const { body } = require('express-validator')
const validateFields = require('../middleware/validate')
const { registerUser, loginUser } = require('../controllers/authController')

const registerRules = [
  body('name')
    .notEmpty().withMessage('Name is required')
    .isLength({ min: 2 }).withMessage('Name must be at least 2 characters'),
  body('email')
    .notEmpty().withMessage('Email is required')
    .isEmail().withMessage('Please enter valid email'),
  body('password')
    .notEmpty().withMessage('Password is required')
    .isLength({ min: 6 }).withMessage('Password must be at least 6 characters')
]

const loginRules = [
  body('email')
    .notEmpty().withMessage('Email is required')
    .isEmail().withMessage('Please enter valid email'),
  body('password')
    .notEmpty().withMessage('Password is required')
]

router.post('/register', registerRules, validateFields, registerUser)
router.post('/login', loginRules, validateFields, loginUser)

module.exports = router
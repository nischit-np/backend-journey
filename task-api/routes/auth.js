const express = require('express')
const router = express.Router()
const { body } = require('express-validator')
const validateFields = require('../middleware/validate')
const protect = require('../middleware/auth')
const {
  register,
  login,
} = require('../controllers/authController')
const registerRules=[
    body('name')
        .notEmpty().withMessage('Name is required')
        .isLength({min:3}).withMessage('Name is required with atleast 3 characters'),
    body('email')
        .notEmpty().withMessage('Email is required')
        .isEmail().withMessage('Email is required'),
    body('password')
        .notEmpty().withMessage('Password is required')
        .isLength({min:8}).withMessage('Password is required with atleast 8 characters'),
]
const loginRules = [
  body('email')
    .notEmpty().withMessage('Email is required')
    .isEmail().withMessage('Please enter valid email'),
  body('password')
    .notEmpty().withMessage('Password is required')
]
router.post('/register',registerRules,validateFields,register)
router.post('/login',loginRules,validateFields,login)
module.exports = router
const express = require('express')
const router = express.Router()
const { body } = require('express-validator')
const validateFields= require('../middleware/validate')
const { register, login } = require('../controllers/authController')
const registerRules=[
    body('name').notEmpty().withMessage('Name is required'),
    body('name').isLength({min:3}).withMessage('Name should have at least 3 characters'),
    body('email').notEmpty().withMessage('Email is required'),
    body('email').isEmail().withMessage('Enter Valid email'),
    body('password').notEmpty().withMessage('Password is required'),
    body('password').isLength({min:8}).withMessage('Password should be at least 8 characters'),
]
const loginRules=[
    body('email').isEmail().withMessage('Valid email required'),
    body('password').notEmpty().withMessage('Password is required'),
]
router.post('/register',registerRules,validateFields,register)
router.post('/login',loginRules,validateFields,login)
module.exports=router
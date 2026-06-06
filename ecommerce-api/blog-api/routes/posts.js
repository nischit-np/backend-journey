const express = require('express')
const router = express.Router()
const { body } = require('express-validator')
const validateFields = require('../middleware/validate')
const protect = require('../middleware/auth')
const {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost
} = require('../controllers/postController')

const postRules = [
  body('title')
    .notEmpty().withMessage('Title is required')
    .isLength({ min: 3 }).withMessage('Title must be at least 3 characters'),
  body('content')
    .notEmpty().withMessage('Content is required')
    .isLength({ min: 10 }).withMessage('Content must be at least 10 characters')
]

router.get('/', getPosts)
router.get('/:id', getPost)
router.post('/', protect, postRules, validateFields, createPost)
router.put('/:id', protect, postRules, validateFields, updatePost)
router.delete('/:id', protect, deletePost)

module.exports = router
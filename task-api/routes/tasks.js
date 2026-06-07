const express = require('express')
const router = express.Router()
const { body } = require('express-validator')
const validateFields = require('../middleware/validate')
const protect = require('../middleware/auth')
const {
  createTask,
  getMyTasks,
  getMyTask,
  updateTask,
  markComplete,
  deleteTask
} = require('../controllers/taskController')

const taskRules = [
  body('title').notEmpty().withMessage('Title is required'),
  body('priority')
    .optional()
    .isIn(['low', 'medium', 'high'])
    .withMessage('Priority must be low, medium or high'),
  body('status')
    .optional()
    .isIn(['pending', 'in-progress', 'completed'])
    .withMessage('Status must be pending, in-progress or completed'),
]

router.post('/', protect, taskRules, validateFields, createTask)
router.get('/', protect, getMyTasks)
router.get('/:id', protect, getMyTask)
router.put('/:id', protect, taskRules, validateFields, updateTask)
router.patch('/:id/complete', protect, markComplete)
router.delete('/:id', protect, deleteTask)

module.exports = router
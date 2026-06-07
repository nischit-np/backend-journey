require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const authRoutes = require('./routes/auth')
const taskRoutes = require('./routes/tasks')

const app = express()
app.use(express.json())

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err))

app.get('/', (req, res) => {
  res.json({
    message: 'Task Manager API is running!',
    developer: 'Nischit',
    github: 'https://github.com/nischit-np',
    endpoints: {
      auth: '/api/auth/register, /api/auth/login',
      tasks: '/api/tasks'
    }
  })
})

app.use('/api/auth', authRoutes)
app.use('/api/tasks', taskRoutes)

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`)
})
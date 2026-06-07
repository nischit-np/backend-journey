require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const authRoutes = require('./routes/auth')
const postRoutes = require('./routes/posts')

const app = express()
app.use(express.json())

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('Error:', err))

app.get('/', (req, res) => {
  res.json({
    message: 'Blog API is running!',
    developer: 'Nischit',
    github: 'https://github.com/nischit-np',
    endpoints: {
      auth: {
        register: 'POST /api/auth/register',
        login: 'POST /api/auth/login'
      },
      posts: {
        getAllPosts: 'GET /api/posts',
        getPost: 'GET /api/posts/:id',
        createPost: 'POST /api/posts (protected)',
        updatePost: 'PUT /api/posts/:id (protected)',
        deletePost: 'DELETE /api/posts/:id (protected)'
      }
    }
  })
})
  app.use('/api/auth', authRoutes)
app.use('/api/posts', postRoutes)

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`)
})
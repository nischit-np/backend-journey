require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const authRoutes = require('./routes/auth')
const productRoutes = require('./routes/product')
const orderRoutes = require('./routes/orders')

const app = express()
app.use(express.json())

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err))

app.get('/', (req, res) => {
  res.json({
    message: 'Ecommerce API is running!',
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
app.use('/api/products', productRoutes)
app.use('/api/orders', orderRoutes)

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`)
})
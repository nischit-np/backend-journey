# Blog API

A REST API built with Node.js, Express, and MongoDB.

## Features
- User registration and login
- JWT Authentication
- Create, read, update, delete blog posts
- Protected routes — only logged in users can create posts

## Tech Stack
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT + bcryptjs

## Live API
https://backend-journey-1b6h.onrender.com

## API Endpoints

### Auth
- POST /api/auth/register — Register user
- POST /api/auth/login — Login user

### Posts
- GET /api/posts — Get all posts
- GET /api/posts/:id — Get single post
- POST /api/posts — Create post (protected)
- PUT /api/posts/:id — Update post (protected)
- DELETE /api/posts/:id — Delete post (protected)
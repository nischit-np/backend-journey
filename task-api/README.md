# Task Manager API

A REST API for managing personal tasks with filtering and status tracking.
Built with Node.js, Express and MongoDB.

## Features
- User registration and login with JWT
- Create and manage personal tasks
- Filter tasks by status and priority
- Mark tasks as complete
- Input validation
- Protected routes — users only see their own tasks

## Tech Stack
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT + bcryptjs
- express-validator

## Live API
https://task-api-xxxx.onrender.com

## API Endpoints

### Auth
- POST /api/auth/register — Register user
- POST /api/auth/login — Login user

### Tasks (all protected)
- GET /api/tasks — Get all my tasks
- GET /api/tasks?status=pending — Filter by status
- GET /api/tasks?priority=high — Filter by priority
- POST /api/tasks — Create task
- GET /api/tasks/:id — Get single task
- PUT /api/tasks/:id —
## Live API
https://task-api-hbiy.onrender.com
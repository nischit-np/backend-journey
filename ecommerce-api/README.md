# E-Commerce API

A complete REST API for an online shop built with Node.js, Express and MongoDB.

## Features
- User registration and login with JWT
- Admin and user roles
- Product management — admin only
- Order placement and tracking
- Input validation
- Protected routes

## Tech Stack
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT + bcryptjs
- express-validator

## API Endpoints

### Auth
- POST /api/auth/register — Register user
- POST /api/auth/login — Login user

### Products
- GET /api/products — Get all products (public)
- GET /api/products/:id — Get single product (public)
- POST /api/products — Create product (admin only)
- PUT /api/products/:id — Update product (admin only)
- DELETE /api/products/:id — Delete product (admin only)

### Orders
- POST /api/orders — Place order (logged in users)
- GET /api/orders/my-orders — Get my orders (logged in users)
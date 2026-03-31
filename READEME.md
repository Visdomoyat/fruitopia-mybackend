# Fruitopia Backend API

## Overview

This API helps in adding fruits, viewing the list of fruits, updating fruits, and deleting fruits, and viewing details of each fruit

## Tech Stack
- Node.js
- Express
- MongoDB + Mongoose
- Morgan, CORS, Dotenv, Nodemon

## Getting Started
### Environment Variables
Create .env:
MONGODB_URI=your_connection_string
CLIENT_ORIGIN=http://localhost:5173
### Prerequisites
- Node.js >= XX
- MongoDB Atlas/local MongoDB

### Data Model
Fruit:
- name: String (required)
- color: String
- readyToEat: Boolean

### Testing API Endpoints
GET localhost:3000/fruit [Returns all fruits]
POST localhost:3000/fruit [Creates a fruit]
    - request body: {
  "name": "Mango",
  "color": "Yellow",
  "readyToEat": true
}

### Installation
```bash
npm install 
Run: npm run dev


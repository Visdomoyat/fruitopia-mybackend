# Fruitopia Backend API

## Overview
Fruitopia Backend is a REST API for creating, reading, updating, and deleting fruit records stored in MongoDB.

## Tech Stack
- Node.js
- Express
- MongoDB + Mongoose
- Morgan
- CORS
- Dotenv
- Nodemon

## Prerequisites
- Node.js 18 or later
- MongoDB Atlas (or local MongoDB instance).

## Installation
```bash
npm install
```

## Environment Variables
Create a `.env` file in the project root:

```env
MONGODB_URI=your_connection_string
CLIENT_ORIGIN=http://localhost:5173
```

## Running the Server
Development mode:

```bash
npm run dev
```

Production mode:

```bash
npm start
```

Server runs on:

```text
http://localhost:3000
```

## API Endpoints
Base route: `/fruit`

- `GET /fruit` - Get all fruits
- `GET /fruit/:fruitId` - Get one fruit by ID
- `POST /fruit` - Create a fruit
- `PUT /fruit/:fruitId` - Update a fruit by ID
- `DELETE /fruit/:fruitId` - Delete a fruit by ID

### Example Create Request Body
```json
{
  "name": "Mango",
  "family": "Anacardiaceae",
  "order": "Sapindales",
  "genus": "Mangifera",
  "nutrition": {
    "calories": "60",
    "fat": "0.4",
    "sugar": "13.7",
    "carbohydrates": "15",
    "protein": "0.8"
  }
}
```

## Data Model
`Fruit`
- `name`: String
- `family`: String
- `order`: String
- `genus`: String
- `nutrition`: Object
  - `calories`: String
  - `fat`: String
  - `sugar`: String
  - `carbohydrates`: String
  - `protein`: String

## Project Structure
```text
controllers/
models/
server.js
```

## License
ISC

## Author
Wisdom Oyatokun  
Full Stack Developer

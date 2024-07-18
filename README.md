# Chat App Backend

This repository contains the backend for a chat application, including API endpoints and MongoDB database connectivity.

## Features

- RESTful API endpoints for chat functionality
- MongoDB integration for data storage
- User authentication and authorization
- Real-time messaging support

## Prerequisites

- Node.js 
- MongoDB 
- npm

## Installation

1. Clone the repository:
2. Install dependencies:
3. Create a `.env` file in the root directory and add the following variables:

  Replace the values with your specific configuration:
- `PORT`: The port on which your server will run
- `MONGO_CON_URL`: Your MongoDB connection string
- `JWT_SECRET`: A secret key for JWT token generation
- `NODE_ENV`: Your current environment (development, production, etc.)

## Usage

1. Start the server:
2. The API will be available at `http://localhost:3000`

## API Endpoints

- `POST/api/auth/signup`: Create Account
- `POST/api/auth/signin` : Login User
- `POST/api/auth/signout` : Logout User
- `GET/api/users` : Get All User
- `POST/api/message/send/:id` : Message send to Id
- `GET/api/message/:id` : Particuler Id Get all Message 

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

# 😊

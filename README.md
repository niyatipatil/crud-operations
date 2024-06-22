# CRUD Operations with Node.js and MongoDB

This repository contains a Node.js project demonstrating CRUD (Create, Read, Update, Delete) operations with MongoDB. The project uses Express.js for the web server and Mongoose for MongoDB object modeling.

## Setup Instructions

### 1. Clone the Repository
* git clone https://github.com/niyatipatil/crud-operations.git

### 2. Navigate to the Project Directory
* cd crud-operations

### 3. Install Dependencies
* npm init
* npm i express mongoose

### 4. run index.js
* nodemon index.js or node index.js

### 5. Use Postman to send requests to the API endpoints.
### MongoDB
This project uses MongoDB as the database. Make sure you have MongoDB installed and running on your local machine. You can download MongoDB from the official website.
### Postman Commands:
Here are example commands to test the API endpoints using Postman:

- **GET All Users**:
GET http://localhost:8000/user

- **Create a User**:
POST http://localhost:8000/createuser
Body: { "name": "John Doe", "email": "john@example.com", "password": "password123" }
Body (raw - json format)

- **Update a User**:
PUT http://localhost:8000/user/:id
Body: { "name": "Jane Doe", "email": "jane@example.com" }

- **Delete a User**:
DELETE http://localhost:8000/user/:id


Similar commands can be used for products and orders endpoints.
You can replace `:id` with the actual ID of the user, product, or order you want to update or delete.

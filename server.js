const express = require('express');
const db = require('./config/connection'); // Import the database connection
const routes = require('./routes'); // Import the routes

const PORT = process.env.PORT || 3001; // Define the port number
const app = express(); // Create an Express app instance

// Middleware to parse JSON bodies and URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware to use the defined routes
app.use(routes);

// Once the database connection is open, start the server
db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`); // Log a message when the server is running
    });
});

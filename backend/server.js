// server.js
const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');  // Import the database connection
const questionSetRoutes = require('./routes/questionSetRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
connectDB();  // Connect to the database

// Routes
app.use('/api/questionsets', questionSetRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

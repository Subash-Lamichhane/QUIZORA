const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');  // Import morgan
const connectDB = require('./config/db');  // Import the database connection
const questionSetRoutes = require('./routes/questionSetRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));  // Use morgan middleware with 'dev' format

// Connect to MongoDB
connectDB();  // Connect to the database

// Routes
app.use('/api/questionsets', questionSetRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
